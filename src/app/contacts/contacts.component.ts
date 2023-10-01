import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../servise/data.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  constructor(private fb:FormBuilder,private router:Router,private ds:DataService){}

  contactUsFrom=this.fb.group({
    email:['',Validators.required],
    phoneNumber:[''],
    seduction:['',Validators.required]
  })
  sends(){
    if(this.contactUsFrom.valid){
      var path=this.contactUsFrom.value
      var email=path.email
      var phoneNumber=path.phoneNumber
      var seduction=path.seduction

      this.ds.contacts(email,phoneNumber,seduction).subscribe((Responce:any)=>{
        if(Responce){
          this.router.navigateByUrl('home')
        }
      },
      Responce=>{
        alert("not Registered")
      })

    }
    else{
      alert("validation error")
    }
  }

}
