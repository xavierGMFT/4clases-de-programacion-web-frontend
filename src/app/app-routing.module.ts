import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { ContactoComponent } from './components/contacto/contacto.component';
import { NavBarComponent } from './modules/nav-bar/nav-bar.component';
import { HomeComponent } from './modules/home/home.component';
import { FormComponent } from './components/form/form.component';
import { Error404Component } from './components/error-404/error-404.component';
import { Form2Component } from './components/form2/form2.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'form', component: FormComponent },
  { path: 'form2', component: Form2Component },
  { path: 'nav-bar', component: NavBarComponent },
  { path: '**', component: Error404Component } // Redirige cualquier ruta no encontrada a 'nav-bar'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
