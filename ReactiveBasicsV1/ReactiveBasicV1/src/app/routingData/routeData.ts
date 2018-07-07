import { BasicmformsComponent } from '../basicmforms/basicmforms.component';
import { NestedFormArrayComponent } from '../nested-form-array/nested-form-array.component';
import { NestedFormsComponent } from '../nested-forms/nested-forms.component';
import { ReactiveBasicFormsComponent } from '../reactive-basic-forms/reactive-basic-forms.component';
import {  Routes } from '@angular/router';

export const routeData: Routes = [
    {
        path : 'BasicMaterialForms',
        component : BasicmformsComponent
    },
    {
        path : 'NestedFormArray',
        component : NestedFormArrayComponent
    },
    {
        path : 'NestedForms',
        component : NestedFormsComponent
    },
    {
        path : 'ReactiveBasicForms',
        component : ReactiveBasicFormsComponent
    }
];
