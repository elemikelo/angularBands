import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BandDetailsComponent } from './band-details/band-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { AppRoutingModule } from './app-routing/app-routing.module'


@NgModule({
  declarations: [
    AppComponent,
    BandDetailsComponent,
    HeaderComponent,
    FooterComponent,
    UnderConstructionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
