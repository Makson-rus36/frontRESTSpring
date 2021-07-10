export class MessageModel {
  private _id:string;
  private _text:string;


  constructor(id: string, text: string) {
    this._id = id;
    this._text = text;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }
}
