import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalRegistrationComponent } from './view/personal-registration/personal-registration.component';
import { TablePersonalRegistrationComponent } from "./view/table-personal-registration/table-personal-registration.component";

const routes: Routes = [
  { path: '', component: PersonalRegistrationComponent },
  { path: 'table', component: TablePersonalRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
