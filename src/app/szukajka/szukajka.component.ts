import { Component,OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-szukajka',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './szukajka.component.html',
  styleUrl: './szukajka.component.css'
})
export class SzukajkaComponent {

  constructor( private service: SharedService,) { }

  opony: any = [];
  nrRejestracyjny: string = '';
  displayedColumns: string[] = ['id', 'marka', 'model', 'sezon', 'felgi', 'DOT', 'klient', 'auto', 'ilosc', 'bieznik', 'lokalizacja', 'uwagi', 'status', 'data', 'akcja'];


  Szukajka(){
    console.log("Searching for:", this.nrRejestracyjny); // Debugging line
    if (this.nrRejestracyjny.trim()) {
      this.service.Search(this.nrRejestracyjny).subscribe(data => {
        this.opony = data;
        console.log("Records received:", this.opony); //
      });
    }
  }
}
