import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(AllAppointment:any[],searchTerm:string,searchColum:string): any {
    const result:any=[]
    if(!AllAppointment || !searchTerm || !searchColum ){
      return AllAppointment
    }
    else{
      AllAppointment.forEach((item:any)=>{
      if(item[searchColum].trim().toLowerCase().includes(searchTerm.trim().toLowerCase())){
        result.push(item)
      }
    })
    return result
    }
  }

}
