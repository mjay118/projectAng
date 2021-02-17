import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {
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
    {
      id:5,
      name:'Shravya',
      age:26,
      roles:['HR'],
    },
  ]
  filteredEmp: any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data=>
      {
        this.filteredEmp=this.employees.filter((emp)=>{
          return emp.id === Number(data.id);
        });
      });
  }

}
