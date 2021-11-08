import {Component, Inject} from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  distinctUntilChanged, mapTo,
  Observable,
  of, repeat,
  startWith,
  Subject,
  switchMap,
  switchMapTo, timer
} from "rxjs";
import {LoginService} from "./login.service";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // showError$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private readonly submit$: Subject<void> = new Subject<void>();

  readonly showError$ = this.submit$.pipe(
    switchMapTo(
      this.service$.pipe(
        tap(v => {console.log(`DEBUG tap >> v`, v);}),
        map(x => false),
        catchError(() => timer(2000).pipe(mapTo(true))),
    )),
  )

  constructor(
    @Inject(LoginService) private readonly service$: Observable<string>
  ) {}

  onSubmit() {
    console.log(`DEBUG >> STEP 1`);

    this.submit$.next();
  }
}
