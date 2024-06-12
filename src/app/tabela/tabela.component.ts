import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogTabelaComponent } from '../dialog-tabela/dialog-tabela.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { NgFor, NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormComponent } from '../form/form.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion'
import { MatIconModule } from '@angular/material/icon';
import { SzukajkaComponent } from '../szukajka/szukajka.component';

@Component({
  selector: 'app-tabela',
  standalone: true,
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
  imports:[
   MatButtonModule,
   MatTableModule,
   NgFor,
   NgIf,
   MatDialogModule,
   MatFormFieldModule,
   FormComponent,
   MatInputModule,
   FormsModule,
   MatExpansionModule,
   MatIconModule,
   SzukajkaComponent

  ]
})
export class TabelaComponent implements OnInit {
  constructor(
    private service: SharedService,
    public dialog: MatDialog
  ) { }

  displayedColumns: string[] = ['id', 'marka', 'model', 'sezon', 'felgi', 'DOT', 'klient', 'auto', 'ilosc', 'bieznik', 'lokalizacja', 'uwagi', 'status', 'data', 'akcja'];
  opony: any = [];


  ngOnInit() {
    this.refreshOpony();
  }

  openDialog(id: string) {
    this.service.getOponyId(id).subscribe(data => {
      const dialogRef = this.dialog.open(DialogTabelaComponent, {
        data: { id: id, data: data } // Przekazanie identyfikatora i danych
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result && result.success) {
          console.log('Edycja zakończona sukcesem');
          // Dodaj tutaj odpowiednie działania po zamknięciu dialogu
        }
      });
    });
  }

  refreshOpony() {
    this.service.getOpony().subscribe((res) => {
      this.opony = res;
    });
  }

  deleteOpony(id: string) {
    this.service.deleteOpony(id).then((res) => {
      console.log(res);
      this.refreshOpony();
    });
  }


}
