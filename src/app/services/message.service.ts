import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {MessageModel} from "../models/message.model";

@Injectable()
export class MessageService {
  constructor(private httpClient: HttpClient) {
  }

  public getMessages(){
    return this.httpClient.get("http://localhost:8080/message/")
  }
  public updateMessages(message:MessageModel){
    const body={
      "id":message.id,
      "text":message.text
    }
    return this.httpClient.put("http://localhost:8080/message/"+message.id, body)
  }
  public saveMessages(message:MessageModel){
    const body={
      "id":message.id,
      "text":message.text
    }
    return this.httpClient.post("http://localhost:8080/message/"+message.id, body)
  }
}
