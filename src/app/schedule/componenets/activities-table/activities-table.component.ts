import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/core/constants/app-routs.constants';

@Component({
  selector: 'app-activities-table',
  templateUrl: './activities-table.component.html',
  styleUrls: ['./activities-table.component.css']
})
export class ActivitiesTableComponent implements OnInit {

  public dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  data;
  displayedColumns;
  employeeProfile: boolean;
  customerProfile: boolean;
  constructor(private router: Router) { }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();

  }
  ngOnInit() {
    this.dataSource.data = this.data;
  }

  ngAfterViewInit() {
    // this.dataSource.data = EXAMPLE_DATA;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  public navigateCustomer = (id) => {
    this.router.navigate([AppRoutes.USERS + "/" + AppRoutes.CUSTOMERLIST + "/" + AppRoutes.CUSTOMERINFO + "/", id])
  }

  public navigateEmployee = (id) => {
    this.router.navigate([AppRoutes.USERS + "/" + AppRoutes.EMPLOYEELIST + "/" + AppRoutes.EMPLOYEEINFO + "/", id])
  }
}
