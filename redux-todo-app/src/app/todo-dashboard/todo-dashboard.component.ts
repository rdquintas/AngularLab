import { Component } from '@angular/core';
// import { TodoService } from '../todo.service';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { CLEAR_TODOS } from '../actions';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})

export class TodoDashboardComponent {
  @select() todos;
  @select() lastUpdate;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  clearTodos() {
    this.ngRedux.dispatch({ type: CLEAR_TODOS });
  }
}



// This code below uses 'classic' approach with service "todo.service.ts" instead of REDUX
// export class TodoDashboardComponent {
//   todos: number;
//   lastUpdate;

//   // Read the comment in TodoService
//   constructor(private service: TodoService) {
//     this.todos = service.getTodos().length;

//     service.todoAdded.subscribe(() => {
//       this.todos++;
//       this.lastUpdate = new Date();
//     });

//     service.todoRemoved.subscribe(() => {
//       this.todos--;
//       this.lastUpdate = new Date();
//     });

//     service.todoToggled.subscribe(() => {
//       this.lastUpdate = new Date();
//     });

//     service.todosCleared.subscribe(() => {
//       this.todos = 0;
//       this.lastUpdate = new Date();
//     });
//   }

//   clearTodos() {
//     this.service.clearTodos();
//   }
// }
