import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MessageComponent} from "./message/message.component";
import {RouterModule, Routes} from "@angular/router";
import {MessageModule} from "./message/message.module";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from './home/home.component';
import {HomeModule} from "./home/home.module";

const appRoutes: Routes=[
  {path:"message", component:MessageComponent},
  {path:"**", component:HomeComponent}
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MessageModule,
    HomeModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
