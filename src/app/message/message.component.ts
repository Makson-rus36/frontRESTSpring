import { Component, OnInit } from '@angular/core';
import {MessageModel} from "../models/message.model";
import {MessageService} from "../services/message.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers:[MessageService]
})
export class MessageComponent implements OnInit {

  messages: MessageModel[]=[];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.getMessages().subscribe(x=>{
      this.messages = <MessageModel[]>x;
    })
  }

}
