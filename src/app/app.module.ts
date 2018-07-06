import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { ListBookComponent } from './list-book/list-book.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { ListAuthorComponent } from './list-author/list-author.component';
import { MenuComponent } from './menu/menu.component';

import { BookService } from './services/book.service';
import { BookComponent } from './book/book.component';

const appRoutes: Routes = [
  { path: '', component: ListBookComponent },
  { path: 'books', component: ListBookComponent },
  { path: 'authors', component: ListAuthorComponent },
  { path: 'books/:id', component: DetailBookComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ListBookComponent,
    DetailBookComponent,
    ListAuthorComponent,
    MenuComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
