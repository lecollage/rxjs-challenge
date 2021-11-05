import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {distinctUntilChanged, fromEvent, map, Observable, startWith} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisiblePageService extends Observable<boolean>{
  constructor(
    @Inject(DOCUMENT) documentRef: Document
  ) {
    const visible$ = fromEvent(documentRef, 'visibilitychange').pipe(
      startWith(0),
      map(() => documentRef.visibilityState !== 'hidden'),
      distinctUntilChanged(),
    );

    super((subscriber: any) => visible$.subscribe(subscriber));
  }
}
