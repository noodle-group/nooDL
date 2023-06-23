type pattern = RegExp;

type PatternObject = {
  [patternName: string]: pattern;
};

export type State =
  | "AL" | "AK" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC"
  | "FL" | "GA" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY"
  | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT"
  | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "OH"
  | "OK" | "OR" | "PA" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT"
  | "VT" | "VA" | "WA" | "WV" | "WI" | "WY";
export interface LicensePatterns {
  AL: PatternObject;
  AK: PatternObject;
  AZ: PatternObject;
  AR: PatternObject;
  CA: PatternObject;
  CO: PatternObject;
  CT: PatternObject;
  DE: PatternObject;
  DC: PatternObject;
  FL: PatternObject;
  GA: PatternObject;
  HI: PatternObject;
  ID: PatternObject;
  IL: PatternObject;
  IN: PatternObject;
  IA: PatternObject;
  KS: PatternObject;
  KY: PatternObject;
  LA: PatternObject;
  ME: PatternObject;
  MD: PatternObject;
  MA: PatternObject;
  MI: PatternObject;
  MN: PatternObject;
  MS: PatternObject;
  MO: PatternObject;
  MT: PatternObject;
  NE: PatternObject;
  NV: PatternObject;
  NH: PatternObject;
  NJ: PatternObject;
  NM: PatternObject;
  NY: PatternObject;
  NC: PatternObject;
  ND: PatternObject;
  OH: PatternObject;
  OK: PatternObject;
  OR: PatternObject;
  PA: PatternObject;
  RI: PatternObject;
  SC: PatternObject;
  SD: PatternObject;
  TN: PatternObject;
  TX: PatternObject;
  UT: PatternObject;
  VT: PatternObject;
  VA: PatternObject;
  WA: PatternObject;
  WV: PatternObject;
  WI: PatternObject;
  WY: PatternObject;
}

export type MatchedStates = { [state: string]: string[] };

