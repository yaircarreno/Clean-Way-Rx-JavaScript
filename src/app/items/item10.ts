import { of, Observable } from 'rxjs';
import { tap, map, concatMap } from 'rxjs/operators';

export class Item10 {

    itemExample() {
        this.case1();
    }

    case1() {

        of("data")
            .pipe(
                tap(ignored => this.runProcess()),
                map(item => 'transformed ' + item)
            ).subscribe(
                item => console.log('item:', item));
    }

    case2() {

        of("data")
            .pipe(
                tap(ignored => this.runBlock()),
                map(item => 'transformed ' + item)
            ).subscribe(
                item => console.log('item:', item));
    }

    runProcess() {
        console.log('Running any process');
    }

    runBlock() {

        return Observable.create(function (observer: any) {
            observer.next('');
            observer.complete();
        });
    }
}