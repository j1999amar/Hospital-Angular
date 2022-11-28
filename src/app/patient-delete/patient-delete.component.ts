import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-delete',
  templateUrl: './patient-delete.component.html',
  styleUrls: ['./patient-delete.component.css']
})
export class PatientDeleteComponent {
  delete=""
  readValue=()=>{
    let data=[{
      "Delete":this.delete
    }]
    console.log(data)
  }
}
