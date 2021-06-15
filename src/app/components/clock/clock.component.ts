import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  private week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
  private weekDate = new Date() ;

  public hour! : string ;
  public minute! : string ; 
  public second! : string ; 
  public day! : string ;


  constructor() { }

  ngOnInit() {
    setInterval(() =>{
      const date = new Date ;
      this.updateDate(date);
      this.day = this.week[this.weekDate.getDay()]; 
    }, 1000)
  }

  updateDate(date:Date){
    const hours = date.getHours();
    this.hour = hours < 10 ? '0'+ hours : hours.toString();

    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? '0'+ minutes : minutes.toString();

    const seconds = date.getSeconds();
    this.second = seconds < 10 ? '0' + seconds : seconds.toString(); 
  
  }


}
