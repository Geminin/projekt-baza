import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp, getApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { SharedService } from './shared.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormComponent } from './form/form.component';
import { SortComponent } from './sort/sort.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';


const firebaseConfig = {
  apiKey: "AIzaSyBZzoqp7XUnOhJ5iHtgDqKwgUXRGp_7Y1k",
  authDomain: "pracainzynierska-3549f.firebaseapp.com",
  projectId: "pracainzynierska-3549f",
  storageBucket: "pracainzynierska-3549f.appspot.com",
  messagingSenderId: "532700381567",
  appId: "1:532700381567:web:b296c54f79e48b3bc39a4a"
};


@NgModule({
  declarations: [
    AppComponent,




  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    SortComponent,
    MatIconModule,
    MatToolbarModule,
    FormComponent,
    LoginComponent


  ],
  providers: [SharedService],
  bootstrap: [
    AppComponent,
  ]
})


export class AppModule {

}
