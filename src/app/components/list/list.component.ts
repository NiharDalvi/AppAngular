import { Component, OnInit } from '@angular/core';
import { check } from './../../models/check';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list1!: check[];
  constructor() { }

  inputItem: string = ""
  ngOnInit(): void {
    this.list1 = [  
    { 
      content: 'Eggs',
      completed: false    
    },
    { 
      content:"Bread",
      completed: false    
    }

    ]
  }

  toggleDone (id: number) {
    this.list1.map((v,i) => {
      if (i== id) v.completed = !v.completed;
      return v;
    })
  }
  deleteItem (id: number){
    this.list1 = this.list1.filter((v, i) => i !== id);

  }

  addItem() {
  this.list1.push({
    content: this.inputItem,
    completed: false
  })

  this.inputItem="";
  }
}
