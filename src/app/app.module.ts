import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { HeaderComponent } from './header/header.component';
import { ListOfferComponent } from './list-offer/list-offer.component';
import { RegisterOfferComponent } from './register-offer/register-offer.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { ToMarketPipe } from './shared/pipes/to-market.pipe';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { FirstNamePipe } from './shared/pipes/first-name.pipe';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { getPtPaginatorIntl } from './shared/translate/pt-paginator-intl';
import { MenuComponent } from './header/menu/menu.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { IntroComponent } from './intro/intro.component';
registerLocaleData(localePt)


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListOfferComponent,
    RegisterOfferComponent,
    AlertComponent,
    ToMarketPipe,
    FirstNamePipe,
    MenuComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    },
    { provide: MatPaginatorIntl, useValue: getPtPaginatorIntl() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
