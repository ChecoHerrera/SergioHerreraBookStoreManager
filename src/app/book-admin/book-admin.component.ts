import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-admin',
  templateUrl: './book-admin.component.html',
  styleUrls: ['./book-admin.component.css']
})
export class BookAdminComponent implements OnInit {
  @Input() categories;
  constructor() { }

  ngOnInit() {
  }

}
