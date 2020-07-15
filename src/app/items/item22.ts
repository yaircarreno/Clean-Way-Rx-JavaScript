import { Network } from '../api/network';
import { Cache } from '../api/cache';
import { concatMap, ignoreElements, concat } from 'rxjs/operators';

export class Item22 {

    network: Network;
    cache: Cache;

    constructor(network: Network, cache: Cache) {
        this.network = network;
        this.cache = cache;
    }

    itemExample(username: string) {
        this.case1(username);
    }

    case1(username: string) {

        this.network.getToken("api-key")
            .pipe(
                concatMap(token => this.cache.storeToken(token)),
                ignoreElements(),
                concat(this.network.getUser(username))
            )
            .subscribe(user => console.log(user));
    }
}