import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../servise/data.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit{

  dr_name:any
  dr_profileData:any
  constructor(private rout:Router,private as:ActivatedRoute,private ds:DataService){}

  ngOnInit(): void {
    if(!localStorage.getItem('admin')){
      this.rout.navigateByUrl("")
      alert("Please Login")
    }
    this.as.params.subscribe((Response:any)=>{
      this.dr_name=Response.dr_name
    })
    this.ds.drProfiledataviewApi(this.dr_name).subscribe((Response:any)=>{
      this.dr_profileData=Response
    })
  }

  updateData(){
    this.ds.editProfileApi(this.dr_name,this.dr_profileData).subscribe((Responce:any)=>{
     if(Responce){
      alert("Profile update")
      this.rout.navigateByUrl('home')
     }
    },
    Response=>{
      alert(Response.error)
    })
  }
  deletprofile(){
    this.ds.deletedProfileApi(this.dr_name).subscribe((Response:any)=>{
      if(Response){
        alert("doctor Profile deleted")
        this.rout.navigateByUrl('home')
      }
    },
    Response=>{
      alert(Response.error)
    })
  }
}
