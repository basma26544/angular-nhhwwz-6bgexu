import { Component } from '@angular/core';
import { interval, map, takeWhile } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 60;

  timeout = setInterval(() => {
    if (this.count <= 60) {
      this.count += 1;
    } else {
      clearInterval(this.timeout);
    }
  }, 500);

  // RxJs way
  // The interval Observable will emit increasing values and we want to display decreasing ones, we will log the difference between the total length of our countdown and the value emitted:

  private maxValue = 10;

  countDown$ = interval(500).pipe(
    map(value => this.maxValue - value),
    takeWhile(x => x >= 0)
  );
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/