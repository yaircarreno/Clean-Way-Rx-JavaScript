import { Comment } from './comment';

export class Post {
    title: string;
    text: string;
    comments: Comment[];

    constructor(title: string = "Rx",
        text: string = "Clean Way Rx",
        comments: Comment[] = [new Comment()]) {
        this.title = title;
        this.text = text;
        this.comments = comments;
    }
}