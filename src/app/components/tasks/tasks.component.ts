import { Component, OnInit } from '@angular/core';
import { Task } from './../../Task';
import { LiveTasksService } from 'src/app/services/live-tasks.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private liveTasksService: LiveTasksService) {}
  ngOnInit(): void {
    this.liveTasksService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
  deleteTask(task: Task) {
    this.liveTasksService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.liveTasksService.updateTask(task).subscribe();
  }
  toggleProgression(task: Task) {
    task.done = !task.done;
    this.liveTasksService.updateTask(task).subscribe();
  }
  addTask(task: Task) {
    this.liveTasksService.addTask(task).subscribe((task) => {
      console.log('task inside subscription:', task);
      this.tasks.push(task);
    });
  }
  editTask(task: Task) {
    console.log(task);
    this.liveTasksService.updateTask(task).subscribe();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }
}
