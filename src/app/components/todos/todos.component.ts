import { Component, OnInit, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string;
  todos:Todo[];
  priority: string[] = [
    'high',
    'medium',
    'low'
  ];
  constructor() {
    this.localItem =  localStorage.getItem("todos")!;
    if(this.localItem == null){
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
     this.todos.splice(index,1);
     localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTask(todo: Todo){
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  toggleActive(todo: Todo){
      //console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].isComplete = !this.todos[index].isComplete;
    localStorage.setItem("todos",JSON.stringify(this.todos));
    

  }
}

