import { of, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


export class Item8 {

    private subscription: Subscription;

    itemExample(first: number, second: number) {

        this.subscription = of([first, second])
            .pipe(map(pair => Math.max(pair[0], pair[1])))
            .subscribe(
                next => console.log('next:', next),
                err => console.log('error:', err),
                () => console.log('completed'));
    }

    // Imperactive way
    private maximumImperactiveWay(first: number, second: number) {
        return (first >= second) ? first : second;
    }

    // Most complex way
    private maximumComplexWay(first: number, second: number): Observable<number> {
        return of((first >= second) ? first : second);
    }

    clearSubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe;
        }
    }
}