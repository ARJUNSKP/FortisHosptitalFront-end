import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../servise/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-new',
  templateUrl: './doctor-new.component.html',
  styleUrls: ['./doctor-new.component.css']
})
export class DoctorNewComponent implements OnInit {

  constructor(private rout:Router,private fb:FormBuilder,private ds:DataService){}
  ngOnInit(): void {
    if(!localStorage.getItem('admin')){
      this.rout.navigateByUrl("")
      alert("Please Login")
    }
  }
  newDoctorForm=this.fb.group({
    image:['',Validators.required],
    drname:['',Validators.required],
    department:['',Validators.required],
    Education:['',Validators.required],
    description:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required],
  })
  RegisterDocter(){
    if(this.newDoctorForm.valid){
      var path=this.newDoctorForm.value
      var dr_image=path.image
      var dr_name=path.drname
      var email=path.email
      var psw=path.password
      var department=path.department
      var degree=path.Education
      var description=path.description
      console.log(dr_image,dr_name,email,psw,department,degree,description);
      
      
      this.ds.newDocterCreation(dr_image,dr_name,email,psw,department,degree,description).subscribe((Response:any)=>{
        alert(Response.dr_name+'Account is registered') 
        this.newDoctorForm.reset()
      },
      Response=>{
        alert(Response.error)
      })
    }
    else{
      alert("input field are empty")
    }
  }
  
}
