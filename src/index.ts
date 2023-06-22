import { LicensePatterns } from "./types";

const patterns: LicensePatterns = {
  "AL": [/^\d{1,8}$/],
  "AK": [/^\d{1,7}$/],
  "AZ": [/^[A-Za-z]\d{8}$/, /^\d{9}$/],
  "AR": [/^\d{4,9}$/],
  "CA": [/^[A-Za-z]\d{7}$/],
  "CO": [/^\d{9}$/, /^[A-Za-z]\d{3,6}$/, /^[A-Za-z]{2}\d{2,5}$/],
  "CT": [/^\d{9}$/],
  "DE": [/^\d{1,7}$/],
  "DC": [/^\d{7}$/, /^\d{9}$/],
  "FL": [/^[A-Za-z]\d{12}$/],
  "GA": [/^\d{7,9}$/],
  "HI": [/^[A-Za-z]\d{8}$/, /^\d{9}$/],
  "ID": [/^[A-Za-z]{2}\d{6}[A-Za-z]$/, /^\d{9}$/],
  "IL": [/^[A-Za-z]\d{11,12}$/],
  "IN": [/^[A-Za-z]\d{9}$/, /^\d{9,10}$/],
  "IA": [/^\d{9}$/, /^\d{3}[A-Za-z]{2}\d{4}$/],
  "KS": [/^[A-Za-z]\d[A-Za-z]\d[A-Za-z]$/, /^[A-Za-z]\d{8}$/, /^\d{9}$/],
  "KY": [/^[A-Za-z]\d{8}$/, /^[A-Za-z]\d{9}$/, /^\d{9}$/],
  "LA": [/^\d{1,9}$/],
  "ME": [/^\d{7}$/, /^\d{7}[A-Za-z]$/, /^\d{8}$/],
  "MD": [/^[A-Za-z]\d{12}$/],
  "MA": [/^[A-Za-z]\d{8}$/, /^\d{9}$/],
  "MI": [/^[A-Za-z]\d{10}$/, /^[A-Za-z]\d{12}$/],
  "MN": [/^[A-Za-z]\d{12}$/],
  "MS": [/^\d{9}$/],
  "MO": [/^\d{3}[A-Za-z]\d{6}$/, /^[A-Za-z]\d{5,9}$/, /^[A-Za-z]\d{6}R$/, /^\d{8}[A-Za-z]{2}$/, /^\d{9}[A-Za-z]$/, /^\d{9}$/],
  "MT": [/^[A-Za-z]\d{8}$/, /^\d{9}$/, /^\d{13,14}$/],
  "NE": [/^[A-Za-z]\d{6,8}$/],
  "NV": [/^\d{9,10}$/, /^\d{12}$/, /^X\d{8}$/],
  "NH": [/^\d{2}[A-Za-z]{3}\d{5}$/],
  "NJ": [/^[A-Za-z]\d{14}$/],
  "NM": [/^\d{8,9}$/],
  "NY": [/^[A-Za-z]\d{7}$/, /^[A-Za-z]\d{18}$/, /^\d{8,9}$/, /^\d{16}$/, /^[A-Za-z]{8}$/],
  "NC": [/^\d{1,12}$/],
  "ND": [/^[A-Za-z]{3}\d{6}$/, /^\d{9}$/],
  "OH": [/^[A-Za-z]\d{4,8}$/, /^[A-Za-z]{2}\d{3,7}$/, /^\d{8}$/],
  "OK": [/^[A-Za-z]\d{9}$/, /^\d{9}$/],
  "OR": [/^\d{1,9}$/],
  "PA": [/^\d{8}$/],
  "RI": [/^\d{7}$/, /^[A-Za-z]\d{6}$/],
  "SC": [/^\d{5,11}$/],
  "SD": [/^\d{6,10}$/, /^\d{12}$/],
  "TN": [/^\d{7,9}$/],
  "TX": [/^\d{7,8}$/],
  "UT": [/^\d{4,10}$/],
  "VT": [/^\d{8}$/, /^\d{7}A$/],
  "VA": [/^[A-Za-z]\d{8,11}$/, /^\d{9}$/],
  "WA": [/^(?=.{12}$)[A-Za-z]{1,7}[A-Za-z0-9]{5,11}$/],
  "WV": [/^\d{7}$/, /^[A-Za-z]{1,2}\d{5,6}$/],
  "WI": [/^[A-Za-z]\d{13}$/],
  "WY": [/^\d{9,10}$/]
};

export const validateLicense = (state: string, license: string): boolean => {
  if (!(state in patterns))
    throw new Error(`State ${state} not supported.`);

  for (let pattern of patterns[state]) {
    if (pattern.test(license))
      return true;
  }

  return false;
}
