import { of, forkJoin, concat, interval } from 'rxjs';
import { take } from 'rxjs/operators';

export class Item3 {

    itemExample() {
        this.case3();
    }

    case1() {

        const first = of(10, 100, 1000);
        const second = of(20, 200, 2000);

        concat(
            first,
            second
        ).subscribe(
            user => console.log('next:', user),
            error => console.log('error:', error),
            () => console.log('completed'));
    }

    case2() {

        const first = interval(1000)
        const second = of(20, 200, 2000);

        const subscribe = concat(
            first,
            second
        ).subscribe(
            user => console.log('next:', user),
            error => console.log('error:', error),
            () => console.log('completed'));

        setTimeout(() => {
            subscribe.unsubscribe();
        }, 5000);
    }

    case3() {

        const first = interval(1000).pipe(take(3))
        const second = of(20, 200, 2000);

        const subscribe = concat(
            first,
            second
        ).subscribe(
            user => console.log('next:', user),
            error => console.log('error:', error),
            () => console.log('completed'));

        setTimeout(() => {
            subscribe.unsubscribe();
        }, 5000);
    }

    case4() {

        const first = of(10, 100, 1000);
        const second = of(20, 200, 2000);

        forkJoin(
            first,
            second
        ).subscribe(
            user => console.log('next:', user),
            error => console.log('error:', error),
            () => console.log('completed'));
    }
}