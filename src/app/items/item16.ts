import { Network } from '../api/network';
import { Cache } from '../api/cache';
import { concatMap, filter, map, flatMap } from 'rxjs/operators';
import { from } from 'rxjs';

export class Item16 {

    network: Network;
    cache: Cache;

    constructor(network: Network, cache: Cache) {
        this.network = network;
        this.cache = cache;
    }

    itemExample(username: string) {
        this.case1(username);
    }

    case1(username: string) {

        this.network.getToken("api-key")
            .pipe(
                concatMap(token => this.cache.storeToken(token)),
                concatMap(saved => this.network.getUser(username))
            ).subscribe(user => {
                if (user.name.length > 0 && user.posts.length > 0) {
                    for (let post of user.posts) {
                        for (let comment of post.comments) {
                            console.log(`Date: ${comment.date} Comment: ${comment.text}`);
                        }
                    }
                }
            });
    }

    case2(username: string) {

        this.network.getToken("api-key")
            .pipe(
                concatMap(token => this.cache.storeToken(token)),
                concatMap(saved => this.network.getUser(username)),
                filter(user => user.name.length > 0 && user.posts.length > 0),
                map(user => user.posts),
                flatMap(posts => from(posts))
            ).subscribe(post => {
                for (let comment of post.comments) {
                    console.log(`Date: ${comment.date} Comment: ${comment.text}`);
                }
            });
    }

    case3(username: string) {

        this.network.getToken("api-key")
            .pipe(
                concatMap(token => this.cache.storeToken(token)),
                concatMap(saved => this.network.getUser(username)),
                filter(user => user.name.length > 0 && user.posts.length > 0),
                map(user => user.posts),
                flatMap(posts => from(posts).pipe(map(post => post.comments))),
                flatMap(comments => from(comments))
            ).subscribe(comment => {
                console.log(`Date: ${comment.date} Comment: ${comment.text}`);
            });
    }
}