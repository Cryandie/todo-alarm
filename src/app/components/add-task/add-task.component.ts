import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import {Task} from './../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTaskEvent : EventEmitter<Task> = new EventEmitter() ;
  text!: string;
  day!: string;
  reminder: boolean = false;
  done: boolean = false ;
  subscription : Subscription;
  showAddTask : boolean = false;

  constructor(private uiService: UiService) {
    this.subscription =  this.uiService.onToggle().subscribe((value)=>(this.showAddTask = value))
   } 

  ngOnInit(): void {
  }

  onSubmit(){
    if (!this.text)  {
      alert("You need to add a Task before saving");
      return;
    }
    if (!this.day) {
      alert ("You need to add a day before saving");
      return;
    }
    const newTask = {
      text : this.text,
      day : this.day,
      reminder : this.reminder,
      done : this.done,
    }
    this.onAddTaskEvent.emit(newTask)

    this.text = "";
    this.day= "";
    this.reminder= false;
  }
}
