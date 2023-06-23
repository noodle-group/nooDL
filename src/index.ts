import { LicensePatterns, MatchedStates, State } from "./types";

const patterns: LicensePatterns = {
  "AL": {
    "numeric-1-to-8": /^\d{1,8}$/
  },
  "AK": {
    "numeric-1-to-7": /^\d{1,7}$/
  },
  "AZ": {
    "alpha-1-numeric-8": /^[A-Za-z]\d{8}$/,
    "numeric-9": /^\d{9}$/
  },
  "AR": {
    "numeric-4-to-9": /^\d{4,9}$/
  },
  "CA": {
    "alpha-1-numeric-7": /^[A-Za-z]\d{7}$/
  },
  "CO": {
    "numeric-9": /^\d{9}$/,
    "alpha-1-numeric-3-to-6": /^[A-Za-z]\d{3,6}$/,
    "alpha-2-numeric-2-to-5": /^[A-Za-z]{2}\d{2,5}$/
  },
  "CT": {
    "numeric-9": /^\d{9}$/
  },
  "DE": {
    "numeric-1-to-7": /^\d{1,7}$/
  },
  "DC": {
    "numeric-7": /^\d{7}$/,
    "numeric-9": /^\d{9}$/
  },
  "FL": {
    "alpha-1-numeric-12": /^[A-Za-z]\d{12}$/
  },
  "GA": {
    "numeric-7-to-9": /^\d{7,9}$/
  },
  "HI": {
    "alpha-1-numeric-8": /^[A-Za-z]\d{8}$/,
    "numeric-9": /^\d{9}$/
  },
  "ID": {
    "alpha-2-numeric-6-alpha-1": /^[A-Za-z]{2}\d{6}[A-Za-z]$/,
    "numeric-9": /^\d{9}$/
  },
  "IL": {
    "alpha-1-numeric-11-to-12": /^[A-Za-z]\d{11,12}$/
  },
  "IN": {
    "alpha-1-numeric-9": /^[A-Za-z]\d{9}$/,
    "numeric-9-to-10": /^\d{9,10}$/
  },
  "IA": {
    "numeric-9": /^\d{9}$/,
    "numeric-3-alpha-2-numeric-4": /^\d{3}[A-Za-z]{2}\d{4}$/
  },
  "KS": {
    "alpha-1-numeric-1-alpha-1-numeric-1-alpha-1": /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]$/,
    "alpha-1-numeric-8": /^[A-Za-z]\d{8}$/,
    "numeric-9": /^\d{9}$/
  },
  "KY": {
    "alpha-1-numeric-8": /^[A-Za-z]\d{8}$/,
    "alpha-1-numeric-9": /^[A-Za-z]\d{9}$/,
    "numeric-9": /^\d{9}$/
  },
  "LA": {
    "numeric-1-to-9": /^\d{1,9}$/
  },
  "ME": {
    "numeric-7": /^\d{7}$/,
    "numeric-7-alpha-1": /^\d{7}[A-Za-z]$/,
    "numeric-8": /^\d{8}$/
  },
  "MD": {
    "alpha-1-numeric-12": /^[A-Za-z]\d{12}$/
  },
  "MA": {
    "alpha-1-numeric-8": /^[A-Za-z]\d{8}$/,
    "numeric-9": /^\d{9}$/
  },
  "MI": {
    "alpha-1-numeric-10": /^[A-Za-z]\d{10}$/,
    "alpha-1-numeric-12": /^[A-Za-z]\d{12}$/
  },
  "MN": {
    "alpha-1-numeric-12": /^[A-Za-z]\d{12}$/
  },
  "MS": {
    "numeric-9": /^\d{9}$/
  },
  "MO": {
    "numeric-3-alpha-1-numeric-6": /^\d{3}[A-Za-z]\d{6}$/,
    "alpha-1-numeric-5-to-9": /^[A-Za-z]\d{5,9}$/,
    "alpha-1-numeric-6-suffix-r": /^[A-Za-z]\d{6}R$/,
    "numeric-8-alpha-2": /^\d{8}[A-Za-z]{2}$/,
    "numeric-9-alpha-1": /^\d{9}[A-Za-z]$/,
    "numeric-9": /^\d{9}$/
  },
  "MT": {
    "alpha-1-numeric-8": /^[A-Za-z]\d{8}$/,
    "numeric-9": /^\d{9}$/,
    "numeric-13-to-14": /^\d{13,14}$/
  },
  "NE": {
    "alpha-1-numeric-6-to-8": /^[A-Za-z]\d{6,8}$/
  },
  "NV": {
    "numeric-9-to-10": /^\d{9,10}$/,
    "numeric-12": /^\d{12}$/,
    "prefix-x-numeric-8": /^X\d{8}$/
  },
  "NH": {
    "numeric-2-alpha-3-numeric-5": /^\d{2}[A-Za-z]{3}\d{5}$/
  },
  "NJ": {
    "alpha-1-numeric-14": /^[A-Za-z]\d{14}$/
  },
  "NM": {
    "numeric-8-to-9": /^\d{8,9}$/
  },
  "NY": {
    "alpha-1-numeric-7": /^[A-Za-z]\d{7}$/,
    "alpha-1-numeric-18": /^[A-Za-z]\d{18}$/,
    "numeric-8-to-9": /^\d{8,9}$/,
    "numeric-16": /^\d{16}$/,
    "alpha-8": /^[A-Za-z]{8}$/
  },
  "NC": {
    "numeric-1-to-12": /^\d{1,12}$/
  },
  "ND": {
    "alpha-3-numeric-6": /^[A-Za-z]{3}\d{6}$/,
    "numeric-9": /^\d{9}$/
  },
  "OH": {
    "alpha-1-numeric-4-to-8": /^[A-Za-z]\d{4,8}$/,
    "alpha-2-numeric-3-to-7": /^[A-Za-z]{2}\d{3,7}$/,
    "numeric-8": /^\d{8}$/
  },
  "OK": {
    "alpha-1-numeric-9": /^[A-Za-z]\d{9}$/,
    "numeric-9": /^\d{9}$/
  },
  "OR": {
    "numeric-1-to-9": /^\d{1,9}$/
  },
  "PA": {
    "numeric-8": /^\d{8}$/
  },
  "RI": {
    "numeric-7": /^\d{7}$/,
    "alpha-1-numeric-6": /^[A-Za-z]\d{6}$/
  },
  "SC": {
    "numeric-5-to-11": /^\d{5,11}$/
  },
  "SD": {
    "numeric-6-to-10": /^\d{6,10}$/,
    "numeric-12": /^\d{12}$/
  },
  "TN": {
    "numeric-7-to-9": /^\d{7,9}$/
  },
  "TX": {
    "numeric-7-to-8": /^\d{7,8}$/
  },
  "UT": {
    "numeric-4-to-10": /^\d{4,10}$/
  },
  "VT": {
    "numeric-8": /^\d{8}$/,
    "numeric-7-suffix-a": /^\d{7}A$/
  },
  "VA": {
    "alpha-1-numeric-8-to-11": /^[A-Za-z]\d{8,11}$/,
    "numeric-9": /^\d{9}$/
  },
  "WA": {
    "alpha-1-to-7-numeric-alpha-5-to-11": /^(?=.{12}$)[A-Za-z]{1,7}[A-Za-z0-9]{5,11}$/
  },
  "WV": {
    "numeric-7": /^\d{7}$/,
    "alpha-1-to-2-numeric-5-to-6": /^[A-Za-z]{1,2}\d{5,6}$/
  },
  "WI": {
    "alpha-1-numeric-13": /^[A-Za-z]\d{13}$/
  },
  "WY": { "numeric-9-to-10": /^\d{9,10}$/ }
};


export const validateLicense = (state: State, license: string): string | null => {
  if (!(state in patterns))
    throw new Error(`State ${state} not supported.`);

  for (let patternName in patterns[state]) {
    let pattern = patterns[state][patternName];
    if (pattern.test(license))
      return patternName;
  }

  return null;
};

export const matchLicense = (license: string): MatchedStates => {
  let matched: MatchedStates = {};

  for (let state in patterns) {
    for (let patternName in patterns[state as State]) {
      let pattern = patterns[state as State][patternName];
      if (pattern.test(license)) {
        matched = {
          ...matched,
          [state]: [
            ...(matched[state] || []),
            patternName,
          ]
        }
      }
    }
  }

  return matched;
};
