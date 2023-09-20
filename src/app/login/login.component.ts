import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../servise/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private fb:FormBuilder,private ds:DataService,private rout:Router){}
  ngOnInit(): void {
  }
  loginformvalidater=this.fb.group({
    email:['',Validators.required],
    psw:['',Validators.required],
    selectiondata:['']
  })
  login(){
    if(this.loginformvalidater.valid){
      const path=this.loginformvalidater.value
      const email=path.email
      const psw=path.psw
      const selectiondata=path.selectiondata

      if(selectiondata=="user"){
          this.ds.userLoginApi(email,psw).subscribe((Response:any)=>{
            alert(Response +"is login")
            localStorage.setItem("user","user")
            this.rout.navigateByUrl('home')
          },
          Response=>{
            alert(Response.error)
          })
      }
      if(selectiondata=="doctor") {
        this.ds.doctorLoginApi(email,psw).subscribe((Response:any)=>{
          alert(Response +"is login")
          localStorage.setItem('doctor',"doctor")
          localStorage.setItem('doctorName',Response)
          this.rout.navigateByUrl('home')
        },
        Response=>{
          alert(Response.error)
        })
      } 
      if(selectiondata=="admin") {
        this.ds.adminLogin(email,psw).subscribe((Response:any)=>{
          alert(Response)
          localStorage.setItem('admin','admin')
          this.rout.navigateByUrl('home')        
        },
        Response=>{
          alert(Response.error)
        })
      }
    }
    else{
      alert("login form not valid")
    }
  }
}
