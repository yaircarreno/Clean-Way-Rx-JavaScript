import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-take-subscriptions',
  templateUrl: './take-subscriptions.component.html',
  styleUrls: ['./take-subscriptions.component.css']
})
export class TakeSubscriptionsComponent implements OnInit, OnDestroy {

  cancel$ = new Subject();

  constructor() { }

  ngOnInit(): void {
    interval(1000)
      .pipe(
        takeUntil(this.cancel$)
      )
      .subscribe(event => console.log(event))
  }

  ngOnDestroy() {
    this.cancel$.next(true);
    this.cancel$.complete();
  }
}
