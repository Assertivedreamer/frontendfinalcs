import { Component, OnInit } from '@angular/core';
import {ApiService} from "../Service/api.service";
import {MatTableDataSource} from "@angular/material/table";



@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {



  dataSource!: MatTableDataSource<any>;
  studentData: any;
  constructor(private api :ApiService ){     }

  ngOnInit(): void {
    this.api.getcon().subscribe((res)=>{
      this.studentData=res;
      console.log(this.studentData);
    });



  }
}
