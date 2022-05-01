import { Component,Input, OnInit } from '@angular/core';
import { ShowEmpComponent } from 'src/app/employee/show-emp/show-emp.component';
import { SharedService } from 'src/app/shared.service';
import { ShowDepComponent } from '../show-dep/show-dep.component';
@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }
@Input() dep:any;
DepartmentID:string="";
DepartmentName:string="";

  ngOnInit(): void {
    this.DepartmentID=this.dep.DepartmentID;
    this.DepartmentName=this.dep.DepartmentName
  }

  updateDepartment(){
    var val ={departmentId:this.DepartmentID,departmentName:this.DepartmentName}
    this.service.updateDept(val).subscribe(x=>{
      alert(x.toString());
    });
  }

  addDepartment(){
var val ={departmentId:this.DepartmentID,departmentName:this.DepartmentName}
this.service.addDept(val).subscribe(x=>{
  alert(x.toString());
});
  }

}
