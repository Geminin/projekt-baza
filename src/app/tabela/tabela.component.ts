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

  ],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css'
})

export class TabelaComponent {
  constructor(
    private service: SharedService,
    private router: Router) { }

  displayedColumns: string[] = ['id', 'marka', 'model', 'sezon','felgi', 'DOT', 'klient', 'auto', 'ilosc', 'bieznik', 'uwagi', 'akcja',]
  opony: any = [];


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.opony.filter = filterValue.trim().toLowerCase();
  }

  refreshOpony() {
    this.service.getOpony().subscribe((res) => {
      this.opony = res
    });
  }

  ngOnInit() {
    this.refreshOpony();
  }




  deleteOpony(id: string) {
    this.service.deleteOpony(id).then((res) => {
      console.log(res);
      this.refreshOpony();
    });
  }
}
