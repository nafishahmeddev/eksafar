import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nameControl = new FormControl('');
  mobileControl = new FormControl('');
  emailControl = new FormControl('');
  noOfPersonControl = new FormControl('1');
  destinationControl = new FormControl('');
  travellingDateControl = new FormControl('Dandeli, Karnataka');
  
  formLoading = false;

  constructor() {

  }

  ngOnInit(): void {

  }

  onSubmit() {
    const data = {
      "name": this.nameControl.value,
      "mobile": this.mobileControl.value,
      "email": this.emailControl.value,
      "noOfPerson": this.noOfPersonControl.value,
      "destination": this.destinationControl.value,
      "travellingDate": new Date(this.travellingDateControl.value as string).toISOString()
    }

    this.formLoading = true;
    fetch("https://eksafar-backend.herokuapp.com/inquiry", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json()).then(res => {
      console.log(res);
      alert("Successfully sent inquiry");
    }).catch(ex => {
      console.log(ex);
      alert("something went wrong")
    }).finally(()=>{
      this.formLoading = false;
    })


  }

}
