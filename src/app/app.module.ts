import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BigInputFieldComponent } from './big-input-field/big-input-field.component';
import { BigButtonComponent } from './big-button/big-button.component';
import { FormsModule } from '@angular/forms';
import { HomeCardsComponent } from './home-cards/home-cards.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { CuentasPesonalizacionComponent } from './cuentas-pesonalizacion/cuentas-pesonalizacion.component';
import { PopupModificarDatosComponent } from './popup-modificar-datos/popup-modificar-datos.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { CrearRecetaComponent } from './Templates/crear-receta/crear-receta.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BigInputFieldComponent,
    BigButtonComponent,
    HomeCardsComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    CuentasPesonalizacionComponent,
    PopupModificarDatosComponent,
    HeaderFooterComponent,
    CrearRecetaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
