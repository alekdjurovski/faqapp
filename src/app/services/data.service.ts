import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  questions: Question[];

  constructor() {
    this.questions = [
      {
        text:'What is your name?',
        answer:'My name is Alek.',
        hide:true
      },
      {
        text:'What is your favorite language?',
        answer:'JavaScript',
        hide:true
      },
      {
        text:'What is your favorite car?',
        answer:'Hyundai',
        hide:true
      }
    ];
   }

   getQuestion(){
     return this.questions;
   }
}
