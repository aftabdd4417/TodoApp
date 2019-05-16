import { Component, OnInit } from "@angular/core";
import { DataManipulationService } from "../services/data-manipulation.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.css"]
})
export class AddTaskComponent implements OnInit {
  constructor(
    private dataManipulationService: DataManipulationService,
    private location: Location
  ) {}

  newtaskvalue: string = "";
  alertmsg: boolean = false;
  onClick() {
    if (this.newtaskvalue == "") {
      this.alertmsg = true;
    } else {
      this.alertmsg = false;
      this.dataManipulationService.addTasks(this.newtaskvalue);
      this.newtaskvalue = "";
    }
  }

  ngOnInit() {}
  goBack(): void {
    this.location.back();
  }
}
