import { Post } from './post';

export class User {
    name: string;
    email: string;
    posts: Post[];

    constructor(name: string = "Yair Carreno", email: string = "yair@email",
        posts: Post[] = [new Post()]) {
        this.name = name;
        this.email = email;
        this.posts = posts;
    }
}