import { LicensePatterns } from "./types";

const patterns: LicensePatterns = {
  "Alabama": [/^\d{1,8}$/],
  "Alaska": [/^\d{1,7}$/],
  "Arizona": [/^[A-Za-z]\d{8}$/, /^\d{9}$/],
  "Arkansas": [/^\d{4,9}$/],
  "California": [/^[A-Za-z]\d{7}$/],
  "Colorado": [/^\d{9}$/, /^[A-Za-z]\d{3,6}$/, /^[A-Za-z]{2}\d{2,5}$/],
  "Connecticut": [/^\d{9}$/],
  "Delaware": [/^\d{1,7}$/],
  "District of Columbia": [/^\d{7}$/, /^\d{9}$/],
  "Florida": [/^[A-Za-z]\d{12}$/],
  "Georgia": [/^\d{7,9}$/],
  "Hawaii": [/^[A-Za-z]\d{8}$/, /^\d{9}$/],
  "Idaho": [/^[A-Za-z]{2}\d{6}[A-Za-z]$/, /^\d{9}$/],
  "Illinois": [/^[A-Za-z]\d{11,12}$/],
  "Indiana": [/^[A-Za-z]\d{9}$/, /^\d{9,10}$/],
  "Iowa": [/^\d{9}$/, /^\d{3}[A-Za-z]{2}\d{4}$/],
  "Kansas": [/^[A-Za-z]\d[A-Za-z]\d[A-Za-z]$/, /^[A-Za-z]\d{8}$/, /^\d{9}$/],
  "Kentucky": [/^[A-Za-z]\d{8}$/, /^[A-Za-z]\d{9}$/, /^\d{9}$/],
  "Louisiana": [/^\d{1,9}$/],
  "Maine": [/^\d{7}$/, /^\d{7}[A-Za-z]$/, /^\d{8}$/],
  "Maryland": [/^[A-Za-z]\d{12}$/],
  "Massachusetts": [/^[A-Za-z]\d{8}$/, /^\d{9}$/],
  "Michigan": [/^[A-Za-z]\d{10}$/, /^[A-Za-z]\d{12}$/],
  "Minnesota": [/^[A-Za-z]\d{12}$/],
  "Mississippi": [/^\d{9}$/],
  "Missouri": [/^\d{3}[A-Za-z]\d{6}$/, /^[A-Za-z]\d{5,9}$/, /^[A-Za-z]\d{6}R$/, /^\d{8}[A-Za-z]{2}$/, /^\d{9}[A-Za-z]$/, /^\d{9}$/],
  "Montana": [/^[A-Za-z]\d{8}$/, /^\d{9}$/, /^\d{13,14}$/],
  "Nebraska": [/^[A-Za-z]\d{6,8}$/],
  "Nevada": [/^\d{9,10}$/, /^\d{12}$/, /^X\d{8}$/],
  "New Hampshire": [/^\d{2}[A-Za-z]{3}\d{5}$/],
  "New Jersey": [/^[A-Za-z]\d{14}$/],
  "New Mexico": [/^\d{8,9}$/],
  "New York": [/^[A-Za-z]\d{7}$/, /^[A-Za-z]\d{18}$/, /^\d{8,9}$/, /^\d{16}$/, /^[A-Za-z]{8}$/],
  "North Carolina": [/^\d{1,12}$/],
  "North Dakota": [/^[A-Za-z]{3}\d{6}$/, /^\d{9}$/],
  "Ohio": [/^[A-Za-z]\d{4,8}$/, /^[A-Za-z]{2}\d{3,7}$/, /^\d{8}$/],
  "Oklahoma": [/^[A-Za-z]\d{9}$/, /^\d{9}$/],
  "Oregon": [/^\d{1,9}$/],
  "Pennsylvania": [/^\d{8}$/],
  "Rhode Island": [/^\d{7}$/, /^[A-Za-z]\d{6}$/],
  "South Carolina": [/^\d{5,11}$/],
  "South Dakota": [/^\d{6,10}$/, /^\d{12}$/],
  "Tennessee": [/^\d{7,9}$/],
  "Texas": [/^\d{7,8}$/],
  "Utah": [/^\d{4,10}$/],
  "Vermont": [/^\d{8}$/, /^\d{7}A$/],
  "Virginia": [/^[A-Za-z]\d{8,11}$/, /^\d{9}$/],
  "Washington": [/^[A-Za-z]{1,7}\w{5,11}$/],
  "West Virginia": [/^\d{7}$/, /^[A-Za-z]{1,2}\d{5,6}$/],
  "Wisconsin": [/^[A-Za-z]\d{13}$/],
  "Wyoming": [/^\d{9,10}$/]
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
