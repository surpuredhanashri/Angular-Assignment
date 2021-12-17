import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  //contact DB thorugh service
  URL = "http://localhost:3000/user";

  getUsers():Observable <any>{
    return this.http.get(this.URL)
  }

  
  insertData (userObj:User):Observable<any>{
    let header = {'content-type':'application/json'};
    let body = JSON.stringify(userObj);

    console.log("Data to be inserted in the db.json is:"+body);
    return this.http.post(this.URL,body,{'headers':header});
  }

  deleteRecord(iRecord:string):Observable<any>{
    let deleteURL = this.URL+"/"+iRecord;             //http://localhost:3000/user/104
    console.log("URL:"+deleteURL);
    return this.http.delete(deleteURL);
  }

}
