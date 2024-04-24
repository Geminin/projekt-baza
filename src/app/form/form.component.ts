import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { Opony } from './opony.model';

import { SharedService } from '../shared.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,


  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  constructor(private service: SharedService) { }

  opony: Opony = {
    Klient: {
      Nazwa: '',
      Nr_Klienta: '',
    },
    Auto: {
      Nr_rejestracyjny: '',
      Nr_nadwozia: '',
      Marka: '',
      Model: '',
    },

    Marka: '',
    Model: '',
    Sezon: '',
    Felgi: '',
    Ilosc:'',
    DOT: '',

    Bieznik: {
      PL: '',
      PP: '',
      TL: '',
      TP: ''
    },
    Uwagi: ''
  };

  dodajOpony(): void {
    this.service.addOpony(this.opony).then((res) => {
      console.log(res);
    });

  }
}
