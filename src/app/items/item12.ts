import { from } from 'rxjs';
import { map, filter } from 'rxjs/operators';

export class Item12 {

    itemExample() {
        this.case2();
    }

    case1() {

        from(this.itemsWithoutNulls())
            .pipe(
                map(value => value.toUpperCase())
            )
            .subscribe(
                element => console.log('next:', element),
                error => console.log('error:', error),
                () => console.log('completed'));
    }

    case2() {

        from(this.items())
            .pipe(
                filter(item => item != null),
                map(value => value.toUpperCase())
            )
            .subscribe(
                element => console.log('next:', element),
                error => console.log('error:', error),
                () => console.log('completed'));
    }

    items() {
        let items: string[] = ["h", "e", null, "l", "o"];
        return items;
    }

    itemsWithoutNulls() {
        let items: string[] = ["h", "e", "l", "l", "o"];
        return items;
    }

    itemsFiltered() {
        let items: string[] = ["h", "e", null, "l", "o"];
        let filteredElements = items.filter(x => x !== null);
        return filteredElements;
    }
}