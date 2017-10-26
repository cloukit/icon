/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */

/**
 * An icon consists of exactly one SVG path inside a 512x512 pixel viewbox.
 * If you want to inject your own icons keep that in mind.
 * Draw your icons in any way and use "combine-path" or "convert to outlines" tools
 * to create a single path.
 *
 * Your icons svg code should look like this:
 *
 * ```html
 * <svg viewBox="0 0 512 512">
 *     <path d="M23233....." ></path>
 * </svg>
 * ```
 * We just need the value of the path "d" attribute.
 *
 */
export class CloukitIcons {

  public static triangle = 'M221.946 35.544c18.9-33.09 49.58-33.114 68.526-.046L502.84 406.132C521.783 439.196 506.252 466 468.132 466H45.08c-38.113 0-53.69-26.822-34.787-59.914L221.946 35.544z';
  public static squareRounded = 'M95 0h322c52.467 0 95 42.533 95 95v322c0 52.468-42.533 95-95 95H95c-52.468 0-95-42.532-95-95V95C0 42.533 42.532 0 95 0z';
  public static circle = 'M256 0c141.385 0 256 114.615 256 256 0 141.386-114.615 256-256 256S0 397.385 0 256 114.615 0 256 0z';

  public static check = 'M386.76 136L203.024 316.723l-78.016-76.74L95 269.502l78.02 76.74 30.005 29.513 213.745-210.24';
  public static cross = 'M384.676 161.08l-31.6-31.08-96.738 95.153L159.598 130 128 161.08l96.74 95.152L128 351.385l31.6 31.08 96.738-95.155 96.74 95.153 31.597-31.08-96.74-95.15';
  public static exclamation = 'M227.94 114.457h55.54v202.285h-55.54V114.457zm0 231.438h55.54v54.824h-55.54v-54.825z';
  public static info = 'M227.94 400.72h55.54V228.433h-55.54V400.72zm0-202.44h55.54v-54.823h-55.54v54.824z';

  public static chevronUp = 'M393.638 298.14L256.223 173 119 298.14l35.836 41.243 101.483-92.66 101.52 92.66';
  public static chevronDown = 'M393.638 214.243l-137.415 125.14L119 214.243 154.836 173l101.483 92.66L357.84 173';
  public static chevronRight = 'M214.243 119l125.14 137.416-125.14 137.223L173 357.8l92.66-101.482L173 154.8';
  public static chevronLeft = 'M298.14 119L173 256.416 298.14 393.64l41.243-35.838-92.66-101.482 92.66-101.52';

  public static arrowUp = 'M393.416 238.402L256 113.262l-137.223 125.14 35.837 41.243 73.327-71.188V400.72h55.54V208.456l74.137 71.188';
  public static arrowDown = 'M393.416 275.578L256 400.718l-137.223-125.14 35.837-41.243 73.327 71.188V113.26h55.54v192.263l74.137-71.188';
  public static arrowRight = 'M274.684 119.67l125.14 137.416-125.14 137.223-41.243-35.838 71.19-73.327H112.366v-55.54H304.63l-71.19-74.136';
  public static arrowLeft = 'M237.508 119.67l-125.14 137.416 125.14 137.223 41.243-35.838-71.187-73.327h192.262v-55.54H207.563l71.188-74.136';

}
