import { Network } from '../api/network';
import { filter } from 'rxjs/operators';

export class Item18 {

    network: Network;

    constructor(network: Network) {
        this.network = network;
    }

    itemExample(username: string) {
        this.case1(username);
    }

    case1(username: string) {

        this.network.getUser(username)
            .pipe(
                filter(user => user.name.length > 0)
            )
            .subscribe(
                data => console.log('next:', data),
                error => console.log('error:', error),
                () => console.log('completed'));
    }
}