import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  constructor(private fb:FormBuilder){}

  contactUsFrom=this.fb.group({
    email:['',Validators.required],
    phoneNumber:[''],
    Seduction:['',Validators.required]
  })
  send(){
    if(this.contactUsFrom.valid){
      var path=this.contactUsFrom.value
      var email=path.email
      var phoneNumber=path.phoneNumber
      var seduction=path.Seduction

      console.log(email,phoneNumber,seduction);
      
    }
  }


}
