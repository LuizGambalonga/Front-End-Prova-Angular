import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './home/login_user/login.component';
import { RegisterComponent } from './home/register/register.component';
import { ClienteRegisterComponent } from './cliente/cliente-register/cliente-register.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { DeslogarComponent } from './components/deslogar/deslogar.component';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ClienteRegisterComponent,
    ClienteListComponent,
    LogoComponent,
    FooterComponent,
    DeslogarComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
