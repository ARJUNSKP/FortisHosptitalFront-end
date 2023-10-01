import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  adminLogin(email:any,psw:any){
    const bodydata={
      email,
      psw
    }

    return this.http.post('https://fortis-hospitial.onrender.com/express/admin/login',bodydata)
  }
  newDocterCreation(dr_image:any,dr_name:any,email:any,psw:any,department:any,degree:any,description:any){
    
    const BodyData={
      dr_image,
      dr_name,
      email,
      psw,
      department,
      degree,
      description,
    }

    return this.http.post('https://fortis-hospitial.onrender.com/express/admin/DoctorRegistration',BodyData)
  }

  departmentDoctorsApi(department:any){
    return this.http.get('https://fortis-hospitial.onrender.com/express/depatmentDoctor/'+department)
  }

  drProfiledataviewApi(dr_name:any){
    return this.http.get('https://fortis-hospitial.onrender.com/express/doctorprofile/'+dr_name)
  }

  editProfileApi(dr_name:any,bodydata:any){
    return this.http.post('https://fortis-hospitial.onrender.com/express/doctorprofileupdate/'+dr_name,bodydata)
  }
  deletedProfileApi(dr_name:any){
    return this.http.get('https://fortis-hospitial.onrender.com/express/doctorprofiledelete/'+dr_name)
  }

  // ****** user api data **********

  userLoginApi(email:any,psw:any){
    const BodyData={
      email,
      psw
    }
    return this.http.post('https://fortis-hospitial.onrender.com/express/user/login',BodyData)
  }
  userRegistration(uname:any,email:any,age:any,gender:any,psw:any,cpsw:any){
    const bodyData={
      uname,
      email,
      age,
      gender,
      psw,
      cpsw
    }
    return this.http.post('https://fortis-hospitial.onrender.com/express/user/registration',bodyData)
  }


  // *********** doctor api data *********
  doctorLoginApi(email:any,psw:any){
    const bodydata={
      email,
      psw
    }
    return this.http.post('https://fortis-hospitial.onrender.com/express/doctor/login',bodydata)
  }

  doctorProfileApi(dr_name:any){
    return this.http.get('https://fortis-hospitial.onrender.com/express/doctorprofile/'+dr_name)
  }
  doctorTimeSlotSet(mfrom:any,mto:any,afrom:any,ato:any,dr_name:any){
    const bodydata={
      mfrom,
      mto,
      afrom,
      ato
    }
    return this.http.post('https://fortis-hospitial.onrender.com/express/doctor/timeset/'+dr_name,bodydata)
  }

  bookopApi(dr_name:any,pname:any,page:any,pgender:any,pdate:any,schedule:any){
    const bodydata={
      pname,
      page,
      pgender,
      pdate,
      schedule
    }
    return this.http.post('https://fortis-hospitial.onrender.com/express/opbooking/'+dr_name,bodydata)
  }

  allappointmentApi(dr_name:any){
    return this.http.get('https://fortis-hospitial.onrender.com/express/Allappointment/'+dr_name)
  }



  // ************** admin api data ************************************
  contacts(email:any,phoneNumber:any,seduction:any){
    const bodydata={
      email,
      phoneNumber,
      seduction,
    }
    return this.http.post('https://fortis-hospitial.onrender.com/express/countatus',bodydata)
  }
  enquirylist(){
    return this.http.get('https://fortis-hospitial.onrender.com/express/user/enquiry/list')
  }
}
