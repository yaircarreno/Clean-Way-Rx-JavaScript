import { Network } from '../api/network';
import { Cache } from '../api/cache';
import { concatMap, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';

export class Item7 {

    network: Network;
    cache: Cache;

    constructor(network: Network, cache: Cache) {
        this.network = network;
        this.cache = cache;
    }

    itemExample(apikey: string) {
        this.case3(apikey);
    }

    case1(apikey: string) {

        this.network.getToken(apikey)
            .subscribe(token => {
                if (token.isValid) {
                    this.cache.storeToken(token)
                        .subscribe(saved =>
                            console.log('Token stored: ', saved));
                }
            });
    }

    case2(apikey: string) {

        this.network.getToken(apikey)
            .pipe(
                filter(token => token.isValid),
                concatMap(token => this.cache.storeToken(token))
            )
            .subscribe(saved =>
                console.log('Token stored: ', saved));
    }

    case3(apikey: string) {

        const oneSubject = new Subject();
        const twoSubject = new Subject();

        oneSubject.subscribe(message => console.log(message));

        twoSubject.subscribe(message => {
            oneSubject.next(message);
        });

        twoSubject.next("A");
        twoSubject.next("B");
        twoSubject.next("C");
    }
}