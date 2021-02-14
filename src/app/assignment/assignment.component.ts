import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  employees=[
    {
      id:1,
      name:'Mrityunjay',
      age:20,
      roles:['Developer'],
    },
    {
      id:2,
      name:'Ajay',
      age:29,
      roles:['HR'],
    },
    {
      id:3,
      name:'Ram',
      age:25,
      roles:['Admin'],
    },
    {
      id:4,
      name:'Shravya',
      age:26,
      roles:['Admin','HR'],
    },
  ]
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
