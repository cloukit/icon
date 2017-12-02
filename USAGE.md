### Initial Setup

Import the needed modules in your main module.

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloukitIconModule } from '@cloukit/icon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    CloukitIconModule,
  ],
  providers: [ ],
  bootstrap: [ AppComponent ],
})
// ....
```

&nbsp;

### Use an Icon


Use it like so in your templates.

```html
<cloukit-icon
  size="large"
  foregroundIcon="check"
>
</cloukit-icon>
```

For more complex examples see the source code of the Demo Stories above.


&nbsp;

### Use an Icon SVG Path

When you want to compose your own Icon based components and want full control over the icon grafic,
you import and use the SVG Paths directly like so.

```typescript
import { Component } from '@angular/core';
import { CloukitIcons } from '@cloukit/icons';

@Component({
  selector: 'my-foo',
  template: `
<svg
  viewBox="0 0 512 512"
>
  <path
    fill="red"
    [attr.d]="CloukitIcons.exclamationTriangle"
  ></path>
</svg>`,
  styles: [],
})
export class FooComponent {
  // make icon paths available in template
  CloukitIcons = CloukitIcons;
}
```
