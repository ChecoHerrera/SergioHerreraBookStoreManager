import { Book } from './book'


export class Category {

    private id: number;
    private name: string;
    private books: Book[] = [];


    constructor(pId: number, pName: string) {

        this.setId(pId);
        this.setName(pName);


    }
    getId() { return this.id };
    setId(value: number) { this.id = value; };

    getName() { return this.name };
    setName(value: string) { this.name = value; };


    getBooks() { return this.books };
    setBooks(value) { this.books.push(value) };

}