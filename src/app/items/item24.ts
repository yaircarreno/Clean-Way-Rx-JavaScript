import { Network } from '../api/network';
import { tap } from 'rxjs/operators';

export class Item24 {

    network: Network;
    loggedIn: boolean = false;

    constructor(network: Network) {
        this.network = network;
    }

    itemExample(username: string) {
        this.case2(username);
    }

    case1(username: string) {

        this.network.getUser(username)
            .pipe(
                tap(user => this.logger(user))
            )
            .subscribe(data =>
                console.log('next:', data));
    }

    case2(username: string) {

        this.network.getUser(username)
            .pipe(
                tap(user => this.loggerWithSideEffect(user))
            )
            .subscribe(data => {
                if (data.name.length > 0 && this.loggedIn) {
                    // Do anything
                }
            });
    }

    logger(data: any) {
        console.log(`Event operation in logs: `, data);
    }

    loggerWithSideEffect(data: any) {
        console.log(`Event operation in logs: `, data);
        this.loggedIn = true;
    }
}