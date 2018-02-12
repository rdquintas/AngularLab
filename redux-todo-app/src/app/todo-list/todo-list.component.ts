import { Component } from '@angular/core';
// import { TodoService } from '../todo.service';
import { NgRedux, select } from '@angular-redux/store';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions';
import { IAppState } from '../store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @select() todos;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  addTodo(input) {
    if (!input.value) {
      return
    };

    this.ngRedux.dispatch({ type: ADD_TODO, title: input.value });
    input.value = '';
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({ type: REMOVE_TODO, id: todo.id });
  }


  // This code below uses 'classic' approach with service "todo.service.ts" instead of REDUX
  // // Read the comment in TodoService
  // constructor(private service: TodoService) {
  // }

  // addTodo(input) {
  //   if (!input.value) return;

  //   this.service.addTodo(input.value);
  //   input.value = '';
  // }

  // toggleTodo(todo) {
  //   this.service.toggleTodo(todo);
  // }

  // removeTodo(todo) {
  //   this.service.removeTodo(todo);
  // }
}
