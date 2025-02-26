import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-contact',
  standalone: false,
  
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  driveForm: FormGroup;

   

  constructor(private route: ActivatedRoute, private fb: FormBuilder)
  {
    this.driveForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],

    });
  }
  submitForm() {
    if (this.driveForm.valid) {
      console.log('Form Submitted:', this.driveForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  ngOnInit() {
    console.log("this is working contract");
  }

}
