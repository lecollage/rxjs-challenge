import {inject, InjectionToken} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {distinctUntilChanged, fromEvent, map, Observable, startWith} from 'rxjs';


export const PAGE_VISIBILITY = new InjectionToken<Observable<boolean>> (
  'Page visibility',
  {
    factory: () => {
      const documentRef = inject(DOCUMENT);

      const visible$ = fromEvent(documentRef, 'visibilitychange').pipe(
        startWith(0),
        map(() => documentRef.visibilityState !== 'hidden'),
        distinctUntilChanged(),
      );

      return visible$;
    }
  }
)
