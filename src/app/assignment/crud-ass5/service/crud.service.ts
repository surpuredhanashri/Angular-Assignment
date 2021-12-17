import { employee } from './../employee';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CRUDService {
  constructor(private http: HttpClient) {}

  URL = 'http://localhost:3000/employee';

  getUser(): Observable<any> {
    return this.http.get(this.URL);
  }

  // DeleteRecord(istring:string):Observable<any>{
  //   let deleteditem = this.URL+"/"+istring;
  //   return this.http.delete(deleteditem);
  // }

  //delete
  DeleteRecord(id: any): Observable<any> {
    // let deleteditem = this.URL+"/"+istring;
    // return this.http.delete(deleteditem);
    // console.log("here")
    return this.http.delete(`${this.URL}/${id}`);
  }


  //insert -- on submit button
  saveEmp(data: any) {
    console.log('here');
    console.warn(data);
    return this.http.post(this.URL, data);
  }

  getCurrentEmpData(id:any){
    return this.http.get(`${this.URL}/${id}`)
  }

  //edit
  updateEmp(id:any, data:any){
    console.log("update")
    return this.http.put(`${this.URL}/${id}`, data)
  }
}
