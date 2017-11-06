import { Component } from '@angular/core';

@Component({
  selector: 'todo1',
  templateUrl: 'todo1.component.html',
  styleUrls: ['todo1.component.css']
})
export class todo1Component {
 
  
  db = [
  {
    name: 'a',
    pas: '111',
    qual: 0
  },
  {
    name: 'b',
    pas: '222',
    qual: 0
  },
  {
    name: 'c',
    pas: '333',
    qual: 0
  },
  {
    name: 'i',
    pas: '444',
    qual: 0
  },
  {
    name: 'j',
    pas: '555',
    qual: 0
  }
  ];

  myMetInc(nom){
  nom.qual=nom.qual+1;
  };

   myMetDec(nom){
  nom.qual=nom.qual-1;
  };

   myMetDel(nom){
  this.db.splice(nom,1);
  };

 myMetAdd(textName){
    this.db.push({
      name: textName,
      pas: '333',
      qual: 0
    });
  };
}










