import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-articulo",
  templateUrl: "./articulo.component.html",
  styleUrls: ["./articulo.component.css"]
})
export class ArticuloComponent implements OnInit {
  param = parseInt(this._rute.snapshot.params["id"]);

  constructor(public _data: DataService, public _rute: ActivatedRoute) {
    console.log(this.param);
  }

  ngOnInit(): void {}
}
