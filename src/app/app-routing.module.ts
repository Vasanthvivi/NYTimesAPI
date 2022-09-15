import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksComponent } from './pages/books/books.component';

const routes: Route[] = [
  { path:"", component:BooksComponent, pathMatch:"full"},
  { path:"books", component:BooksComponent, pathMatch:"full" },
  { path:"**", redirectTo:"home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
