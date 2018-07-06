import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

	@Input('data') book ={
	  id: null,
      author: '',
      title: '',
      publicationDate: '',
      available: false,
      nbPages: '',
      nbRent: '',
	}

  constructor() { }

  ngOnInit() {
  }

}
