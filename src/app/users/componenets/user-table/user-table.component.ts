import { AppRoutes } from './../../../core/constants/app-routs.constants';
import { Router } from '@angular/router';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  public dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  @Input() data;
  @Input() displayedColumns;
  @Input() employeeProfile: boolean;
  @Input() customerProfile: boolean;
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
