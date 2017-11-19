import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()

export class DataService {
  bole:boolean;
  private messageSource = new BehaviorSubject<boolean>(this.bole);
  currentMessage = this.messageSource.asObservable();
  constructor() { }
  changeMessage(message: boolean) {
    this.messageSource.next(message)
  }
}
