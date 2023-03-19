import { Component } from '@angular/core';
import { todos } from './todo'
import { Todo } from './todoInterface'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  doneChecked:boolean = false;
  indexChecked:number = -1;
  task:string = "";

  todoArr: Todo[] = todos;

  deleteArr(id:number) : void{
    const objWithIdIndex = this.todoArr.findIndex((obj) => obj.id === id);

    if (objWithIdIndex > -1) {
      this.todoArr.splice(objWithIdIndex,1);
    }
  }

  add(index: number) : void{
    if(this.task !== ""){
      this.todoArr.push({id:index , todo:this.task , completed:false , userId:1});
      this.task="";
    }
  }

  done(id:number) : void{
    this.todoArr.find((obj) => {
      if(obj.id === id)
        obj.completed = !obj.completed;
    });
  }
}
