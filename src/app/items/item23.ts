import { from, combineLatest } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

export class Item23 {

    itemExample() {
        this.case2();
    }

    case1() {

        const uppercase = from(["A", "B", "C", "D"]);
        const lowercase = from(["a", "b", "c", "d"]);

        uppercase
            .pipe(
                switchMap(upperLetter => lowercase
                    .pipe(map(lowerLetter => upperLetter + lowerLetter)))
            ).subscribe(
                next => console.log('next:', next));
    }

    case2() {

        const uppercase = from(["A", "B", "C", "D"]);
        const lowercase = from(["a", "b", "c", "d"]);

        combineLatest(uppercase, lowercase,
            (upperLetter, lowerLetter) => upperLetter + lowerLetter
        ).subscribe(
            next => console.log('next:', next));
    }
}