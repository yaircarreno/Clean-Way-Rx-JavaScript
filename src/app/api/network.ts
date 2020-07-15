import { of } from 'rxjs';
import { Token } from '../models/token';
import { User } from '../models/user';
import { Post } from '../models/post';
import { Comment } from '../models/comment';

export class Network {

    getToken(apiKey: string) {
        return of(new Token());
    }

    getUser(username: string) {
        // To simulate an empty user
        // return of(new User("", "", []));

        // To simulate user with multiples comments
        let comments = [new Comment(new Date(), "This is a fake comment!"),
                        new Comment(new Date(), "This is another fake comment!")];
        let posts = [new Post("Rx", "Clean Way Rx", comments)];
        return of(new User("yaircarreno", "yair@mail.com", posts));
    }

    getUserWithToken(username: string, token: Token) {
        return of(new User());
    }

    getPosts(user: User) {
        return of(new Post());
    }

    getComments(post: Post) {
        return of(new Comment());
    }
}