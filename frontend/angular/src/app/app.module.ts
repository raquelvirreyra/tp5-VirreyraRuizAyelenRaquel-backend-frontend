import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Punto5TableComponent } from './components/punto5-table/punto5-table.component';
import { Punto5FormComponent } from './components/punto5-form/punto5-form.component';
import { Punto1FormComponent } from './components/punto1-form/punto1-form.component';
import { Punto2TablaComponent } from './components/punto2-tabla/punto2-tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Punto1Component,
    Punto2Component,
    Punto5TableComponent,
    Punto5FormComponent,
    Punto1FormComponent,
    Punto2TablaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
