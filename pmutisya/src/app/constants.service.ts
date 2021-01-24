import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  // tslint:disable-next-line:ban-types
  readonly API_ENDPOINT: String;

  constructor() {
    // this.API_ENDPOINT = 'http://51.15.233.87:9191'; // https://api.natujenge.ke/marikiti/
    this.API_ENDPOINT = 'https://api.natujenge.ke/pmutisya'; // https://api.natujenge.ke/marikiti/
  }
}
