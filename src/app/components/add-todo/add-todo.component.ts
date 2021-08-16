import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Form } from '@angular/forms';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() onAddTask:EventEmitter<Todo> = new EventEmitter();
  priorities: string[] = ['high','medium','low'];
  addTodo: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm(): void{
    this.addTodo = this.fb.group({
      title:'',
      desc:'',
      priority:'high',
      date:'',
      isComplete:'false'
    });
  }

  onSubmit(): void {
    console.log(this.addTodo.value);
    this.onAddTask.emit(this.addTodo.value);
  }
  selectPriority(event:any):void{
      this.addTodo.patchValue({
      priority:event.target.value
    });  
  }

}
