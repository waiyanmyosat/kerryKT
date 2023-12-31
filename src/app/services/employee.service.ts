import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    return this._http.post('https://json-server-in.vercel.app', data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put('https://json-server-in.vercel.app${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get('https://json-server-in.vercel.app/');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`https://json-server-in.vercel.app${id}`);
  }
}
