import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { routeData } from '../app/routingData/routeData';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

import { AppComponent } from './app.component';
import { ReactiveBasicFormsComponent } from './reactive-basic-forms/reactive-basic-forms.component';
import { BasicmformsComponent } from './basicmforms/basicmforms.component';
import { NestedFormsComponent } from './nested-forms/nested-forms.component';
import { NestedFormArrayComponent } from './nested-form-array/nested-form-array.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveBasicFormsComponent,
    BasicmformsComponent,
    NestedFormsComponent,
    NestedFormArrayComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatChipsModule,
    RouterModule.forRoot(routeData, { useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
