import { Component, OnInit } from '@angular/core';
import {ApiService} from "../Service/api.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})


export class Table1Component implements OnInit {
  displayedColumns: string[] = [  'state-province'];
  dataSource!: MatTableDataSource<any>;
   studentData: any;
  constructor(private api :ApiService ){     }

  ngOnInit(): void {
    this.api.getStudent().subscribe((res)=>{
      this.studentData=res;
      console.log(this.studentData);
    });



  }
}

