import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Timestamp } from 'firebase/firestore';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-stat',
  standalone: true,
  imports: [NgFor],
  templateUrl: './stat.component.html',
  styleUrl: './stat.component.css'
})
export class StatComponent implements OnInit {

  opony: any[] = [];
  latoIlosc: number = 0;
  zimaIlosc: number = 0;
  iloscMiesiac: { [key: string]: number } = {};


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


  PoliczMiesiac(){
    const miesiace = [
      'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec',
      'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'
    ];

    this.iloscMiesiac = {};

    this.opony.forEach(record => {
      const recordDATE = record.data;
      const monthYear = '{$miesiace[recordDate.miesiac - 1]} ${recordDate.rok}';

      if (!this.iloscMiesiac[monthYear]){
        this.iloscMiesiac[monthYear] = 0;
      }

      this.iloscMiesiac[monthYear]++;
    });
  }

  getMonths(): string[] {
    const miesiace = [
      'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec',
      'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'
    ];

    return Object.keys(this. iloscMiesiac).sort((a, b) => {
      const [monthA, yearA] = a.split(' ');
      const [monthB, yearB] = b.split(' ');

      const dateA = new Date(Number(yearA), miesiace.indexOf(monthA));
      const dateB = new Date(Number(yearB), miesiace.indexOf(monthB));

      return dateA.getTime() - dateB.getTime();
    });
  }

  }



