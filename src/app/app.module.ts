import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { TitularesComponent } from "./titulares/titulares.component";
import { ArticuloComponent } from "./articulo/articulo.component";
import { DataService } from "./services/data.service";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

const RouterConfig: Routes = [
  { path: "", component: TitularesComponent },
  { path: "titulares", component: TitularesComponent },
  { path: "articulo/:id", component: ArticuloComponent }
];

@NgModule({
  declarations: [AppComponent, TitularesComponent, ArticuloComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(RouterConfig, { useHash: true }),
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
