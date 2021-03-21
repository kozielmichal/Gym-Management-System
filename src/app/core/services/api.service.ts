import { Customer } from './../../users/models/custumer.model';
import { Employee } from './../../users/models/emplyee.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private getData(url: string) {
    return this.http.get(url);
  }

  private createObject(url: string, object: Object) {
    return this.http.post(url, object);
  }

  private updateObject(url: string, id: number, object: Object) {
    if (!url.endsWith("/"))
      url += "/";
    url += id;
    this.http.put(url , object);
  }

  public getEmployee(url: string) {
    this.getData(url);
  }

  public createEmployee(url: string, employe: Employee) {
    this.createObject(url, employe);
  }

  public updateEmployee(url: string, id: number, employee: Employee){
    this.updateObject(url,id,employee);
  }

  public getCustomers(url) {
    this.getData(url);
  }

  public createCustomer(url: string, customer: Customer) {
    this.createObject(url, customer);
  }

  public updateCustomer(url: string, id: number, employee: Employee){
    this.updateObject(url,id,employee);
  }
}
