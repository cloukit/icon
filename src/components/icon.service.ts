/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Injectable } from '@angular/core';

@Injectable()
export class IconService {

  /** Holds all registered icons */
  private _icons = new Map<string, string>();

  public registerIcon(iconName: string, pathD: string) {
    this._icons.set(iconName, pathD);
  }

  public getIconPathD(iconName: string) {
    return this._icons.get(iconName);
  }
}
