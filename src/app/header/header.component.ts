import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  addform: FormGroup;
  constructor() { 
    this.addform = new FormGroup(
      {
        email: new FormControl("", [Validators.required, Validators.minLength(5), Validators.pattern("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/")]),
        pass: new FormControl("", [Validators.required, Validators.minLength(5)]),
        confirmPass: new FormControl("", [Validators.required, Validators.minLength(5)]),
        nationalID: new FormControl("", [Validators.required, Validators.minLength(14)]),
      })
  }

  ngOnInit(): void {
  }

  add() {
    console.log(this.addform.value)
    // console.log(this.addform.value.pass)
    // console.log(this.addform.value.confirmPass)
    if(this.addform.value.pass != this.addform.value.confirmPass){
      console.log("not valid");
    }
  }
}
