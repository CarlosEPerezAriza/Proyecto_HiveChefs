import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './Templates/login/login.component';
import { BigInputFieldComponent } from './Components/big-input-field/big-input-field.component';
import { BigButtonComponent } from './Components/big-button/big-button.component';
import { FormsModule } from '@angular/forms';
import { HomeCardsComponent } from './Components/home-cards/home-cards.component';
import { HomeComponent } from './Templates/home/home.component';
import { AboutComponent } from './Templates/about/about.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CuentasPesonalizacionComponent } from './Templates/cuentas-pesonalizacion/cuentas-pesonalizacion.component';
import { PopupModificarDatosComponent } from './Components/popup-modificar-datos/popup-modificar-datos.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { CrearRecetaComponent } from './Templates/crear-receta/crear-receta.component';
import { CreadorPasosComponent } from './Templates/creador-pasos/creador-pasos.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCdy61T6YOcg10jzli8dzsPRYBbh7NfSUE",
  authDomain: "recetashivechefs.firebaseapp.com",
  projectId: "recetashivechefs",
  storageBucket: "recetashivechefs.firebasestorage.app",
  messagingSenderId: "924402207853",
  appId: "1:924402207853:web:492b4da8aba8ef75208364"
};


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
    CreadorPasosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)), // Inicializar Firebase
    provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"recetashivechefs","appId":"1:924402207853:web:492b4da8aba8ef75208364","storageBucket":"recetashivechefs.firebasestorage.app","apiKey":"AIzaSyCdy61T6YOcg10jzli8dzsPRYBbh7NfSUE","authDomain":"recetashivechefs.firebaseapp.com","messagingSenderId":"924402207853"})), provideAuth(() => getAuth()), // Inicializar Firestore,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
