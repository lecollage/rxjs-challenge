import { Component, Inject } from "@angular/core";
import { LoadingService } from "./loading.service";
import {distinctUntilChanged, filter, share, startWith, Subject, switchMap, switchMapTo} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  private readonly click$: Subject<void> = new Subject();

  private readonly response$ = this.click$.pipe(
    switchMap(() => this.loadingService.load$()),
    share()
  );

  readonly loading$ = this.response$.pipe(
      startWith(0),
      filter(Number.isFinite),
  );

  readonly result$ = this.response$.pipe(
    map(response => (typeof response === 'string' ? response : null)),
    distinctUntilChanged()
  );

  constructor(
    @Inject(LoadingService) private readonly loadingService: LoadingService
  ) {}

  onButtonClick() {
    this.click$.next();
  }
}
