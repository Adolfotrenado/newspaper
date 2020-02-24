import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { apiDataModel } from "../models/apiDataModel";
@Injectable({
  providedIn: "root"
})
export class DataService {
  dataFiltered: object[] = [];

  constructor(public _http: HttpClient) {}

  get() {
    this._http
      .get(
        `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=a1d728d0e76746ddbbd39b75bdf7020d`
      )
      .subscribe(responseAPI => {
        this.dataFiltered = [];
        for (let i = 0; i < responseAPI["articles"].length; i++) {
          this.dataFiltered.push(
            new apiDataModel(
              responseAPI["articles"][i]["source"],
              responseAPI["articles"][i]["author"],
              responseAPI["articles"][i]["title"],
              responseAPI["articles"][i]["description"],
              responseAPI["articles"][i]["url"],
              responseAPI["articles"][i]["urlToImage"],
              responseAPI["articles"][i]["publishedAt"],
              responseAPI["articles"][i]["content"]
            )
          );
        }
      });
  }
  getFilteredSearch(order: string, category: string, searchInputValue: string) {
    this._http
      .get(
        `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&pageSize=100${order}${category}${searchInputValue}&apiKey=a1d728d0e76746ddbbd39b75bdf7020d`
      )
      .subscribe(responseAPI => {
        this.dataFiltered = [];
        for (let i = 0; i < responseAPI["articles"].length; i++) {
          this.dataFiltered.push(
            new apiDataModel(
              responseAPI["articles"][i]["source"],
              responseAPI["articles"][i]["author"],
              responseAPI["articles"][i]["title"],
              responseAPI["articles"][i]["description"],
              responseAPI["articles"][i]["url"],
              responseAPI["articles"][i]["urlToImage"],
              responseAPI["articles"][i]["publishedAt"],
              responseAPI["articles"][i]["content"]
            )
          );
        }
      });
  }
}
