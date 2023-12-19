import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TabelaComponent } from '../tabela/tabela.component';
import {MatTabsModule} from '@angular/material/tabs';
import { RegalComponent } from '../regal/regal.component';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css'],
  standalone: true,
  imports:[
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    TabelaComponent,
    RegalComponent,
    MatTabsModule
  ]
})
export class SortComponent {

}
