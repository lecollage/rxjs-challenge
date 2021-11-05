import {Component, Inject} from '@angular/core';
import {VisiblePageService} from "./visible-page/visible-page.service";
import {Observable} from "rxjs";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [VisiblePageService]
})
export class AppComponent {
  title = 'rxjs-challenge02';

  constructor(@Inject(VisiblePageService) visiblePage$: Observable<boolean>) {

    visiblePage$.subscribe(x => {
      console.log(`visiblePage$ >> x`, x);
    });
  }
}
