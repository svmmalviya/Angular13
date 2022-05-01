import { Component,Input, OnInit } from '@angular/core';
import { ShowEmpComponent } from 'src/app/employee/show-emp/show-emp.component';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }
@Input() emp:any;
DepartmentList:any=[];
EmployeeID:string="";
EmployeeName:string="";
Department:string="";
DateOfJoining:string="";
PhotoFileName:string="";
PhotoFilePath:string="";

  ngOnInit(): void {
    this.loadDepartmentList();
  }

  loadDepartmentList(){
    this.service.getDeptList().subscribe((x:any)=>{
this.DepartmentList=x;


this.EmployeeID=this.emp.EmployeeID;
this.EmployeeName=this.emp.EmployeeName;
this.Department=this.emp.Department;
this.DateOfJoining=this.emp.DateOfJoining;
this.PhotoFileName=this.emp.PhotoFileName;
this.PhotoFilePath=this.service.photos+this.PhotoFileName;

    });
  }

  updateEmployee(){
    var val ={EmployeeID:this.EmployeeID,EmployeeName:this.EmployeeName,
    Department:this.Department,DateOfJoining:this.DateOfJoining,PhotoFileName:this.PhotoFileName}
    this.service.updateEmp(val).subscribe(x=>{
      alert(x.toString());
    });
  }

  addEmployee(){
    var val ={EmployeeID:this.EmployeeID,EmployeeName:this.EmployeeName,
      Department:this.Department,DateOfJoining:this.DateOfJoining,PhotoFileName:this.PhotoFileName}
      this.service.addEmp(val).subscribe(x=>{
        alert(x.toString());
      });
  }

  uploadPhoto(event:any){
    var file=event.target.files[0];
    const formData:FormData= new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((x:any)=>{
      this.PhotoFileName=x.toString();
      this.PhotoFilePath=this.service.photos+this.PhotoFileName;
    });
  }
}
