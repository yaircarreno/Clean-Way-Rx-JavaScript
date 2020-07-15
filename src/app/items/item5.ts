import { Network } from '../api/network';
import { Cache } from '../api/cache';
import { concatMap, map, ignoreElements, concat } from 'rxjs/operators';
import { Token } from '../models/token';

export class Item5 {

    network: Network;
    cache: Cache;

    constructor(network: Network, cache: Cache) {
        this.network = network;
        this.cache = cache;
    }

    itemExample(username: string) {
        this.case5(username);
    }

    case1(username: string) {

        this.network.getToken("api-key")
            .pipe(
                concatMap(token => this.cache.storeToken(token)
                    .pipe(saved => this.network.getUser(username)))
            )
            .subscribe(user => console.log(user));
    }

    case2(username: string) {

        this.network.getToken("api-key")
            .pipe(
                concatMap(token => this.cache.storeToken(token)),
                concatMap(saved => this.network.getUser(username))
            )
            .subscribe(user => console.log(user));
    }

    case3(username: string) {

        this.network.getToken("api-key")
            .pipe(
                concatMap(token => this.cache.storeToken(token)
                    .pipe(saved => this.network.getUserWithToken(username, token)))
            )
            .subscribe(user => console.log(user));
    }

    case4(username: string) {

        this.network.getToken("api-key")
            .pipe(
                concatMap(token => this.cache.storeToken(token).pipe(map(saved => [token, saved]))),
                concatMap(pair => this.network.getUserWithToken(username, pair[0] as Token))
            )
            .subscribe(user => console.log(user));
    }

    case5(username: string) {

        this.network.getToken("api-key")
            .pipe(
                concatMap(token => this.cache.storeToken(token)),
                ignoreElements(),
                concat(this.network.getUser(username))
            )
            .subscribe(user => console.log(user));
    }
}