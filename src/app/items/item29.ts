import { interval, of, ConnectableObservable, Observable, merge } from 'rxjs';
import { flatMap, tap, take, share, publish } from 'rxjs/operators';

export class Item29 {

    itemExample() {
        this.case4();
    }

    case1() {
        const sourceObservable = interval(1000)
            .pipe(
                flatMap(id => of(`Request to API whith userId =: ${id}`)),
                tap(result => console.log(result)),
                take(1));

        const subscriptionA = sourceObservable
            .subscribe(element => {
                // A Observing code
            });

        const subscriptionB = sourceObservable
            .subscribe(element => {
                // B Observing code
            });

        const subscriptionC = sourceObservable
            .subscribe(element => {
                // C Observing code
            });

        setTimeout(() => {
            subscriptionA.unsubscribe();
            subscriptionB.unsubscribe();
            subscriptionC.unsubscribe();
        }, 5000);
    }

    case2() {
        const sourceObservable = interval(1000)
            .pipe(
                flatMap(id => of(`Request to API whith userId =: ${id}`)),
                tap(result => console.log(result)),
                take(1),
                share());

        const subscriptionA = sourceObservable
            .subscribe(element => {
                // A Observing code
            });

        const subscriptionB = sourceObservable
            .subscribe(element => {
                // B Observing code
            });

        const subscriptionC = sourceObservable
            .subscribe(element => {
                // C Observing code
            });

        setTimeout(() => {
            subscriptionA.unsubscribe();
            subscriptionB.unsubscribe();
            subscriptionC.unsubscribe();
        }, 5000);
    }

    case3() {
        const sourceObservable = interval(1000)
            .pipe(
                flatMap(id => of(`Request to API whith userId =: ${id}`)),
                tap(result => console.log(result)),
                take(1),
                publish()) as ConnectableObservable<string>;

        const subscriptionA = sourceObservable
            .subscribe(element => {
                // A Observing code
            });

        const subscriptionB = sourceObservable
            .subscribe(element => {
                // B Observing code
            });

        const subscriptionC = sourceObservable
            .subscribe(element => {
                // C Observing code
            });

        sourceObservable.connect();

        setTimeout(() => {
            subscriptionA.unsubscribe();
            subscriptionB.unsubscribe();
            subscriptionC.unsubscribe();
        }, 5000);
    }

    case4() {
        const observableA = interval(1000)
            .pipe(
                flatMap(id => of(`Request to API A whith userId =: ${id}`)),
                take(1));

        const observableB = interval(1000)
            .pipe(
                flatMap(id => of(`Request to API B whith userId =: ${id}`)),
                take(1));

        const observableC = interval(1000)
            .pipe(
                flatMap(id => of(`Request to API C whith userId =: ${id}`)),
                take(1));

        merge(
            observableA,
            observableB,
            observableC
        ).subscribe(result =>
            console.log(result));
    }
}