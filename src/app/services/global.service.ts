import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {

  private booksApiKey: string = "URH3vxsOCTwZCr6FT2RnCHwlTNGusk8j";
  private endpoint: string = "https://api.nytimes.com/svc/";

  constructor(private http: HttpClient) {}

  // Books Api
  getBestSellersList() {
    return this.http.get(`${this.endpoint}books/v3/lists/best-sellers/history.json`, { params: { "api-key": this.booksApiKey } })
  }

  getBooksList() {
    return this.http.get(`${this.endpoint}books/v3/lists.json`, { params: { list: "hardcover-fiction", "api-key": this.booksApiKey } })
  }

  getFullOverview(){
    return this.http.get(`${this.endpoint}books/v3/lists/full-overview.json`, { params: { "api-key": this.booksApiKey } })
  }

  getNames(){
    return this.http.get(`${this.endpoint}books/v3/lists/names.json`, { params: { "api-key": this.booksApiKey } })
  }

  getOverview(){
    return this.http.get(`${this.endpoint}books/v3/lists/overview.json`, { params: { "api-key": this.booksApiKey } })
  }

  getReviews(){
    return this.http.get(`${this.endpoint}books/v3/lists/reviews.json`, { params: { "api-key": this.booksApiKey } })
  }

}
