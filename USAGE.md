### Initial Setup

Import the needed modules in your main module.

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// (1) Package Imports
import { CloukitIconModule } from '@cloukit/icon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    // (2) Register Imports
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

When you want to compose your own Icon based components and want full control over the icon graphic,
you can import and use the SVG Paths directly. See the [Icon Guide](/#/guide/iconing) for more details.

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


&nbsp;

### Version Compatibility

You can read the [release comments](https://github.com/cloukit/icon/releases) for full details.

Please mind the the compatibility chart

| Angular Version | Cloukit Component Version |
|-----------------|---------------------------|
| >=5.0.0         | 1.5.0 - current           |
| >=4.0.0         | 1.0.0 - 1.4.0             |

To install a specific version use:

```
yarn add @cloukit/icon@1.4.0
```

