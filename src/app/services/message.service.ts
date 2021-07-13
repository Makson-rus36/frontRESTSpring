import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {MessageModel} from "../models/message.model";
import {SecurityService} from "./SecurityService";

@Injectable()
export class MessageService {
  constructor(private httpClient: HttpClient, private securityService: SecurityService) {
  }

  public getMessages(){
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + this.securityService.getToken()
    }
    return this.httpClient.get("http://localhost:8080/v1/message/", {headers:headers})
  }
  public updateMessages(message:MessageModel){
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + this.securityService.getToken()
    }
    const body={
      "id":message.id,
      "text":message.text
    }
    return this.httpClient.put("http://localhost:8080/v1/message/"+message.id, body,{headers:headers})
  }
  public saveMessages(message:MessageModel){
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + this.securityService.getToken()
    }
    const body={
      "id":message.id,
      "text":message.text
    }
    return this.httpClient.post("http://localhost:8080/v1/message/"+message.id, body,{headers:headers})
  }

  public deleteMessage(message:MessageModel){
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + this.securityService.getToken()
    }
    return this.httpClient.delete("http://localhost:8080/v1/message/"+message.id,{headers:headers})
  }
}
