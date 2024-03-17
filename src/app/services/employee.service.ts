import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employees } from '../store/models/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseurl = 'http://localhost:3000/employee';
  
  constructor(private http: HttpClient) {}

  GetAll() {
    return this.http.get<Employees[]>(this.baseurl);
  }

  GetbyId(code: number) {
    return this.http.get<Employees>(this.baseurl + '/' + code);
  }

  CreateData(data: Employees) {
    return this.http.post(this.baseurl, data);
  }

  UpdateData(data: Employees) {
    return this.http.put(this.baseurl + '/' + data.id, data);
  }

  DeleteData(code: number) {
    return this.http.delete(this.baseurl + '/' + code);
  }

}
