import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { HomeComponent } from './home/home.component';
import { NotFountComponent } from './not-fount/not-fount.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "1", component: C1Component },
  { path: "2", component: C2Component },
  { path: "contact", component: ContactComponent },
  { path: "**", component: NotFountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
