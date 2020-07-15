import { Network } from '../api/network';
import { filter } from 'rxjs/operators';

export class Item13 {

    network: Network;

    constructor(network: Network) {
        this.network = network;
    }

    itemExample(apikey: string) {
        this.case1(apikey);
    }

    case1(apikey: string) {

        this.network.getToken(apikey)
            .subscribe(
                token => {
                    if (token.isValid) {
                        console.log(token);
                    }
                });
    }

    case2(apikey: string) {

        this.network.getToken(apikey)
            .pipe(
                filter(token => token.isValid)
            )
            .subscribe(
                token =>
                    console.log(token));
    }
}