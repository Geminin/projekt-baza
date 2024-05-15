import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// import { initializeApp, provideFirebaseApp, getApp } from '@angular/fire/app';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// import { getAuth, provideAuth } from '@angular/fire/auth';
import { SharedService } from './shared.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routes';
import { FormComponent } from './form/form.component';
import { SortComponent } from './sort/sort.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatButtonModule } from '@angular/material/button';



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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
   // AngularFireDatabaseModule,
    AngularFireAuthModule,
    // provideFirebaseApp(() => initializeApp(firebaseConfig)),
    // provideFirestore(() => getFirestore()),
    // provideAuth(() => getAuth()),
    BrowserAnimationsModule,
    SortComponent,
    MatIconModule,
    MatToolbarModule,
    FormComponent,
    LoginComponent,
    AppRoutingModule,
    MatButtonModule,


  ],
  providers: [SharedService],
  bootstrap: [
    AppComponent,
  ]
})


export class AppModule {

}
