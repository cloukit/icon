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

  public static anonym = 'M45.748 2.757c46.774-12.182 118.827 27.32 188.94 26.76 76.893-.618 152.053-40.12 203.352-26.76 47.19 12.29 46.804 55.226 25.983 96.47-1.068 2.117-1.068 106.958 0 314.52H419.92c3.052-174.157 3.052-259.86 0-257.113C400.23 174.357 378.4 186.2 359.43 186.2c-69.266 0-59.762-52.685-124.745-52.685-64.982 0-55.347 52.685-131.767 52.685C26.5 186.2-52.325 28.3 45.748 2.757zM117.5 131c35.622 0 64.5-19.028 64.5-42.5S153.122 46 117.5 46 53 65.028 53 88.5 81.878 131 117.5 131zm236 0c35.622 0 64.5-19.028 64.5-42.5S389.122 46 353.5 46 289 65.028 289 88.5s28.878 42.5 64.5 42.5z';
  public static pencil = 'M343.118 36l114.907 96.418-230.118 274.244L113 310.244 343.118 36zM92.71 333.576l114.907 96.418-131.73 40.318L92.71 333.577z';
  public static user = 'M256 231c-57.99 0-105-47.01-105-105S198.01 21 256 21s105 47.01 105 105-47.01 105-105 105zm237 262H19c0-130.89 106.11-237 237-237s237 106.11 237 237z';
  public static eye = 'M253 396.016c-127.025 0-187.293-64.364-230-135.258C65.578 189.858 125.975 119 253 119s177.184 80.207 230 141.758c-53.105 71.652-102.975 135.258-230 135.258zm.17-68.016c48.142 0 87.17-31.34 87.17-70s-39.028-70-87.17-70c-48.143 0-87.17 31.34-87.17 70s39.027 70 87.17 70z';

  public static checkCircle = 'M256 512C114.615 512 0 397.385 0 256S114.615 0 256 0s256 114.615 256 256-114.615 256-256 256zm130.76-376L203.024 316.723l-78.016-76.74L95 269.502l78.02 76.74 30.005 29.513 213.745-210.24L386.76 136z';
  public static exclamationCircle = 'M256 512C114.615 512 0 397.385 0 256S114.615 0 256 0s256 114.615 256 256-114.615 256-256 256zm-28.06-397.543v202.285h55.54V114.457h-55.54zm0 231.438v54.824h55.54v-54.825h-55.54z';
  public static exclamationTriangle = 'M221.946 35.544c18.9-33.09 49.58-33.114 68.526-.046L502.84 406.132C521.783 439.196 506.252 466 468.132 466H45.08c-38.113 0-53.69-26.822-34.787-59.914L221.946 35.544zm5.995 78.913v202.285h55.54V114.457h-55.54zm0 231.438v54.824h55.54v-54.825h-55.54z';
  public static infoCircle = 'M256 512C114.615 512 0 397.385 0 256S114.615 0 256 0s256 114.615 256 256-114.615 256-256 256zm-28.06-111.28h55.54V228.433h-55.54V400.72zm0-202.44h55.54v-54.823h-55.54v54.824z';
}