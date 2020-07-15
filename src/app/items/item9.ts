import { Network } from '../api/network';
import { Cache } from '../api/cache';
import { concatMap, filter } from 'rxjs/operators';
import { Token } from '../models/token';

export class Item9 {

    network: Network;
    cache: Cache;

    constructor(network: Network, cache: Cache) {
        this.network = network;
        this.cache = cache;
    }

    itemExample(apikey: string) {
        this.case2(apikey);
    }

    case1(apikey: string) {

        var currentToken = new Token()

        this.network.getToken(apikey)
            .subscribe(token => {
                currentToken = token
            });

        if (currentToken.isValid) {
            this.cache.storeToken(currentToken)
                .subscribe(saved => {
                    console.log('Token stored: ', saved);
                });
        }
    }

    case2(apikey: string) {

        this.network.getToken(apikey)
            .pipe(
                filter(token => token.isValid),
                concatMap(token => this.cache.storeToken(token))
            )
            .subscribe(saved => {
                console.log('Token stored: ', saved);
            });
    }
}