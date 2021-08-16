import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() onDeleteClick : EventEmitter<Todo> = new EventEmitter();
  @Output() onToggleActive : EventEmitter<Todo> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(todo:Todo){
    this.onDeleteClick.emit(todo);
  }
  onToggle(todo: Todo) {
      this.onToggleActive.emit(todo);
  }
}
