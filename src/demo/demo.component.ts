import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styles: [
    `.iconBox {
      display: flex;
      flex-wrap: wrap;
    }
    `,
    '.iconItem { color:#777; text-align:center; font-size:12px; padding:10px; background-color:#efefef; margin-right:10px; margin-top:10px; min-width:85px; max-width:100px; }',
    '.iconCodeBox { color:#777; padding:10px; background-color:#efefef; margin-right:10px; margin-top:10px; }',
    '.label { display:inline-block; width:250px; }',
  ],
})
export class DemoComponent {}
