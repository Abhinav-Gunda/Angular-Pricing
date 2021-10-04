import { Component, Input,Output, OnInit,EventEmitter } from '@angular/core';
//import { title } from 'process';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  //@Input() mcards :any;
  @Input() textvalue="";
  @Input() listValue:any;

  @Output() addCartEvent = new EventEmitter()

  passdata(){
    this.listValue= this.textvalue;
  }

  triggerEvent(item:any){
    this.addCartEvent.emit(item);
    //console.log(item)
    console.log(item+"passing")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
