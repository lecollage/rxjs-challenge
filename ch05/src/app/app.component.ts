import {Component, OnInit} from '@angular/core';
import {map, Observable, startWith, Subject, switchMapTo, takeWhile, timer} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  readonly resend$ = new Subject<void>();
  readonly countdown$ = this.resend$.pipe(
    startWith(0),
    switchMapTo(countdownFrom(45)),
  );
}

function countdownFrom(start: number): Observable<number> {
  return timer(0, 1000).pipe(
    map(index => start - index),
    takeWhile<number>(Boolean, true)
  );
}
