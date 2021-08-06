// Type definitions for BuildUrl
// Project: BuildUrl
// Definitions by: Tyler Kellogg <recurrence@gmail.com>

export = BuildUrl;

declare function BuildUrl(
  url: string,
  options?: BuildUrl.BuildUrlOptions
): string;

declare namespace BuildUrl {
  export type ParamValue = string | number | boolean | null;

  export interface BuildUrlOptions {
    path?: string;
    hash?: string;
    lowerCase?: boolean;
    disableCSV?: boolean;
    queryParams?: { [name: string]: ParamValue | ParamValue[] };
  }
}
