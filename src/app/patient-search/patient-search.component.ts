import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent {
  search=""
  readValue=()=>{
    let data={
      "Search":this.search
    }
    console.log(data)

  }

}
