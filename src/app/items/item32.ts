import { of, forkJoin, asyncScheduler } from 'rxjs';

export class Item32 {

    itemExample() {
        this.case3();
    }

    case1() {

        forkJoin(
            of("Result from first source"),
            of("Result from second source"),
        )
            .subscribe(
                user => console.log('next:', user),
                error => console.log('error:', error),
                () => console.log('completed'));
    }

    case2() {

        of(1, 2)
            .subscribe(
                user => console.log('next:', user),
                error => console.log('error:', error),
                () => console.log('completed'));

        console.log("Outside task")
    }

    case3() {

        of(1, 2, asyncScheduler)
            .subscribe(
                user => console.log('next:', user),
                error => console.log('error:', error),
                () => console.log('completed'));

        console.log("Outside task");
    }
}