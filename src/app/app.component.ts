import { Component } from '@angular/core';
import {MessageService} from "./services/message.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MessageService]
})
export class AppComponent {
  public isMenuCollapsed = true;
}
