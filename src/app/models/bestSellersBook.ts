export class BestSellersBook{
  public age_group:string = "";
  public author:string = "";
  public contributor:string = "";
  public contributor_note:string = "";
  public description:string = "";
  public price:string = "";
  public publisher:string = "";
  public title:string = "";
  public isbns: {isbn10: string, isbn13: string}[] = [];
  public ranks_history: rank_history[] = [];
  public reviews: { article_chapter_link: string, book_review_link:string, first_chapter_link:string, sunday_review_link:string }[] = [];
}

class rank_history{
  public asterik: number = -1;
  public bestsellers_date:string = "";
  public dagger:number = -1;
  public display_name:string = "";
  public list_name:string = "";
  public primary_isbn10:string = "";
  public primary_isbn13:string = "";
  public published_date:string = "";
  public rank:number = -1;
  public rank_last_week:number = -1;
  public weeks_on_list:number = -1;
}
