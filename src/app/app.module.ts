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
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { SpecificInformationCryptoComponent } from './specific-information-crypto/specific-information-crypto.component';
import { GraphComponent } from './graph/graph.component';
import { CurrencyService } from './conversion/currency.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    NavigationComponent,
    WelcomePageComponent,
    ConversionComponent,
    FavoritesComponent,
    SpecificInformationComponent,
    SpecificInformationCryptoComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    CurrencyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
