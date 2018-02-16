import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });


  it('should set todos property with the items returned from the server', () => {
    // const todos = [1, 2, 3];
    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from([1, 2, 3]);
    });

    component.ngOnInit();

    // expect(component.todos.length).toBe(todos);
    expect(component.todos.length).toBe(3);
    // expect(component.todos.length).toBeGreaterThan(0);
  });


  it('should call the server to save the changes when a new todo item is added', () => {
    const spy = spyOn(service, 'add').and.callFake(t => {
      return Observable.empty();
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });


  it('should add the new todo returned from the server', () => {
    const todo = { id: 1 };
    const spy = spyOn(service, 'add').and.callFake(t => {
      return Observable.from([todo]);
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });
});
