import { Component, Input } from '@angular/core';
import { Task } from '../main';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


@Input() list:any;
listItems : Array<Task> =[];

addData(item:any){
  console.log("in add to cart")
  console.log(item)
  this.listItems.push({'title': item, 'status': false})
}

clear(){
  this.listItems = this.listItems.filter(function(task){
    return !task.status
    
  })
}

}

