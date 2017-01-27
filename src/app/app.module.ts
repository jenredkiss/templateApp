import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainViewComponent } from './component/main-view/main-view.component';
import { NavbarComponent } from './component/main-view/navbar/navbar.component';
import { FooterComponent } from './component/main-view/footer/footer.component';
import { MainBodyComponent } from './component/main-view/main-body/main-body.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    NavbarComponent,
    FooterComponent,
    MainBodyComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
