import { IAppState } from './store';
import { NgRedux, select } from '@angular-redux/store';
import { Component } from '@angular/core';
import { INCREMENT } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Redux App';
  @select('counter') contador;
  @select(['messaging', 'newMessages']) newMessages;
  @select((s: IAppState) => s.messaging.newMessages) newMessagesCount;

  constructor(private ngRedux: NgRedux<IAppState>) {
    // Isto seria necessário se eu nao usasse o decorator @select() lá em cima na var counter
    // var subscription = ngRedux.subscribe(() => {
    //   var store = ngRedux.getState();
    //   this.counter = store.counter;
    // });
  }

  increment() {
    // this.counter++;
    this.ngRedux.dispatch({ type: INCREMENT });
  }

}
