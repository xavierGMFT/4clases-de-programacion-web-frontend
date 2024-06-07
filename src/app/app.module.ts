// Importaciones de @angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Error404Component } from './components/error-404/error-404.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './modules/home/home.component';
import { NavBarComponent } from './modules/nav-bar/nav-bar.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { MenubarModule } from 'primeng/menubar';
import { Form2Component } from './components/form2/form2.component';
import { ProductListComponent } from './modules/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    Error404Component,
    InicioComponent,
    HomeComponent,
    NavBarComponent,
    ContactoComponent,
    Form2Component,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CalendarModule,
    AutoCompleteModule,
    InputTextModule,
    ButtonModule,
    MessagesModule,
    ToastModule,
    MenubarModule,
    HttpClientModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
