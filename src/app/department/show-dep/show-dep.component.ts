import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  DepartmentList:any=[];
  modeltitle:String="";
  ActivateAddEditDepCom:boolean=false;
dep:any;

  ngOnInit(): void {
    this.refreshDepList();
    
  }
  editClick(dataitem: any){
    this.dep=dataitem;
    this.modeltitle="Edit Department"
    this.ActivateAddEditDepCom=true;
  }
addClick(){
this.dep={
  departmentID:0,
  departmentName:""
}
  this.modeltitle="Add Department"
  this.ActivateAddEditDepCom=true;  

}
deleteClick(dataitem:any){
   if(confirm("Are you sure??")){
     this.service.deleteDept(dataitem.DepartmentID).subscribe(x=>{
       alert(x.toString());
       this.refreshDepList();
     });
   }
}

closeClick(){
this.ActivateAddEditDepCom=false;
this.refreshDepList();

}

  refreshDepList(){
   this.service.getDeptList().subscribe(x=>{
    this.DepartmentList=x;  
   });    
  }
}
