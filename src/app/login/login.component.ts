import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Pracownik } from './pracownik.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private service: SharedService) { }

  pracownik: Pracownik ={
    Login: '',
    Haslo: '',
  }

  hide = true;

  Login(): void{
    this.service.login(this.pracownik.Login,this.pracownik.Haslo).then((res) => {
      console.log(res);
    });
    }

  }

