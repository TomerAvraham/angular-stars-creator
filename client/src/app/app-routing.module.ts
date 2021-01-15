import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { StarListComponent } from './components/star-list/star-list.component';

const routes: Routes = [
  { path: "form", component: FormComponent },
  { path: "stars", component: StarListComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
