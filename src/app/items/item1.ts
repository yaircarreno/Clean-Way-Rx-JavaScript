import { of, from, range, defer, interval, timer, empty, throwError, Observable, never } from 'rxjs';


export class Item1 {

    public itemExample() {
        this.case11();
    }

    case1() {
        of(["h", "e"], ["l", "l", "o"])
            .subscribe(
                next => console.log('next:', next));
    }

    case2() {
        of(["h", "e", "l", "l", "o"])
            .subscribe(
                next => console.log('next:', next));
    }

    case3() {
        from(["h", "e", "l", "l", "o"])
            .subscribe(
                next => console.log('next:', next));
    }

    case4() {
        range(1, 5)
            .subscribe(
                next => console.log('next:', next));
    }

    case5() {
        defer(() =>
            of(["h", "e", "l", "l", "o"]))
            .subscribe(
                next => console.log('next:', next));
    }

    case6() {
        empty()
            .subscribe({
                next: () => console.log('Next'),
                complete: () => console.log('Complete!')
            });
    }

    case7() {
        never()
            .subscribe({
                next: () => console.log('Next'),
                complete: () => console.log('Complete!')
            });
    }

    case8() {
        throwError('SampleError!')
            .subscribe({
                next: val => console.log(val),
                complete: () => console.log('Complete!'),
                error: val => console.log(`Error: ${val}`)
            });
    }

    case9() {
        const subscribe = interval(1000)
            .subscribe(
                next => console.log('next:', next));

        setTimeout(() => {
            subscribe.unsubscribe();
        }, 5000);
    }

    case10() {
        const subscribe = timer(1000, 1000)
            .subscribe(
                next => console.log('next:', next));

        setTimeout(() => {
            subscribe.unsubscribe();
        }, 5000);
    }

    case11() {

        this.taskWrapped(this.imperativeTask())
            .subscribe({
                next: val => console.log(val),
                complete: () => console.log('Complete!'),
                error: val => console.log(`Error: ${val}`)
            });
    }

    taskWrapped(task: any): Observable<any> {
        return Observable.create(function (observer: any) {

            let data = task;

            if (data) {
                observer.next(data);
                observer.complete();
            } else {
                observer.error("SampleError");
            }
        });
    }


    imperativeTask() {
        const data = "any data";
        console.log("Do any imperative task or process");
        return data;
    }
}