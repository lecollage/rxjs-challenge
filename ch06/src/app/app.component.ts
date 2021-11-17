import {Component} from '@angular/core';
import {map, of, reduce, scan, share, startWith, Subject, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ch06';

  readonly buy$ = new Subject<boolean>();

  readonly chooseSeat$ = new Subject<number>();
  readonly selected$ = this.chooseSeat$.pipe(
    scan((a: number[], c: number) => a.includes(c) ? a : [...a, c].sort(), []),
    startWith([]),
    share()
  );

  readonly cost$ = this.chooseSeat$.pipe(
    reduce((a: number[], c: number) => a.includes(c) ? a : [...a, c].sort(), []),
    startWith([]),
    map((selected: number[]) => selected.length * 3),
    share()
  );
}
