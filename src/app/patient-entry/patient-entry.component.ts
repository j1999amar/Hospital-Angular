import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {
  name=""
  id=""
  address=""
  phone=""
  date=""
  doctor=""
  readValue=()=>{
    let data=[{
      "Patient":this.name,
      "Patient Id":this.id,
      "Address":this.address,
      "Phone":this.phone,
      "Date":this.date,
      "Doctor":this.doctor
    }]
    console.log(data)
  }

}
