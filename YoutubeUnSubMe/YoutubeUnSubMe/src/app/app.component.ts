import { importType } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { YoutubeAPIKey } from '../key/YoutubeAPIKey';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor( ) {  }
}
