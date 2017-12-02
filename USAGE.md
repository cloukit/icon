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
