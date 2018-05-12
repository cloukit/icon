/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Input, Component, OnInit } from '@angular/core';
import { CloukitIconService } from './icon.service';

@Component({
  selector: 'cloukit-icon',
  template: `
<svg [attr.width]="_iconWidth" viewBox="0 0 512 512" *ngIf="combine === 'mask'">
  <defs>
    <mask id="subtract">
      <rect width="100%" height="100%" fill="white"/>
      <path
        [attr.d]="_foregroundIconPath"
        [attr.transform]="foregroundIconTransform"
        fill="black"
      />
    </mask>
  </defs>
  <path
    [attr.fill]="backgroundIconColor"
    [attr.d]="_backgroundIconPath"
    [attr.transform]="backgroundIconTransform"
    mask="url(#subtract)"
  />
</svg>
<svg [attr.width]="_iconWidth" viewBox="0 0 512 512" *ngIf="combine === 'stack'">
  <path
    [attr.fill]="backgroundIconColor"
    [attr.d]="_backgroundIconPath"
    [attr.transform]="backgroundIconTransform"
  />
  <path
    [attr.fill]="foregroundIconColor"
    [attr.d]="_foregroundIconPath"
    [attr.transform]="foregroundIconTransform"
  />
</svg>
<svg [attr.width]="_iconWidth" viewBox="0 0 512 512" *ngIf="combine === 'none'">
  <path
    [attr.fill]="foregroundIconColor"
    [attr.d]="_foregroundIconPath"
    [attr.transform]="foregroundIconTransform"
  />
</svg>`
})
export class CloukitIconComponent implements OnInit {

  _iconWidth: number;
  _foregroundIconPath: string;
  _backgroundIconPath: string;

  @Input()
  size = 'small';

  @Input()
  combine = 'none';

  @Input()
  foregroundIcon: string;

  @Input()
  foregroundIconColor = '#fff';

  @Input()
  foregroundIconTransform = '';

  @Input()
  backgroundIcon: string;

  @Input()
  backgroundIconColor = '#000';

  @Input()
  backgroundIconTransform = '';

  constructor(private iconService: CloukitIconService) { }

  ngOnInit() {
    this._foregroundIconPath = this.iconService.getIconPathD(this.foregroundIcon);
    this._backgroundIconPath = this.iconService.getIconPathD(this.backgroundIcon);
    this._iconWidth = this.iconService.getIconSize(this.size);
  }
}
