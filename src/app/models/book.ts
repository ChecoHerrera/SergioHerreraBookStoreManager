import { Category } from './category'

export class Book {

    private id: number;
    private name: string;
    private author: string;
    private category: Category;
    private price: number;

    constructor(name: string) {
        this.setId(this.id);
        this.setName(this.name);
        this.setAuthor(this.author);
        this.setCategory(this.category);
        this.setPrice(this.price);

    }

    getId() { return this.id };
    setId(value) { this.id = value; };

    getName() { return this.name };
    setName(value) { this.name = value; };

    getAuthor() { return this.author };
    setAuthor(value) { this.author = value; };

    getCategory() { return this.category };
    setCategory(value) { this.category = value; };

    getPrice() { return this.price };
    setPrice(value) { this.price = value; };


}