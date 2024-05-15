import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SortComponent } from './sort/sort.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  {path:'Opony', component: SortComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {


}
