import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  //private readonly url = "http://localhost:90/api";
  private readonly url = "http://localhost:5297/api";
  
  public readonly photos ="http://localhost:90/api/Photos";
 
  constructor(private http:HttpClient) { }

  getDeptList():Observable<any[]>{
    return this.http.get<any>(this.url+"/department");    
  }

  addDept(val:any){
    return this.http.post(this.url+"/department",val);    
  }

  updateDept(val:any){
    return this.http.put(this.url+"/department",val);    
  }
  deleteDept(val:any){
    return this.http.delete(this.url+"/department?id="+val);    
  }

  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.url+"/employee");    
  }

  addEmp(val:any){
    return this.http.post(this.url+"/employee",val);    
  }

  updateEmp(val:any){
    return this.http.put(this.url+"/employee",val);    
  }
  deleteEmp(val:any){
    return this.http.delete(this.url+"/employee?id="+val);    
  }

  UploadPhoto(val:any){
    return this.http.post(this.url+"/Employee/SaveFile",val);
  }
  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.url+"/Employee/GetAllDepartmentNames");
  }
}
