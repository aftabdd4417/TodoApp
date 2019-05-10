import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Todo List Items";
  todoArray = [
    "Apple",
    "Mango",
    "Banana",
    "Papaya",
    "Graps",
    "Govava",
    "Lichi"
  ];
  favouriteFruite: any = this.todoArray[1];
  task: any = "";
  alertmsg: boolean = false;

  onClick() {
    if (this.task == "") {
      this.alertmsg = true;
    } else {
      this.alertmsg = false;
      this.todoArray.push(this.task);
      this.task = "";
    }
  }
}
