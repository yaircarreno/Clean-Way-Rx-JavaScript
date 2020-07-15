import { interval, from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class Item21 {

    itemExample() {
        this.case3();
    }

    case1() {

        this.operationRx()
            .pipe(
                map(item => item * 3)
            )
            .subscribe(
                item => console.log('item: ', item),
                error => console.log('error:', error),
                () => this.lastStep());
    }

    case2() {

        const subscription = this.operationRxChanged()
            .pipe(
                map(item => item * 3)
            )
            .subscribe(
                item => console.log('item: ', item),
                error => console.log('error:', error),
                () => this.lastStep());

        setTimeout(() => {
            subscription.unsubscribe();
        }, 5000);
    }

    case3() {

        this.numberEmisor()
            .pipe(
                map(item => item * 3)
            )
            .subscribe(
                item => console.log('item: ', item),
                error => console.log('error:', error),
                () => this.lastStep());
    }

    case4() {

        this.wrongNumberEmisor()
            .pipe(
                map(item => item * 3)
            )
            .subscribe(
                item => console.log('item: ', item),
                error => console.log('error:', error),
                () => this.lastStep());
    }

    operationRx() {
        return from([1, 2, 3, 4, 5]);
    }

    operationRxChanged() {
        return interval(1000);
    }

    numberEmisor(): Observable<number> {
        return Observable.create(function (observer: any) {
            observer.next(1);
            observer.next(2);
            observer.next(3);
            observer.complete();
        });
    }

    wrongNumberEmisor(): Observable<number> {
        return Observable.create(function (observer: any) {
            observer.next(1);
            observer.next(2);
            observer.complete();
            observer.next(3);
        });
    }

    lastStep() {
        console.log('Do any critical thing, for instance, release resources.');
    }
}