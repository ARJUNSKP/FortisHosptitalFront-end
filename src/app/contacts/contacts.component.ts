import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

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
