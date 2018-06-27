import { Injectable } from '@angular/core';
import { Question } from '../models/Question';
import { stringify } from 'querystring';

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
// Get question from localStorage
   getQuestion(){
     if(localStorage.getItem('questions') === null ){
        this.questions = [];
     }else{
        this.questions = JSON.parse(localStorage.getItem('questions'));
     }
     return this.questions;
   }
// Add question to localStorage
   addQuestion(question: Question){
     this.questions.unshift(question);
// Init local var
      let questions;

      if(localStorage.getItem('questions') === null){
        questions = [];
        // Push new question
        questions.unshift(question);
        // Set new array to localStorage
        localStorage.setItem('questions', JSON.stringify(questions));
      }else{
        questions = JSON.parse(localStorage.getItem('questions'));
        // Add new question
        questions.unshift(question);
        // Re set localStorage
        localStorage.setItem('questions', JSON.stringify(questions));
      }
   }
// Delete question from localStorage
   removeQuestion(question:Question){
     for(let i = 0; i < this.questions.length; i++){
       if(question == this.questions[i]){
         this.questions.splice(i, 1);
         localStorage.setItem('questions', JSON.stringify(this.questions));
       }
     }
   }
}
