import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesComponent } from './components/pages/pages.component';
import { AuthComponent } from './components/auth/auth.component';
import { NavComponent } from './components/nav/nav.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { NoFoundPageComponent } from './components/pages/no-found-page/no-found-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { TaskComponent } from './components/task/task.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
//modulo personalizado que exporta componentes de tipo lista
import { ListsModule } from './modules/lists/lists.module';
import { SaludoComponent } from './components/saludo/saludo.component';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    AuthComponent,
    NavComponent,
    HomePageComponent,
    LoginPageComponent,
    NoFoundPageComponent,
    RegisterPageComponent,
    TaskComponent,
    TaskFormComponent,
    TaskListComponent,
    SaludoComponent,
    ListaContactosComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ListsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
