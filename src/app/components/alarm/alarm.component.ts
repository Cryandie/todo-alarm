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
    this.alarmHour = date.getHours()<10? '0' + date.getHours() : date.getHours().toString();
    this.alarmMinute = date.getMinutes()<10? '0' + date.getMinutes() : date.getMinutes().toString();
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
    // this.setAlarm === true ? alert(`Your Alarm is Set at ${this.alarmHour}:${this.alarmMinute}`): alert('Alarm Turned Off')
  }
  //Display current Alarm time if there is one to user , if not tell him there is no alarm :
  showCurrentAlarm(){
    this.setAlarm === true ? alert(`Your Alarm is Set at ${this.alarmHour}:${this.alarmMinute}`): alert('Alarm Turned Off')
  }

  //Alarm Trigger :
  triggerAlarm(){
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    (this.setAlarm === true && this.setHour === currentHour && this.setMinute === currentMinute &&currentTime.getSeconds() === 0) ? (this.stfuAlarm = true , this.playAlarm = true)
    : (this.stfuAlarm = false , this.playAlarm = false);
    this.audioAlarm();
  }

  //Alarm STOP :
  stopAlarm(){
    this.playAlarm = false;
    this.setAlarm = !this.setAlarm;
    this.stfuAlarm = !this.stfuAlarm;
  } // TO FIX ! 

  //Alarm Sound : 
  audioAlarm(){
    const alarmSound = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-space-shooter-alarm-1002.mp3");
    // alarmSound.loop = false ;
    this.playAlarm ? 
    alarmSound.play()
    : ''
  }

}
