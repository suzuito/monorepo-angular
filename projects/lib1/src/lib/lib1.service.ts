import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Lib1Service {

  constructor() { }

  hello(): string {
    return 'Hello world!';
  }
}
