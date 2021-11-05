import { Directive, Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
class FocusWithinService extends Observable<Element | null> {
  constructor() {
    console.log(`FocusWithinService >>`);
    super((subscriber) => of(null).subscribe(subscriber));
  }
}

@Directive({
  selector: '[focusWithin]',
  outputs: ['focusWithin'],
  providers: [FocusWithinService],
})
export class FocusWithin {
  constructor(
    @Inject(FocusWithinService)
    readonly focusService: Observable<Element | null>
  ) {
    console.log(`FocusWithin >>`);
  }
}
