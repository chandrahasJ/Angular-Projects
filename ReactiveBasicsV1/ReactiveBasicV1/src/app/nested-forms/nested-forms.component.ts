import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nested-forms',
  templateUrl: './nested-forms.component.html',
  styleUrls: ['./nested-forms.component.css']
})
export class NestedFormsComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    const phone = this.fb.group({
      area : [],
      prefix : [],
      line : []
    });

    this.myForm = this.fb.group({
      email : '',
      cellPhone : phone,
      homePhone : phone
    });

    this.myForm.valueChanges.subscribe();
  }

}
