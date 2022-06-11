//MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

//ROUTING
import { AppRoutingModule } from './app-routing.module';

//SERVICES
import { PersonalRegistrationService } from './services/personal-registration.service'

//COMPONENTS
import { AppComponent } from './app.component';
import { PersonalRegistrationComponent } from './view/personal-registration/personal-registration.component';
import { TablePersonalRegistrationComponent } from './view/table-personal-registration/table-personal-registration.component';



@NgModule({
  declarations: [
    AppComponent,
    PersonalRegistrationComponent,
    TablePersonalRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [PersonalRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
