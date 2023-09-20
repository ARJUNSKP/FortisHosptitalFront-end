import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datesote'
})
export class DatesotePipe implements PipeTransform {

  transform(AllAppointment:any[],searchcondent:string,searchfeld:string): any {
    const result:any=[]
    if(!AllAppointment || !searchcondent ||!searchfeld){
      return AllAppointment
    }
    else{
      AllAppointment.forEach(item=>{
        if(item[searchfeld].includes(searchcondent)){
          result.push(item)
        }
      })
    }
    return result
  }
}
