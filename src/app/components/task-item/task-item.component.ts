import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteEvent: EventEmitter<Task> = new EventEmitter();
  @Output() toggleReminderEvent: EventEmitter<Task> = new EventEmitter();
  @Output() toggleProgressionEvent: EventEmitter<Task> = new EventEmitter();
  @Output() onEditEvent: EventEmitter<Task> = new EventEmitter();

  public editMode: boolean = false;
  public taskText!: string;

  constructor() {}
  ngOnInit(): void {}

  onDeleteClick(task: Task) {
    this.onDeleteEvent.emit(task);
  }
  toggleReminderClick(task: Task) {
    this.toggleReminderEvent.emit(task);
  }
  toggleProgressionClick(task: Task) {
    this.toggleProgressionEvent.emit(task);
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  onSubmitEdit(task: Task) {
    if (this.taskText) {
      task.text = this.taskText;
      task.edited = true;
      this.onEditEvent.emit(task);
      this.editMode = false;
      // console.log('task:', task, 'taskText:', this.taskText);
    } else this.editMode = false;
  }
}
