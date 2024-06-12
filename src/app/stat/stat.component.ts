import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-stat',
  standalone: true,
  imports: [
    NgFor,
    MatTableModule,

  ],
  templateUrl: './stat.component.html',
  styleUrl: './stat.component.css'
})
export class StatComponent implements OnInit {

  opony: any[] = [];
  latoIlosc: number = 0;
  zimaIlosc: number = 0;
  iloscMiesiac: number[] =[];
  nazwyMiesiecy: string[] = [
    'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec',
    'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'
  ];



  constructor(private service: SharedService) { }

  ngOnInit() {
    this.service.getOpony().subscribe(data => {
      this.opony = data;
      this.Policz();
      this.PoliczMiesiac();
    });
  }

  Policz() {
    this.latoIlosc = this.opony.filter(record => record.Sezon === "Lato").length;
    this.zimaIlosc = this.opony.filter(record => record.Sezon === "Zima").length;
  }


  PoliczMiesiac() {
    this.iloscMiesiac = Array(12).fill(0);

    this.opony.forEach(record => {
        const month = parseInt(record.Data.Miesiac, 10) - 1; // Zamiana stringa na liczbę i przeliczenie na indeks tablicy | 10 oznacza system dziesiętny
        if (month >= 0 && month < 12) {
            this.iloscMiesiac[month]++;
        }
    });
}


  }



