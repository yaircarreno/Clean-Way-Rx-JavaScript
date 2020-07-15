import { Observable } from 'rxjs';
import { Network } from '../api/network';
import { flatMap, tap, filter } from 'rxjs/operators';
import { User } from '../models/user';

export class Item6 {

    network: Network;
    loggedIn: boolean = false;
    anyState: boolean = false;

    constructor(network: Network) {
        this.network = network;
    }

    itemExample(username: string) {
        this.case1(username);
    }

    case1(username: string) {

        // Use verifyUser(user, true) to simulate error.

        this.network.getUser(username)
            .pipe(
                tap(usr => this.loggedIn = true),
                flatMap(user => this.verifyUser(user))
            )
            .subscribe(
                user => {
                    console.log('next:', user);
                    console.log(this.loggedIn);
                },
                error => {
                    console.log('error:', error);
                    console.log(this.loggedIn);
                },
                () => console.log('completed'));
    }

    case2(username: string) {

        // Use verifyUser(user, true) to simulate error.

        this.network.getUser(username)
            .pipe(
                flatMap(user => this.verifyUser(user))
            )
            .subscribe(
                user => {
                    this.loggedIn = true;
                    console.log('next:', user);
                    console.log(this.loggedIn);
                },
                error => {
                    console.log('error:', error);
                    console.log(this.loggedIn);
                },
                () => console.log('completed'));
    }

    case3(username: string) {

        this.network.getUser(username)
            .pipe(
                filter(user => user.name.length > 0 && this.anyState)
            )
            .subscribe(
                user => {
                    this.loggedIn = true;
                    console.log('next:', user);
                },
                error => {
                    console.log('error:', error);
                },
                () => console.log('completed'));
    }

    case4(username: string, state: boolean) {

        this.network.getUser(username)
            .pipe(
                filter(user => user.name.length > 0 && state)
            )
            .subscribe(
                user => {
                    this.loggedIn = true;
                    console.log('next:', user);
                },
                error => {
                    console.log('error:', error);
                },
                () => console.log('completed'));
    }

    verifyUser(user: User, isSimulatedError: boolean = false): Observable<User> {

        return Observable.create(function (observer: any) {

            if (isSimulatedError) {
                observer.error("SampleError");
            }

            observer.next(user);
            observer.complete();
        });
    }
}