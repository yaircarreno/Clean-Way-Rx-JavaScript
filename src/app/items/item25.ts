import { Network } from '../api/network';
import { map } from 'rxjs/operators';

export class Item25 {

    network: Network;

    constructor(network: Network) {
        this.network = network;
    }

    itemExample() {
        this.case2()
    }

    case1() {
        const token = this.network.getToken("api-key");

        token.pipe(
            map(token => token.value))
            .subscribe(
                value => {
                    this.setupRequest(value);
                });
    }

    case2() {
        const token = this.network.getToken("api-key");

        token
            .subscribe(
                token => {
                    this.setupRequest(token.value);
                });
    }

    private setupRequest(token: string) {
        console.log(token);
    }
}