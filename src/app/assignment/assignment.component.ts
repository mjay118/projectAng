import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  // employees=[
  //   {
  //     id:1,
  //     name:'Mrityunjay',
  //     age:20,
  //     roles:['Developer'],
  //   },
  //   {
  //     id:2,
  //     name:'Ajay',
  //     age:29,
  //     roles:['HR'],
  //   },
  //   {
  //     id:3,
  //     name:'Ram',
  //     age:25,
  //     roles:['Admin'],
  //   },
  //   {
  //     id:4,
  //     name:'Shravya',
  //     age:26,
  //     roles:['Admin','HR'],
  //   },
  //   {
  //     id:5,
  //     name:'Shravya',
  //     age:26,
  //     roles:['HR'],
  //   },
  // ]

ename='';
eage='';
eroles='';
  employees:any = [];



  

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.params.subscribe(data=>{
    // })
    // sessionStorage.setItem('employees', JSON.stringify(this.employees));
  }
  addEmployee() {
    
    let empObj:any = {
      name: this.ename,
      age: this.eage,
      roles: this.eroles,
      id: this.employees.length + 1,
    };
    
     this.employees.push(empObj);

  }
}
