import { Network } from '../api/network';
import { flatMap } from 'rxjs/operators';
import { User } from '../models/user';
import { of } from 'rxjs';

export class Item2 {

    network: Network;
    userGlobal: User;

    constructor(network: Network) {
        this.network = network;
    }

    itemExample(username: string) {
        this.case2(username);
    }

    case1(username: string) {

        this.network.getUser(username)
            .pipe(
                flatMap(user => {
                    this.userGlobal = new User(user.name, user.email, user.posts)
                    return of(this.userGlobal);
                })
            )
            .subscribe(user => console.log('user:', this.userGlobal));
    }

    case2(username: string) {

        this.network.getUser(username)
            .subscribe(user => {
                this.userGlobal = user;
                console.log('user:', this.userGlobal);
            });
    }
}