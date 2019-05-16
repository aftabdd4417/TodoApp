import { Injectable } from "@angular/core";
import { Task } from "../models/task.interface";

@Injectable({
  providedIn: "root"
})
export class DataManipulationService {
  constructor() {}

  todoArray: Task[] = [
    { id: 1, value: "Apple", active: false },
    { id: 2, value: "Mango", active: false },
    { id: 3, value: "Banana", active: false },
    { id: 4, value: "dBanana", active: false }
  ];

  addTasks(task) {
    this.todoArray.push({
      id: this.todoArray.length + 1,
      value: task,
      active: false,
    });
  }

  getTasks() {
    return this.todoArray;
  }

  getTaskById(id) {
    return this.todoArray.find(task => task.id === id * 1);
  }
}
