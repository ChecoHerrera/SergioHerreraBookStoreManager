import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.css']
})
export class CategoryAdminComponent implements OnInit {
  id: number;
  name: string;
  categories: Category[] = [];
  @Output() sendCategories = new EventEmitter();

  onIdEnter(event) {
    this.id = Number(event.target.value);
    console.log(this.id)
  }
  onNameEnter(event) {
    this.name = event.target.value;
    console.log(this.name)
  }

  onAddCategory() {


    var category = new Category(this.id, this.name);
    this.categories.push(category);
    console.log(this.categories.length);
    this.sendCategories.emit(this.categories);

  }

  constructor() { }

  ngOnInit() {
  }

}
