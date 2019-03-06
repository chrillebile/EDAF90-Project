import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ConversionComponent } from './conversion/conversion.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SpecificInformationComponent } from './specific-information/specific-information.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    NavigationComponent,
    WelcomePageComponent,
    ConversionComponent,
    FavoritesComponent,
    SpecificInformationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
