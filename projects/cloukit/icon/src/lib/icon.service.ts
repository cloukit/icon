/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CloukitIconService {

  /** Holds all registered icons */
  private _icons = new Map<string, string>();

  /** Holds all registered icon sizes */
  private _iconSizes = new Map<string, number>();

  public registerIcon(iconName: string, pathD: string) {
    this._icons.set(iconName, pathD);
  }

  public getIconPathD(iconName: string) {
    return this._icons.get(iconName);
  }

  public registerIconSize(size: string, width: number) {
    this._iconSizes.set(size, width);
  }

  public getIconSize(size: string) {
    return this._iconSizes.get(size);
  }
}
