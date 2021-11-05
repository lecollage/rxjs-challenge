import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  focused: Element | null = null;

  get name(): string {
    console.log(`name >>`);

    return this.focused ? this.focused.nodeName : null;
  }

  onFocusChange($event: Element | null) {
    console.log(`onFocusChange >>`);

    this.focused = $event;
  }
}
