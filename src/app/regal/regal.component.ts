import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-regal',
  templateUrl: './regal.component.html',
  styleUrls: ['./regal.component.css'],
  standalone: true,
  imports: [
    MatGridListModule,

  ]
})
export class RegalComponent {

}
