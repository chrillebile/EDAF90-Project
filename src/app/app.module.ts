import { HttpErrorResponse, HttpHandler } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NameComponent } from "./name/name.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";
import { ConversionComponent } from "./conversion/conversion.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { SpecificInformationComponent } from "./specific-information/specific-information.component";
import { CurrencyService } from "./conversion/currency.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { SpecificInformationCryptoComponent } from './specific-information-crypto/specific-information-crypto.component';


@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    NavigationComponent,
    WelcomePageComponent,
    ConversionComponent,
    FavoritesComponent,
    SpecificInformationComponent,
    SpecificInformationCryptoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
