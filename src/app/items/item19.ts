import { interval, of } from 'rxjs';
import { reduce, take } from 'rxjs/operators';

export class Item19 {

    itemExample() {
        this.case3();
    }

    case1() {

        const source = of(10, 100, 1000);

        source
            .pipe(
                reduce((accumulator, val) => accumulator + val, 1)
            ).subscribe(next =>
                console.log('next: ', next));
    }

    case2() {

        const source = interval(1000);

        source
            .pipe(
                reduce((accumulator, val) => accumulator + val, 1)
            ).subscribe(next =>
                console.log('next: ', next));
    }

    case3() {

        const source = interval(1000)
            .pipe(
                take(3)
            );

        source
            .pipe(
                reduce((accumulator, val) => accumulator + val, 1)
            ).subscribe(next =>
                console.log('next: ', next));
    }
}