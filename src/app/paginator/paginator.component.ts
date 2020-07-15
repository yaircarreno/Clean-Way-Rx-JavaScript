import { Component, OnInit, OnDestroy } from '@angular/core';
import { Paginator } from '../models/paginator';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit, OnDestroy {

  paginator: Paginator;
  resultsText: string;
  subscriptions = [];

  constructor() { }

  ngOnInit(): void {
    this.bindPaginator();
    this.resultsText = "Results will be show here!";
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  bindPaginator() {

    this.paginator = new Paginator();

    this.subscriptions.push(
      this.paginator.getResults("Query 1")
        .pipe(
          map(result => `Updating the list with => ${result}`)
        )
        .subscribe(message =>
          this.showResults(message)));

    this.subscriptions.push(
      this.paginator.getResults("Query 2")
        .pipe(
          map(result => `Hiding the loader after getting => ${result}`)
        )
        .subscribe(message =>
          this.showResults(message)));

    this.subscriptions.push(
      this.paginator.getResults("Query 3")
        .pipe(
          map(result => `Doing any other update with => ${result}`)
        )
        .subscribe(message =>
          this.showResults(message)));
  }

  loadInitialPage() {
    this.queryData(1);
  }

  getNewPageByScrolling() {
    this.queryData(5);
  }

  getNewPageManually() {
    this.queryData(21);
  }

  private queryData(page: number) {
    this.paginator.pushPage(page);
  }

  private showResults(result: string) {
    this.resultsText = result;
  }
}