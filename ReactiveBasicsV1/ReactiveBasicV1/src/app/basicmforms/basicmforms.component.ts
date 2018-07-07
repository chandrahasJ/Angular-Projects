import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicmforms',
  templateUrl: './basicmforms.component.html',
  styleUrls: ['./basicmforms.component.css']
})
export class BasicmformsComponent implements OnInit {
  myForm: FormGroup;
  careerOptions: any[];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.careerOptions = [
        {id : 0 , careerOption: 'Software Dev'},
        {id : 1 , careerOption: 'Artist'},
        {id : 2, careerOption : 'Police'}
    ];
    this.myForm = this.fb.group({
      email: '',
      messages: '',
      career: ''
    });

    this.myForm.valueChanges.subscribe(console.log);
  }

}
