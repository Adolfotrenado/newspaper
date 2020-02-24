import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-titulares",
  templateUrl: "./titulares.component.html",
  styleUrls: ["./titulares.component.css"]
})
export class TitularesComponent implements OnInit {
  dataFromApi: object[] = [];
  searchInputValue = "";
  checked: boolean[] = [];
  orderList = ["Date", "Popularity"];
  selected: boolean[] = [];
  categoryList = [
    "General",
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology"
  ];
  constructor(public _data: DataService) {
    _data.get();
    this.checkedValues();
    this.selectedValues();
    this.selected[0] = true;
    this.checked[0] = true;
  }

  categoryCheck(index: number) {
    for (let i = 0; i < this.checked.length; i++) {
      this.checked[i] = false;
    }
    this.checked[index] = true;
  }
  checkedValues() {
    for (let i = 0; i < this.categoryList.length; i++) {
      this.checked.push(false);
    }
  }
  orderSelect(index: number) {
    for (let i = 0; i < this.selected.length; i++) {
      this.selected[i] = false;
    }
    this.selected[index] = true;
  }
  selectedValues() {
    for (let i = 0; i < this.orderList.length; i++) {
      this.selected.push(false);
    }
  }
  filterNews() {
    let order: string =
      "&sortBy=" + this.orderList[this.selected.indexOf(true)];
    let category: string =
      "&category=" + this.categoryList[this.checked.indexOf(true)];
    let term: string = "&q=" + this.searchInputValue;
    this._data.getFilteredSearch(order, category, term);
  }

  ngOnInit(): void {}
}
