import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { DataManipulationService } from "../services/data-manipulation.service";
import { identifierModuleUrl } from "@angular/compiler";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-edit-task",
  templateUrl: "./edit-task.component.html",
  styleUrls: ["./edit-task.component.css"]
})
export class EditTaskComponent implements OnInit {
  constructor(
    private dataManipulationService: DataManipulationService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  selectedTask: any;

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getTaskById(id);
  }

  getTaskById(id) {
    this.selectedTask = this.dataManipulationService.getTaskById(id);
  }
  goBack(): void {
    this.location.back();
  }
}
