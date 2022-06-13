//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Components
import { PersonalRegistrationComponent } from './pages/personal-registration/personal-registration.component';
import { TablePersonalRegistrationComponent } from './pages/table-personal-registration/table-personal-registration.component';

//Routing
import { QuoteRoutingModule } from './quote-routing.module';

@NgModule({
  declarations: [
    PersonalRegistrationComponent,
    TablePersonalRegistrationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuoteRoutingModule
  ]
})
export class OnlineQuoteModule { }
