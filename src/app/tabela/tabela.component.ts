import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion'
import { FormComponent } from '../form/form.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogTabelaComponent } from '../dialog-tabela/dialog-tabela.component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTableModule,
    NgFor,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatExpansionModule,
    FormComponent,
    MatDialogModule,
    NgIf

  ],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css'
})

export class TabelaComponent {
  constructor(
    private service: SharedService,
    private router: Router,
  public dialog: MatDialog) { }


  displayedColumns: string[] = ['id', 'marka', 'model', 'sezon','felgi', 'DOT',
                                'klient', 'auto', 'ilosc', 'bieznik','lokalizacja',
                                 'uwagi','status','data', 'akcja',]
  opony: any = [];

  autos: any[] = [];
  filteredAutos: any[] = [];
  searchType: string = 'Nr_nadwozia';
  searchInput: string = '';

  ngOnInit() {
    this.refreshOpony();
  }

  openDialog(id: string){

    const dialogRef = this.dialog.open(DialogTabelaComponent, {
      width: '50%',
      data: id, // Przekazujemy dane rekordu do komponentu dialogowego
     panelClass: 'dialog-frame' // Dodajemy klasę panelu dla ramki


    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // Tutaj możesz wykonać logikę na podstawie wyniku z dialogu
    });


  }

  refreshOpony() {
    this.service.getOpony().subscribe((res) => {
      this.opony = res
    });
  }

  deleteOpony(id: string) {
    this.service.deleteOpony(id).then((res) => {
      console.log(res);
      this.refreshOpony();
    });
  }


  onSearchInputChange(event: any): void {
    this.searchInput = event.target.value;
    this.filterAutos();
  }

  filterAutos(): void {
    if (!this.searchInput) {
      this.filteredAutos = this.autos;
    } else {
      this.filteredAutos = this.autos.filter(auto => {
        return this.searchType === 'Nr_nadwozia'
          ? auto.Nr_nadwozia.includes(this.searchInput)
          : auto.Nr_rejestracyjny.includes(this.searchInput);
      });
    }
  }


}
