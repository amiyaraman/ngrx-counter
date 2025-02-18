import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../state/counter.action';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css'],
})
export class CounterButtonComponent {


  constructor(private store: Store<{ counter: { counter: number } }>) {}
  onIncrement() {
  this.store.dispatch(increment());
  }
  onDecrement() {
  this.store.dispatch(decrement());
  }
  onReset() {
     this.store.dispatch(reset());
  }
}
