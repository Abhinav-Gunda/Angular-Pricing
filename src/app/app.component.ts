import { Component } from '@angular/core';
//import { freemem } from 'os';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  
  cards = [
    {
      tag : "FREE",
      title : "$0",
      number : "Single User",
      memory : "5GB Storage",
      publicprojects: "Unlimited public Projects",
      access : "Community Access",
      privateprojects : {
        pp : "Unlimited Private Projects",
        available : false
      },
      support: {
        sup:"Dedicated Phone Support",
        available : false
      },
      domains: {
        dom:"Free Subdomain",
        available : false
      },
      reports:{
        rep:"Monthly Status Reports",
        available : false
      }
    },

    {
      tag : "PLUS",
      title : "$9",
      number : "5 Users",
      memory : "50GB Storage",
      publicprojects: "Unlimited public Projects",
      access : "Community Access",
      privateprojects : {
        pp : "Unlimited Private Projects",
        available : true
      },
      support: {
        sup:"Dedicated Phone Support",
        available : true
      },
      domains: {
        dom:"Free Subdomain",
        available : true
      },
      reports :{
        rep:"Monthly Status Reports",
        available : false
      }
    },
    
    {
      tag : "PRO",
      title : "$49",
      number : "Unlimited User",
      memory : "150GB Storage",
      publicprojects: "Unlimited public Projects",
      access : "Community Access",
      privateprojects :{
        pp : "Unlimited Private Projects",
        available : true
      },
      support: {
        sup:"Dedicated Phone Support",
        available : true
      },
      domains: {
        dom:" Unlimited Free Subdomain",
        available : true
      },
      reports :{
        rep:"Monthly Status Reports",
        available : true
      }
    },

  ]
}

