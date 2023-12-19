import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTableModule,
    NgFor,

  ],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css'
})
export class TabelaComponent {
  constructor(private service:SharedService){}
  displayedColumns: string[] = ['id','marka','model','nr_nadwozia']
  auta:any=[];

  refreshAuta(){
    this.service.getAuta().subscribe((res)=>{
      this.auta=res
    });
  }

  ngOnInit(){
    this.refreshAuta();
  }

addNotes(NewAuta:string){
  this.service.addAuto(NewAuta).then((res)=>{
    console.log(res);
    this.refreshAuta();
  });
}

  deleteNotes(id:string){
    this.service.deleteAuta(id).then((res)=>{
      console.log(res);
      this.refreshAuta();
    });
  }
}
