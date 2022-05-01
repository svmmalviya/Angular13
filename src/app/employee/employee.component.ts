import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmployeeList:any=[];
  modeltitle:String="";
  ActivateAddEditEmpCom:boolean=false;
  emp:any;

  ngOnInit(): void {
    this.refreshEmpList();
    
  }
  editClick(dataitem: any){
    this.emp=dataitem;
    this.modeltitle="Edit Department"
    this.ActivateAddEditEmpCom=true;
  }
addClick(){
this.emp={
  EmployeeID:0,
  EmployeeName:"",
  Department:"",
  DateOfJoining:"",
  PhotoFileName:"Anonymous.png"

}
  this.modeltitle="Add Employee"
  this.ActivateAddEditEmpCom=true;  

}
deleteClick(dataitem:any){
   if(confirm("Are you sure??")){
     this.service.deleteEmp(dataitem.EmployeeID).subscribe(x=>{
       alert(x.toString());
       this.refreshEmpList();
     });
   }
}

closeClick(){
this.ActivateAddEditEmpCom=false;
this.refreshEmpList();

}

  refreshEmpList(){
   this.service.getEmpList().subscribe(x=>{
    this.EmployeeList=x;  
   });    
  }

}
