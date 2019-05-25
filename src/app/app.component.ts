import { Component, OnInit } from "@angular/core";
import { Abarrotes } from "./model/abarrotes";
import { Articulo } from "./model/articulo";
import { Electronico } from "./model/electronico";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "tecgurus";

  articulo: Articulo;
  lista: number[] = [1, 2, 4, 5, 6, 7, 40, 60, 90, 100];

  ngOnInit() {
    for (let item of this.lista) {
      if (item > 40) {
        console.log(item);
      }
    }

    let tipo: string = "abarrotes";

    if (tipo === "abarrotes") {
      this.articulo = new Abarrotes(32, "desc", "cat", "titulo");
    } else {
      this.articulo = new Electronico(32, "desc", "cat", "titulo");
    }
  }
}
