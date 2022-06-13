//MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

//ROUTING
import { AppRoutingModule } from './app-routing.module';

//SERVICES
import { PersonalRegistrationService } from './services/personal-registration.service'

//COMPONENTS
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [PersonalRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
