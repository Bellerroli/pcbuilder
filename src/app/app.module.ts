 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {FormsModule} from "@angular/forms";
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import {AngularFireModule} from "@angular/fire/compat";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
 import {MatSidenavModule} from "@angular/material/sidenav";
 import {MatToolbarModule} from "@angular/material/toolbar";
 import {MatIconButton} from "@angular/material/button";
 import {MatIcon} from "@angular/material/icon";
 import {FlexLayoutModule} from "@angular/flex-layout";
 import {MatListItem, MatNavList} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp({
      "projectId": "webker-pcbuilder",
      "appId": "1:606521257632:web:a2b51e389cd3a6aadfe3c5",
      "storageBucket": "webker-pcbuilder.appspot.com",
      "apiKey": "AIzaSyA43ibYxU3UOFIC_xglcN3ZLax5Mi1k2sw",
      "authDomain": "webker-pcbuilder.firebaseapp.com",
      "messagingSenderId": "606521257632"
    }),
    // provideFirebaseApp(() => initializeApp({"projectId":"webker-pcbuilder","appId":"1:606521257632:web:a2b51e389cd3a6aadfe3c5","storageBucket":"webker-pcbuilder.appspot.com","apiKey":"AIzaSyA43ibYxU3UOFIC_xglcN3ZLax5Mi1k2sw","authDomain":"webker-pcbuilder.firebaseapp.com","messagingSenderId":"606521257632"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    MatIconButton,
    MatIcon,
    MatNavList,
    MatListItem,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
