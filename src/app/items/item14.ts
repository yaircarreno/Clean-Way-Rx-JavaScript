import { partition } from 'rxjs';
import { Network } from '../api/network';


export class Item14 {

    network: Network;

    constructor(network: Network) {
        this.network = network;
    }

    public itemExample(apikey: string) {
        this.case1(apikey);
    }

    case1(apikey: string) {

        const valid = this.network.getToken(apikey);

        const [isValid, isNotValid] = partition(valid, token => token.isValid);

        isValid.subscribe(data => console.log('token is valid: ', data));
        isNotValid.subscribe(data => console.log('token is not valid: ', data));
    }
}