import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ConversionComponent } from './conversion/conversion.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SpecificInformationComponent } from './specific-information/specific-information.component';
<<<<<<< HEAD
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CurrencyService } from './conversion/currency.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

=======
>>>>>>> master
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { SpecificInformationCryptoComponent } from './specific-information-crypto/specific-information-crypto.component';
import { GraphComponent } from './graph/graph.component';
import { CurrencyService } from './conversion/currency.service';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    NavigationComponent,
    WelcomePageComponent,
    ConversionComponent,
    FavoritesComponent,
    SpecificInformationComponent,
<<<<<<< HEAD
    
=======
    SpecificInformationCryptoComponent,
    GraphComponent
>>>>>>> master
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
<<<<<<< HEAD
    MDBBootstrapModule.forRoot()
=======
>>>>>>> master
  ],
  providers: [
    CurrencyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
