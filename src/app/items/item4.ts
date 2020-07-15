import { of, empty, never } from 'rxjs';
import { Network } from '../api/network';
import { flatMap } from 'rxjs/operators';

export class Item4 {

    network: Network;

    constructor(network: Network) {
        this.network = network;
    }

    itemExample(username: string) {
        this.case2(username);
    }

    case1(username: string) {

        this.network.getUser(username)
            .pipe(
                flatMap(user => user.name.length > 0 ? of(user) : empty())
            )
            .subscribe(
                user => console.log('next:', user),
                error => console.log('error:', error),
                () => console.log('completed'));
    }

    case2(username: string) {

        this.network.getUser(username)
            .pipe(
                flatMap(user => user.name.length > 0 ? of(user) : never())
            )
            .subscribe(
                user => console.log('next:', user),
                error => console.log('error:', error),
                () => console.log('completed'));
    }
}