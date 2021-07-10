import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class MessageService {
  constructor(private httpClient: HttpClient) {
  }

  public getMessages(){
    return this.httpClient.get("http://localhost:8080/message/")
  }
}
