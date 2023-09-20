import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../servise/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder,private ds:DataService,private router:Router){}
  ngOnInit(): void {
      
  }

  signpform=this.fb.group({
    uname:['',Validators.required],
    email:['',Validators.required],
    age:['',Validators.required],
    gender:['',Validators.required],
    psw:['',Validators.required],
    cpsw:['',Validators.required]
  })

  registration(){
    if(this.signpform.valid){
      const path=this.signpform.value
      const uname=path.uname
      const email=path.email
      const age=path.age
      const gender=path.gender
      const psw=path.psw
      const cpsw=path.cpsw
      if(psw==cpsw){
        this.ds.userRegistration(uname,email,age,gender,psw,cpsw).subscribe((Responce:any)=>{          
          if(Responce){
            alert(Responce.uname+" is Registed")
            this.router.navigateByUrl('')
          }
        },
        Responce=>{
          alert(Responce.error+"already Registered")
        })
      }
      
    }
}
}
