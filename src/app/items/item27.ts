import { of, defer, Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';

export class Item27 {

    itemExample() {
        this.case1();
    }

    case1() {

        const subscription = this.queryToAPI();

        //Wait for ten seconds
        setTimeout(() => {
            subscription
                .pipe(
                    flatMap(result1 => this.validateDataFromAPI()
                        .pipe(map(result2 => [result1, result2])))
                )
                .subscribe(
                    messages => {
                        console.log(messages[0]);
                        console.log(messages[1]);
                    });
        }, 10000);
    }

    case2() {

        const subscription = this.queryToAPIWhitDefer();

        //Wait for ten seconds
        setTimeout(() => {
            subscription
                .pipe(
                    flatMap(result1 => this.validateDataFromAPI()
                        .pipe(map(result2 => [result1, result2])))
                )
                .subscribe(
                    messages => {
                        console.log(messages[0]);
                        console.log(messages[1]);
                    });
        }, 10000);
    }

    queryToAPI(): Observable<string> {
        return of("Query API at => " + this.getCurrentTime());
    }

    queryToAPIWhitDefer(): Observable<string> {
        return defer(() => {
            return of("Query API at => " + this.getCurrentTime());
        })
    }

    validateDataFromAPI() {
        return of("Validate data from API at => " + this.getCurrentTime());
    }

    getCurrentTime() {
        const date = new Date();
        return date.getMinutes() + "m:" + date.getSeconds() + ":s";
    }
}