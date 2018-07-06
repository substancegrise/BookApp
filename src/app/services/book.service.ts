import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from  '../../model/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
	private urlServer: string = 'http://localhost:5000';
	

  constructor(private http: HttpClient) {}


  getAuthor(){
  	return this.http.get(this.urlServer + '/authors')
  }

  getBook(){
  	return this.http.get(this.urlServer + '/books')
  }
}
