import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-form-array',
  templateUrl: './nested-form-array.component.html',
  styleUrls: ['./nested-form-array.component.css']
})
export class NestedFormArrayComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email : '',
      phones : this.fb.array([])
    });

    this.myForm.valueChanges.subscribe();
  }
  get phoneForms() {
      return this.myForm.get('phones') as FormArray;
  }

  addPhone() {
    const phone = this.fb.group({
      area : [],
      prefix : [],
      line : []
    });

    this.phoneForms.push(phone);
  }

  deletePhone(i) {
    this.phoneForms.removeAt(i);
  }
}
