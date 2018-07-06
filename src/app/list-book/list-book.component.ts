import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../../model/book.interface';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

	books: Book[] = [];

  constructor(private  bookService: BookService) { }

  ngOnInit() {
  	this.bookService.getBook()
  	.subscribe((res: Book[]) => {
  		this.books = res;

  	})
  }

}
