import { Subject, Observable, of } from 'rxjs';
import { flatMap, share } from 'rxjs/operators';

export class Paginator {

    private page: Subject<number>;

    constructor() {
        this.page = new Subject();
    }

    getResults(query: string): Observable<string> {
        return this.getPage()
            .pipe(
                flatMap(numberPage => of(`page: ${numberPage} Comment: ${query}`)),
                share()
            );
    }

    pushPage(numberPage: number) {
        this.page.next(numberPage);
    }

    complete() {
        this.page.complete();
    }

    private getPage(): Observable<number> {
        return this.page.asObservable();
    }
}