export class Comment {
    date: Date = new Date();
    text: string = "Good practices!";

    constructor(date: Date = new Date(), text: string = "Good practices!") {
        this.date = date;
        this.text = text;
    }
}