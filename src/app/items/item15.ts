import { interval } from 'rxjs';
import { map, filter, share } from 'rxjs/operators';

export class Item15 {

    itemExample() {
        this.case3();
    }

    case1() {

        const source = interval(1000);

        const subscriptionOne = source
            .pipe(
                map(item => item * 3),
                filter(item => item % 2 === 0)
            )
            .subscribe(
                data => console.log('from observer one: ', data));

        const subscriptionTwo = source
            .pipe(
                map(item => item * 3),
                filter(item => item % 3 === 0)
            )
            .subscribe(
                data => console.log('from observer two: ', data));

        setTimeout(() => {
            subscriptionOne.unsubscribe();
            subscriptionTwo.unsubscribe();
        }, 5000);
    }

    case2() {

        const source = interval(1000)
            .pipe(
                map(item => item * 3)
            );

        const subscriptionOne = source
            .pipe(
                filter(item => item % 2 === 0)
            )
            .subscribe(
                data => console.log('from observer one: ', data));

        const subscriptionTwo = source
            .pipe(
                filter(item => item % 3 === 0)
            )
            .subscribe(
                data => console.log('from observer two: ', data));

        setTimeout(() => {
            subscriptionOne.unsubscribe();
            subscriptionTwo.unsubscribe();
        }, 5000);
    }

    case3() {

        const source = interval(1000)
            .pipe(
                map(item => item * 3),
                share()
            );

        const subscriptionOne = source
            .pipe(
                filter(item => item % 2 === 0)
            )
            .subscribe(
                data => console.log('from observer one: ', data));

        const subscriptionTwo = source
            .pipe(
                filter(item => item % 3 === 0)
            )
            .subscribe(
                data => console.log('from observer two: ', data));

        setTimeout(() => {
            subscriptionOne.unsubscribe();
            subscriptionTwo.unsubscribe();
        }, 5000);
    }
}