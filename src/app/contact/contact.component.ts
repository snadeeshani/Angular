import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup
  submitted = false;
  sucess = false;

  constructor(private fromBuilder: FormBuilder) { 
    this.messageForm= this.fromBuilder.group({
      name: ['', Validators.required],
      message: ['',Validators.required]
    })
  }

  OnSubmit()
  {
    this.submitted= true;
    if(this.messageForm.invalid)
    {
      return;
    }
    this.sucess = true;
  }
  ngOnInit() {
  }

}
