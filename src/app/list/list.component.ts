import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  @Input() mydata :any;
  @Input() listItems:any;
  
  ngOnInit(): void {
  }

  cut(){
    console.log(this.mydata.title + "deletd")
    this.mydata.status ="true"
  }
}
