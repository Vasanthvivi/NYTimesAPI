export class Book{
  public amazon_product_url:string = "";
  public asterik:number = -1;
  public bestsellers_date:string = "";
  public book_details:BookDetail[] = [];
  public dagger:number = -1;
  public display_name:string = "";
  public isbns: {isbn10: string, isbn13: string}[] = [];
  public list_name:string = "";
  public published_date:string = "";
  public rank:number = -1;
  public rank_last_week:number = -1;
  public reviews:{ article_chapter_link: string, book_review_link:string, first_chapter_link:string, sunday_review_link:string }[] = [];
  public weeks_on_list:number = -1;
}

class BookDetail{
  public age_group:string = "";
  public author:string = "";
  public contributor:string = "";
  public contributor_note:string = "";
  public description:string = "";
  public price:string = "";
  public primary_isbn10:string = "";
  public primary_isbn13:string = "";
  public publisher:string = "";
  public title:string = "";
}
