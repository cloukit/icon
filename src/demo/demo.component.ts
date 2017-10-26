import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styles: [
    '.iconBox { display:flex; flex-wrap: wrap; margin-left:20px; margin-top:10px; }',
    '.iconItem { text-align:center; font-size:12px; padding:10px; background-color:#fdfdfd; flex: 1; margin-right:10px; }',
    '.label { display:inline-block; width:250px; }',
  ],
})
export class DemoComponent {}
