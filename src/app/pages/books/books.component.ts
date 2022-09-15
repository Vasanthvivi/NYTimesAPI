import { Component, OnInit } from '@angular/core';
import { BestSeller } from 'src/app/models/bestSeller';
import { BestSellersBook } from 'src/app/models/bestSellersBook';
import { Book } from 'src/app/models/book';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit{

  public bestSellersBooks: BestSellersBook[] = [];
  public booksList: Book[] = [];
  public bestSellers:BestSeller[] = [];
  public books:{ name:string, title:string, image:string, author:string }[] = [];
  constructor(private apiService: GlobalService) {

  }

  ngOnInit(){
    this.getOverView();
    this.getBestSellers();
    this.getBooksList();
    this.getNames();
  }

  getBestSellers(){
    this.apiService.getBestSellersList().subscribe(({
      next:( (data:any) => {
        this.bestSellersBooks = <BestSellersBook[]>data.results;
        console.log(this.bestSellersBooks)
      }),
      error: err => {
        alert("unable to fetch")
      }
    }))
  }

  getBooksList(){
    this.apiService.getBooksList().subscribe(({
      next:( (data:any) => {
         this.booksList = <Book[]>data.results;
      }),
      error: err => {
        alert("unable to fetch")
      }
    }))
  }

  getNames(){
    this.apiService.getNames().subscribe(({
      next:( (data:any) => {
        this.bestSellers = <BestSeller[]>data.results;
      }),
      error: err => {
        alert("unable to fetch")
      }
    }))
  }

  getOverView(){
    this.apiService.getFullOverview().subscribe(({
      next:( (data:any) => {
        this.buildBooks(data.results.lists);
      }),
      error: err => {
        alert("unable to fetch")
      }
    }))
  }

  buildBooks(lists:any){
    for(let i=0; i<lists.length; i++){
      for(let j = 0; j < lists[i].books.length; j++){
        let list = { name:"", author:"", image:"", title:"" };
        list["name"] = lists[i].list_name;
        list.image = lists[i].books[j]["book_image"]
        list.title = lists[i].books[j]["title"]
        list.author = lists[i].books[j]["author"]
        this.books.push(list);
      }
    }
  }
}
