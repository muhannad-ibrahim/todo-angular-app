import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  doneChecked:boolean = false;
  indexChecked:number = -1;
  task:string = "";
  todoArr: string[]= ["Drink Coffee","Going ITI"];

  deleteArr(index:number) : void{
    this.todoArr.splice(index,1);
  }

  add() : void{
    if(this.task !== "")
      this.todoArr.push(this.task);
  }

  done(id:number) : void{
    this.doneChecked = !this.doneChecked;
    this.indexChecked = id;
  }
}
