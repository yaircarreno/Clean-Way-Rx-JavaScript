import { Network } from '../api/network';
import { Cache } from '../api/cache';
import { concatMap, concat, catchError, tap, retry, retryWhen, delay, take } from 'rxjs/operators';
import { User } from '../models/user';
import { of, empty, throwError } from 'rxjs';

export class Item28 {

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
                concatMap(token => this.cache.storeTokenWithError(token)),
                concatMap(saved => this.network.getUser(username))
            )
            .subscribe(user => console.log(user));
    }

    case2(username: string) {

        this.network.getToken("api-key")
            .pipe(
                concatMap(token => this.cache.storeTokenWithError(token)),
                concatMap(saved => this.network.getUser(username)),
                catchError(error => of(new User())))
            .subscribe(
                user => console.log('next:', user),
                error => console.log('error:', error),
                () => console.log('completed'));
    }

    case3(username: string) {

        this.network.getToken("api-key")
            .pipe(
                concatMap(token => this.cache.storeTokenWithError(token)),
                concatMap(saved => this.network.getUser(username)),
                catchError(error =>
                    empty()
                        .pipe(tap({ complete: () => console.log(error) }))
                ))
            .subscribe(
                user => console.log('next:', user),
                err => console.log('error:', err),
                () => console.log('completed'));
    }

    case4(username: string) {

        this.network.getToken("api-key")
            .pipe(
                concatMap(token => this.cache.storeTokenWithError(token)),
                concatMap(saved => this.network.getUser(username)),
                retry(2),
                catchError(error =>
                    empty()
                        .pipe(tap({ complete: () => console.log(error) }))
                ))
            .subscribe(
                user => console.log('next:', user),
                err => console.log('error:', err),
                () => console.log('completed'));
    }

    case5(username: string) {

        this.network.getToken("api-key")
            .pipe(
                concatMap(token => this.cache.storeTokenWithError(token)),
                concatMap(saved => this.network.getUser(username)),
                retryWhen(errors => errors.pipe(
                    tap(() => console.log('retrying...')),
                    delay(2000),
                    take(4),
                    concat(throwError('SampleError!'))
                )),
                catchError(error =>
                    empty()
                        .pipe(tap({ complete: () => console.log(error) }))
                ))
            .subscribe(
                user => console.log('next:', user),
                err => console.log('error:', err),
                () => console.log('completed'));
    }
}