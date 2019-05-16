import { Component, OnInit } from "@angular/core";
import { Task } from "../models/task.interface";
import { DataManipulationService } from "../services/data-manipulation.service";

@Component({
  selector: "app-view-task",
  templateUrl: "./view-task.component.html",
  styleUrls: ["./view-task.component.css"]
})
export class ViewTaskComponent implements OnInit {
  tasks: Array<Task>;
  selectedList: any;
  filteredTasks;
  constructor(private dataManipulationService: DataManipulationService) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.tasks = this.dataManipulationService.getTasks();
  }

  editTasks(id) {
    this.selectedList = id;
  }

  getno() {
    let count = 0;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].active == true) {
        count++;
      }
    }
    return count;
    // return this.tasks.filter(task => task.active).length;
  }

  deleteTask(id) {
    let index = this.tasks.findIndex(task => task.id == id);
    return this.tasks.splice(index, 1);
  }

  filterTasks(type?) {
    if (type === "active") {
      this.filteredTasks = this.tasks.filter(task => task.active);
    } else if (type === "inactive") {
      this.filteredTasks = this.tasks.filter(task => !task.active);
    } else {
      this.filteredTasks = null;
    }
  }
}
