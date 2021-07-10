import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MessageComponent} from "./message/message.component";
import {RouterModule, Routes} from "@angular/router";
import {MessageModule} from "./message/message.module";
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes=[
  {path:"message", component:MessageComponent}
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MessageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
