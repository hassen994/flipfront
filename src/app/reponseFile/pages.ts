export class Pages{
  private _id: string = '';
  private _fileName: string ='';
  private _url: string = '';
  private _type: any;
  private _size: number = 0;

  get id(): string {
    return this._id;
  }

  get fileName(): string {
    return this._fileName;
  }

  get url(): string {
    return this._url;
  }

  get type(): any {
    return this._type;
  }

  get size(): number {
    return this._size;
  }

  set id(value: string) {
    this._id = value;
  }

  set fileName(value: string) {
    this._fileName = value;
  }

  set url(value: string) {
    this._url = value;
  }

  set type(value: any) {
    this._type = value;
  }

  set size(value: number) {
    this._size = value;
  }
}
