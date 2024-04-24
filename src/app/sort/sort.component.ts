import { Component } from '@angular/core';

import { TabelaComponent } from '../tabela/tabela.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RegalComponent } from '../regal/regal.component';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css'],
  standalone: true,
  imports: [
    TabelaComponent,
    RegalComponent,
    MatTabsModule,
    LoginComponent
  ]
})
export class SortComponent {


}
