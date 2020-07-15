import { Observable, of } from 'rxjs';

export class Item34 {

    itemExample() {
        this.case2();
    }

    case1() {
        // Automatically dispose
    }

    case2() {
        // Manually dispose
        const subscription = of("Any value emited!")
            .subscribe(
                user => console.log('next:', user),
                error => console.log('error:', error),
                () => console.log('completed'));

        setTimeout(() => {
            subscription.unsubscribe();
        }, 3000);
    }

    wrongNumberEmisor(): Observable<number> {
        return Observable.create(function (observer: any) {
            observer.next(1);
            observer.next(2);
            observer.complete();
            observer.next(3);
        });
    }
}