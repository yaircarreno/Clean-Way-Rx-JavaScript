import { of, defer } from 'rxjs';

export class Item26 {

    itemExample() {
        this.case3();
    }

    case1() {

        const calculate = of(this.doAnyOperation());
    }

    case2() {

        const calculate = of(this.doAnyOperation());

        calculate
            .subscribe(
                next => console.log('next:', next),
                err => console.log('error:', err),
                () => console.log('completed'));
    }

    case3() {

        const calculate = defer(() =>
            of(this.doAnyOperation())
        );
    }

    doAnyOperation() {
        console.log('Do it!');
    }
}