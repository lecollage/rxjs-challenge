import {Component, Inject} from '@angular/core';
import {PAGE_VISIBILITY} from "./visible-page/visible-page.injector";
import {Observable} from "rxjs";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(@Inject(PAGE_VISIBILITY) visiblePage$: Observable<boolean>) {
    visiblePage$.subscribe((visible: boolean) => {
      console.log(`PAGE IS VISIBLE >> `, visible);
    });
  }
}
