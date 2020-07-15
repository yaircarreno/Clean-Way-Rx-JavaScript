import { Network } from '../api/network';
import { map } from 'rxjs/operators';

export class Item11 {

    network: Network;

    constructor(network: Network) {
        this.network = network;
    }

    itemExample(apikey: string) {
        this.case2(apikey);
    }

    case1(apikey: string) {

        this.network.getToken(apikey)
            .pipe(
                map(token => token.value)
            )
            .subscribe(
                value =>
                    console.log("Token's value avalilable: ", value));
    }

    case2(apikey: string) {

        this.network.getToken(apikey)
            .subscribe(
                token => {
                    console.log("Token's value avalilable: ", token.value);
                    console.log("Token's state is also avalilable: ", token.isValid);
                });
    }
}