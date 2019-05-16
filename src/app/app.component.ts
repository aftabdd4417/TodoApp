import { Component } from "@angular/core";
import { DataManipulationService } from "./services/data-manipulation.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Todo List Items";
}
