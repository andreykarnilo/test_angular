import { Component } from '@angular/core';


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myTextHeader: string = 'My tests on angular';
  masTest = [
      'a',
    'b',
    'c', 
    'ii',
    'j',  
  ];

 remindersList = [
  {
    name: 'buy milk',
    status : false
  },
  {
    name: 'meet children',
    status : false
  },
  {
    name: 'clean houses',
    status : false
  },
  {
    name: 'wash the car',
    status : false
  }
  
  ];

  

  myRemAdd(textName){
  if(textName=='')
  this.remindersList.push({
      name: 'To do nothing! (:',
      status: false
    });
    else
    this.remindersList.push({
      name: textName,
      status: false
    });
  };

  myRem(nom){
  nom.status=!nom.status;
  };
  
}










