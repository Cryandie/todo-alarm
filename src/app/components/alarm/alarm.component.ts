import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css']
})
export class AlarmComponent implements OnInit {
  public alarmDate = new Date() ;
  public alarmHour! : string ;
  public alarmMinute! : string ; 
  public alarmDay! : string ;
  public setMinute:number = this.alarmDate.getMinutes();
  public setHour:number = this.alarmDate.getHours();
  public setAlarm:boolean = false ;
  public stfuAlarm : boolean = false;
  public playAlarm : boolean = false ;
  constructor() { }

  ngOnInit() {
    this.configAlarm(this.alarmDate);
    setInterval(() =>{
      this.triggerAlarm()
    },1000)
  }

  //Displaying the Alarm Configuration :
  configAlarm(date:Date){
    this.alarmHour = date.getHours().toString();
    this.alarmMinute = date.getMinutes().toString();
    // console.log(date.getMinutes())
    //TODO : Fix bug and Add 0 when minute <10 before using add/subsminute
  }


  // Adding and Substracting Minutes :
  addMinute(){
    this.setMinute<59 ? this.setMinute++ : this.setMinute = 0;
    this.alarmMinute = this.setMinute<10? '0'+this.setMinute : this.setMinute.toString(); 
  }
  subsMinute(){
    this.setMinute>=1 ? this.setMinute-- : this.setMinute = 59;
    this.alarmMinute = this.setMinute<10? '0'+this.setMinute : this.setMinute.toString();
  }


    // Adding and Substracting Hours :
  addHour(){
    this.setHour<23 ? this.setHour++ : this.setHour = 0;
    this.alarmHour = this.setHour<10 ? '0'+this.setHour : this.setHour.toString();
  }
  subsHour(){
    this.setHour>=1 ? this.setHour-- : this.setHour = 23;
    this.alarmHour = this.setHour<10 ? '0'+this.setHour : this.setHour.toString();
  }


  //Turning On/Off Alarm :
  toggleAlarm(){
    this.setAlarm = !this.setAlarm ;
    this.setAlarm === true ? alert(`Your Alarm is Set at ${this.alarmHour}:${this.alarmMinute}`): alert('Alarm Turned Off')
  }

  //Alarm Trigger :
  triggerAlarm(){
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    (this.setAlarm === true && this.setHour === currentHour && this.setMinute === currentMinute) ? (this.stfuAlarm = true , this.playAlarm = true)
    : '';
    // this.audioAlarm();
  }

  //Alarm STOP :
  stopAlarm(){
    this.setAlarm = !this.setAlarm;
    this.stfuAlarm = !this.stfuAlarm;
    this.playAlarm = !this.playAlarm;
  }

  //Alarm Sound : 
  // audioAlarm(){
  //   const alarmSound = new Audio();
  //   this.playAlarm ? 
  //   alarmSound.play()
  //   : ''
  // }

}
