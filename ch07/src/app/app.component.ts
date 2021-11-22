import {Component, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {distinctUntilChanged, fromEvent, map, pairwise, startWith, throttleTime} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ch07';

  readonly hidden$ = fromEvent(this.documentRef, "scroll").pipe(
    throttleTime(50),
    map(() => this.documentRef.documentElement.scrollTop),
    pairwise(),
    map(([prev, next]) => prev < next),
    startWith(false),
    distinctUntilChanged(),
  );

  constructor(@Inject(DOCUMENT) private readonly documentRef: Document) {}
}
