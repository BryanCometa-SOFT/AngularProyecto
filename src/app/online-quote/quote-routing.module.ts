import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Components
import { PersonalRegistrationComponent } from './pages/personal-registration/personal-registration.component';
import { TablePersonalRegistrationComponent } from './pages/table-personal-registration/table-personal-registration.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PersonalRegistrationComponent },
      { path: 'table', component: TablePersonalRegistrationComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class QuoteRoutingModule { }
