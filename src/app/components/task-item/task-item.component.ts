import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { Task } from './../../Task';



@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task! : Task ;
  @Output() onDeleteEvent: EventEmitter<Task> = new EventEmitter();
  @Output() toggleReminderEvent: EventEmitter<Task> = new EventEmitter();
  @Output() toggleProgressionEvent: EventEmitter<Task> = new EventEmitter();

  constructor() {
  }
  ngOnInit(): void {
  }

onDeleteClick(task:Task) {
 this.onDeleteEvent.emit(task);
}
toggleReminderClick(task:Task){
  this.toggleReminderEvent.emit(task);
}
toggleProgressionClick(task:Task){
 this.toggleProgressionEvent.emit(task);
}
}
