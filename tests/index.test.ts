import { validateLicense } from '../src/index';  // Adjust this path as needed

describe("validateLicense", () => {
    test("returns true for valid Alabama licenses", () => {
        expect(validateLicense("Alabama", "12345678")).toBe(true); // 1-8 digits
    });

    test("returns false for invalid Alabama licenses", () => {
        expect(validateLicense("Alabama", "123456789")).toBe(false);  // More than 8 digits
        expect(validateLicense("Alabama", "ABC12345")).toBe(false);   // Contains non-numeric characters
    });

    test("returns true for valid Alaska licenses", () => {
        expect(validateLicense("Alaska", "1234567")).toBe(true); // 1-7 digits
    });

    test("returns false for invalid Alaska licenses", () => {
        expect(validateLicense("Alaska", "12345678")).toBe(false);  // More than 7 digits
        expect(validateLicense("Alaska", "ABC1234")).toBe(false);   // Contains non-numeric characters
    });

    test("returns true for valid Arizona licenses", () => {
        expect(validateLicense("Arizona", "A12345678")).toBe(true);  // 1 alpha + 8 numeric
        expect(validateLicense("Arizona", "123456789")).toBe(true);  // 9 numeric
    });

    test("returns false for invalid Arizona licenses", () => {
        expect(validateLicense("Arizona", "AB12345678")).toBe(false);  // More than 1 alpha
        expect(validateLicense("Arizona", "12345678")).toBe(false);    // Less than 9 numeric
    });

    test("returns true for valid California licenses", () => {
        expect(validateLicense("California", "A1234567")).toBe(true); // 1 alpha + 7 numeric
    });

    test("returns false for invalid California licenses", () => {
        expect(validateLicense("California", "12345678")).toBe(false); // No alpha
        expect(validateLicense("California", "A123456")).toBe(false); // Less than 7 numeric
        expect(validateLicense("California", "A123456789")).toBe(false); // More than 7 numeric
    });

    test("returns true for valid Colorado licenses", () => {
        expect(validateLicense("Colorado", "123456789")).toBe(true); // 9 numeric
        expect(validateLicense("Colorado", "A1234")).toBe(true); // 1 Alpha + 3-6 Numeric
        expect(validateLicense("Colorado", "AB123")).toBe(true); // 2 Alpha + 2-5 Numeric
    });

    test("returns false for invalid Colorado licenses", () => {
        expect(validateLicense("Colorado", "12345678")).toBe(false); // Less than 9 numeric
        expect(validateLicense("Colorado", "ABC123")).toBe(false); // More than 2 alpha
        expect(validateLicense("Colorado", "A1234567")).toBe(false); // More than 6 numeric
        expect(validateLicense("Colorado", "AC123456")).toBe(false); // More than 5 numeric
    });

    test("returns true for valid Connecticut licenses", () => {
        expect(validateLicense("Connecticut", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid Connecticut licenses", () => {
        expect(validateLicense("Connecticut", "12345678")).toBe(false); // Less than 9 numeric
        expect(validateLicense("Connecticut", "1234567890")).toBe(false); // More than 9 numeric
        expect(validateLicense("Connecticut", "A12345678")).toBe(false); // Alpha
    });

    test("returns true for valid Delaware licenses", () => {
        expect(validateLicense("Delaware", "1234567")).toBe(true); // 1-7 digits
    });

    test("returns false for invalid Delaware licenses", () => {
        expect(validateLicense("Delaware", "A1234567")).toBe(false); // Alpha
        expect(validateLicense("Delaware", "12345678")).toBe(false); // More than 7 digits
    });

    test("returns true for valid District of Columbia licenses", () => {
        expect(validateLicense("District of Columbia", "1234567")).toBe(true); // 7 digits
        expect(validateLicense("District of Columbia", "123456789")).toBe(true); // 9 digits
    });

    test("returns false for invalid District of Columbia licenses", () => {
        expect(validateLicense("District of Columbia", "12345678")).toBe(false); // 8 digits
        expect(validateLicense("District of Columbia", "1234567890")).toBe(false); // 10 digits
        expect(validateLicense("District of Columbia", "A12345678")).toBe(false); // Alpha
    });


    test("returns true for valid Florida licenses", () => {
        expect(validateLicense("Florida", "A123456789012")).toBe(true); // 1 alpha + 12 numeric
    });

    test("returns false for invalid Florida licenses", () => {
        expect(validateLicense("Florida", "123456789012")).toBe(false); // No alpha
        expect(validateLicense("Florida", "A12345678901")).toBe(false); // Less than 12 numeric
        expect(validateLicense("Florida", "A12345678901123456")).toBe(false); // More than 12 numeric
        expect(validateLicense("Florida", "AB123456789012")).toBe(false); // More than 12 numeric
    });

    test("returns true for valid Georgia licenses", () => {
        expect(validateLicense("Georgia", "1234567")).toBe(true); // 7 digits
        expect(validateLicense("Georgia", "12345678")).toBe(true); // 8 digits
        expect(validateLicense("Georgia", "123456789")).toBe(true); // 9 digits
    });

    test("returns false for invalid Georgia licenses", () => {
        expect(validateLicense("Georgia", "123456")).toBe(false); // Less than 7 digits
        expect(validateLicense("Georgia", "1234567890")).toBe(false); // More than 9 digits
        expect(validateLicense("Georgia", "A234567890")).toBe(false); // Alpha
    });

    test("returns true for valid Hawaii licenses", () => {
        expect(validateLicense("Hawaii", "A12345678")).toBe(true); // 1 alpha + 8 numeric
        expect(validateLicense("Hawaii", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid Hawaii licenses", () => {
        expect(validateLicense("Hawaii", "A1234567")).toBe(false); // Less than 8 numeric
        expect(validateLicense("Hawaii", "A123456789")).toBe(false); // More than 8 numeric
        expect(validateLicense("Hawaii", "12345678")).toBe(false); // No alpha + not 9 numeric
        expect(validateLicense("Hawaii", "1234567890")).toBe(false); // More than 9 numeric
    });

    test("returns true for valid Idaho licenses", () => {
        expect(validateLicense("Idaho", "AB123456C")).toBe(true); // 2 alpha + 6 numeric + 1 alpha
        expect(validateLicense("Idaho", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid Idaho licenses", () => {
        expect(validateLicense("Idaho", "AB123456")).toBe(false); // No ending alpha 
        expect(validateLicense("Idaho", "AB12345678C")).toBe(false); // More than 9 numeric in middle
        expect(validateLicense("Idaho", "12345678")).toBe(false); // No alpha + not 9 numeric
        expect(validateLicense("Idaho", "1234567890")).toBe(false); // More than 9 numeric
    });

    test("returns true for valid Illinois licenses", () => {
        expect(validateLicense("Illinois", "A12345678901")).toBe(true);
        expect(validateLicense("Illinois", "A123456789012")).toBe(true);
    });

    test("returns false for invalid Illinois licenses", () => {
        expect(validateLicense("Illinois", "A123456789")).toBe(false); // Less than 11 numeric
        expect(validateLicense("Illinois", "A1234567890123")).toBe(false); // More than 12 numeric
        expect(validateLicense("Illinois", "1234567890123")).toBe(false); // No alpha
    });

    test("returns true for valid Indiana licenses", () => {
        expect(validateLicense("Indiana", "A123456789")).toBe(true); // 1 alpha + 9 numeric
        expect(validateLicense("Indiana", "123456789")).toBe(true); // 9 numeric
        expect(validateLicense("Indiana", "1234567890")).toBe(true); // 10 numeric
    });

    test("returns false for invalid Indiana licenses", () => {
        expect(validateLicense("Indiana", "A12345678")).toBe(false); // 1 alpha + Less than 9 numeric
        expect(validateLicense("Indiana", "A1234567890")).toBe(false); // 1 alpha + More than 9 numeric
        expect(validateLicense("Indiana", "12345678")).toBe(false); // Less than 9 numeric
        expect(validateLicense("Indiana", "12345678901")).toBe(false); // More than 10 numeric
    });

    test("returns true for valid Iowa licenses", () => {
        expect(validateLicense("Iowa", "123456789")).toBe(true); // 9 numeric
        expect(validateLicense("Iowa", "123AB4567")).toBe(true); // 3 numeric + 2 alpha + 4 numeric
    });

    test("returns false for invalid Iowa licenses", () => {
        expect(validateLicense("Iowa", "12345678")).toBe(false); // Less than 9 numeric
        expect(validateLicense("Iowa", "1234567890")).toBe(false); // More than 9 numeric
        expect(validateLicense("Iowa", "12AB4567")).toBe(false); // Less than 3 prefixed
        expect(validateLicense("Iowa", "123AB567")).toBe(false); // Less than 4 suffixed
        expect(validateLicense("Iowa", "123AB839567")).toBe(false); // More than 4 suffixed
        expect(validateLicense("Iowa", "1234AB8397")).toBe(false); // More than 3 prefixed
    });

    test("returns true for valid Kansas licenses", () => {
        expect(validateLicense("Kansas", "A1B2C")).toBe(true); // 1 alpha + 1 numeric + 1 alpha + 1 numeric + 1 alpha
        expect(validateLicense("Kansas", "A12345678")).toBe(true); // 1 alpha + 8 numeric
        expect(validateLicense("Kansas", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid Kansas licenses", () => {
        expect(validateLicense("Kansas", "A1B2")).toBe(false); // Less than 5 characters
        expect(validateLicense("Kansas", "1A2B3")).toBe(false); // No alpha
        expect(validateLicense("Kansas", "ABCDE")).toBe(false); // No numeric
        expect(validateLicense("Kansas", "A1234567")).toBe(false); // Less than 8 numeric
        expect(validateLicense("Kansas", "12345678")).toBe(false); // No alpha + not 9 numeric
        expect(validateLicense("Kansas", "1234567890")).toBe(false); // More than 9 numeric
    });

    test("returns true for valid Kentucky licenses", () => {
        expect(validateLicense("Kentucky", "A12345678")).toBe(true); // 1 alpha + 8 numeric
        expect(validateLicense("Kentucky", "A123456789")).toBe(true); // 1 alpha + 9 numeric
        expect(validateLicense("Kentucky", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid Kentucky licenses", () => {
        expect(validateLicense("Kentucky", "A1234567")).toBe(false); // Less than 8 numeric
        expect(validateLicense("Kentucky", "A1234567890")).toBe(false); // More than 9 numeric
        expect(validateLicense("Kentucky", "12345678")).toBe(false); // No alpha + not 9 numeric
        expect(validateLicense("Kentucky", "1234567890")).toBe(false); // More than 9 numeric
        expect(validateLicense("Kentucky", "AB12345678")).toBe(false); // More than one alpha
    });

    test("returns true for valid Louisiana licenses", () => {
        expect(validateLicense("Louisiana", "1")).toBe(true); // 1 digit
        expect(validateLicense("Louisiana", "12")).toBe(true); // 2 digits
        expect(validateLicense("Louisiana", "123")).toBe(true); // 3 digits
        expect(validateLicense("Louisiana", "1234")).toBe(true); // 4 digits
        expect(validateLicense("Louisiana", "12345")).toBe(true); // 5 digits
        expect(validateLicense("Louisiana", "123456")).toBe(true); // 6 digits
        expect(validateLicense("Louisiana", "1234567")).toBe(true); // 7 digits
        expect(validateLicense("Louisiana", "12345678")).toBe(true); // 8 digits
        expect(validateLicense("Louisiana", "123456789")).toBe(true); // 9 digits
    });
    test("returns false for invalid Louisiana licenses", () => {
        expect(validateLicense("Louisiana", "A1234567")).toBe(false); // Alpha
        expect(validateLicense("Louisiana", "1234567890")).toBe(false); // More than 9 digits
    });

    test("returns true for valid Maine licenses", () => {
        expect(validateLicense("Maine", "1234567")).toBe(true); // 7 digits
        expect(validateLicense("Maine", "12345678")).toBe(true); // 8 digits
        expect(validateLicense("Maine", "1234567A")).toBe(true); // 7 digits + 1 alpha
    });

    test("returns false for invalid Maine licenses", () => {
        expect(validateLicense("Maine", "123456")).toBe(false); // Less than 7 digits
        expect(validateLicense("Maine", "123456789")).toBe(false); // More than 8 digits
        expect(validateLicense("Maine", "123456A")).toBe(false); // Less than 7 digits + 1 alpha
        expect(validateLicense("Maine", "12345678A")).toBe(false); // More than 8 digits + 1 alpha
    });

    test("returns true for valid Maryland licenses", () => {
        expect(validateLicense("Maryland", "A123456789012")).toBe(true); // 1 alpha + 12 numeric
    });

    test("returns false for invalid Maryland licenses", () => {
        expect(validateLicense("Maryland", "123456789012")).toBe(false); // No alpha
        expect(validateLicense("Maryland", "A1234567890123")).toBe(false); // More than 12 numeric
        expect(validateLicense("Maryland", "A12345678901")).toBe(false); // Less than 12 digits
    });

    test("returns true for valid Massachusetts licenses", () => {
        expect(validateLicense("Massachusetts", "A12345678")).toBe(true); // 1 alpha + 8 numeric
        expect(validateLicense("Massachusetts", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid Massachusetts licenses", () => {
        expect(validateLicense("Massachusetts", "A1234567")).toBe(false); // Less than 8 numeric
        expect(validateLicense("Massachusetts", "A123456789")).toBe(false); // More than 8 numeric
        expect(validateLicense("Massachusetts", "12345678")).toBe(false); // No alpha + not 9 numeric
        expect(validateLicense("Massachusetts", "1234567890")).toBe(false); // More than 9 numeric
    });

    test("returns true for valid Michigan licenses", () => {
        expect(validateLicense("Michigan", "A1234567890")).toBe(true); // 1 alpha + 10 numeric
        expect(validateLicense("Michigan", "A123456789012")).toBe(true); // 1 alpha + 12 numeric
    });

    test("returns false for invalid Michigan licenses", () => {
        expect(validateLicense("Michigan", "A123456789")).toBe(false); // Less than 10 numeric
        expect(validateLicense("Michigan", "A12345678901")).toBe(false); // 11 numeric
        expect(validateLicense("Michigan", "A1234567890123")).toBe(false); // More than 12 numeric
        expect(validateLicense("Michigan", "1234567890123")).toBe(false); // No alpha
    });

    test("returns true for valid Minnesota licenses", () => {
        expect(validateLicense("Minnesota", "A123456789012")).toBe(true); // 1 alpha + 12 numeric
    });

    test("returns false for invalid Minnesota licenses", () => {
        expect(validateLicense("Minnesota", "A12345678901")).toBe(false); // Less than 12 numeric
        expect(validateLicense("Minnesota", "A1234567890134")).toBe(false); // More than 12 numeric
        expect(validateLicense("Minnesota", "AB123456789013")).toBe(false); // More than 1 alpha
        expect(validateLicense("Minnesota", "123456789013")).toBe(false); // No alpha
    });

    test("returns true for valid Mississippi licenses", () => {
        expect(validateLicense("Mississippi", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid Mississippi licenses", () => {
        expect(validateLicense("Mississippi", "12345678")).toBe(false); // Less than 9 numeric
        expect(validateLicense("Mississippi", "1234567890")).toBe(false); // More than 9 numeric
        expect(validateLicense("Mississippi", "A1234567890")).toBe(false); // Alpha
    });

    test("returns true for valid Missouri licenses", () => {
        expect(validateLicense("Missouri", "123A456789")).toBe(true); // 3 numeric + 1 alpha + 6 numeric
        expect(validateLicense("Missouri", "A12345")).toBe(true); // 1 alpha + 5 numeric
        expect(validateLicense("Missouri", "A123456789")).toBe(true); // 1 alpha + 9 numeric
        expect(validateLicense("Missouri", "A123456R")).toBe(true); // 1 alpha + 6 numeric + R
        expect(validateLicense("Missouri", "12345678AB")).toBe(true); // 8 numeric + 2 alpha
        expect(validateLicense("Missouri", "123456789A")).toBe(true); // 9 numeric + 1 alpha
        expect(validateLicense("Missouri", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid Missouri licenses", () => {
        expect(validateLicense("Missouri", "123AB12345")).toBe(false); // 2 Two alpha in the middle
        expect(validateLicense("Missouri", "A1234")).toBe(false); // Less than 5 numeric
        expect(validateLicense("Missouri", "A1234567R")).toBe(false); // More than 6 numeric + R
        expect(validateLicense("Missouri", "A123456S")).toBe(false); // More than 6 numeric + S
        expect(validateLicense("Missouri", "12345678A")).toBe(false); // More than 8 numeric + 1 alpha
        expect(validateLicense("Missouri", "1234567A")).toBe(false); // Less than 8 numeric + 1 alpha
        expect(validateLicense("Missouri", "1234567AB")).toBe(false); // Less than 8 numeric + 2 alpha
        expect(validateLicense("Missouri", "123456789AB")).toBe(false); // More than 9 numeric + 2 alpha
        expect(validateLicense("Missouri", "12345678")).toBe(false); // No alpha + not 9 numeric
        expect(validateLicense("Missouri", "1234567890")).toBe(false); // More than 9 numeric
    });

    test("returns true for valid Montana licenses", () => {
        expect(validateLicense("Montana", "A12345678")).toBe(true); // 1 alpha + 8 numeric
        expect(validateLicense("Montana", "123456789")).toBe(true); // 9 numeric
        expect(validateLicense("Montana", "1234567890123")).toBe(true); // 13 numeric
        expect(validateLicense("Montana", "12345678901234")).toBe(true); // 14 numeric
    });

    test("returns false for invalid Montana licenses", () => {
        expect(validateLicense("Montana", "A1234567")).toBe(false); // Less than 8 numeric
        expect(validateLicense("Montana", "A123456789")).toBe(false); // More than 8 numeric
        expect(validateLicense("Montana", "12345678")).toBe(false); // No alpha + not 9 numeric
        expect(validateLicense("Montana", "1234567891")).toBe(false); // 10 numeric
        expect(validateLicense("Montana", "12345678912")).toBe(false); // 11 numeric
        expect(validateLicense("Montana", "123456789123")).toBe(false); // 12 numeric
        expect(validateLicense("Montana", "123456789012345")).toBe(false); // More than 14 numeric
    });

    test("returns true for valid Nebraska licenses", () => {
        expect(validateLicense("Nebraska", "A123456")).toBe(true); // 1 alpha + 6 numeric
        expect(validateLicense("Nebraska", "A1234567")).toBe(true); // 1 alpha + 7 numeric
        expect(validateLicense("Nebraska", "A12345678")).toBe(true); // 1 alpha + 8 numeric
    });

    test("returns false for invalid Nebraska licenses", () => {
        expect(validateLicense("Nebraska", "A12345")).toBe(false); // Less than 6 numeric
        expect(validateLicense("Nebraska", "A123456789")).toBe(false); // More than 8 numeric
        expect(validateLicense("Nebraska", "123456789")).toBe(false); //
    });

    test("returns true for valid Nevada licenses", () => {
        expect(validateLicense("Nevada", "123456789")).toBe(true); // 9 numeric
        expect(validateLicense("Nevada", "1234567890")).toBe(true); // 10 numeric
        expect(validateLicense("Nevada", "123456789012")).toBe(true); // 12 numeric
        expect(validateLicense("Nevada", "X12345678")).toBe(true); // 1 alpha + 8 numeric
    });

    test("returns false for invalid Nevada licenses", () => {
        expect(validateLicense("Nevada", "12345678")).toBe(false); // Less than 9 numeric
        expect(validateLicense("Nevada", "12345678901")).toBe(false); // 11 numeric
        expect(validateLicense("Nevada", "1234567890123")).toBe(false); // More than 12 numeric
        expect(validateLicense("Nevada", "X1234567")).toBe(false); // 1 alpha + Less than 8 numeric
        expect(validateLicense("Nevada", "X123456789")).toBe(false); // 1 alpha + More than 8 numeric
    });

    test("returns true for valid New Hampshire licenses", () => {
        expect(validateLicense("New Hampshire", "12ABC12345")).toBe(true); // 2 numeric + 3 alpha + 5 numeric
    });

    test("returns false for invalid New Hampshire licenses", () => {
        expect(validateLicense("New Hampshire", "1ABC12345")).toBe(false); // Less than 2 numeric
        expect(validateLicense("New Hampshire", "123ABC12345")).toBe(false); // More than 3 alpha
        expect(validateLicense("New Hampshire", "12ABC1234")).toBe(false); // Less than 5 numeric
        expect(validateLicense("New Hampshire", "12ABC123456")).toBe(false); // More than 5 numeric
        expect(validateLicense("New Hampshire", "12ABCD12345")).toBe(false); // More than 3 alpha
    });

    test("returns true for valid New Jersey licenses", () => {
        expect(validateLicense("New Jersey", "A12345678901234")).toBe(true); // 1 alpha + 14 numeric
    });

    test("returns false for invalid New Jersey licenses", () => {
        expect(validateLicense("New Jersey", "A1234567890123")).toBe(false); // Less than 14 numeric
        expect(validateLicense("New Jersey", "A123456789012345")).toBe(false); // More than 14 numeric
        expect(validateLicense("New Jersey", "12345678901234A")).toBe(false); // 1 alpha at the end
    });

    test("returns true for valid New Mexico licenses", () => {
        expect(validateLicense("New Mexico", "12345678")).toBe(true); // 8 numeric
        expect(validateLicense("New Mexico", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid New Mexico licenses", () => {
        expect(validateLicense("New Mexico", "1234567")).toBe(false); // Less than 8 numeric
        expect(validateLicense("New Mexico", "1234567890")).toBe(false); // More than 9 numeric
    });

    test("returns true for valid New York licenses", () => {
        expect(validateLicense("New York", "A1234567")).toBe(true); // 1 alpha + 7 numeric
        expect(validateLicense("New York", "A123456789012345678")).toBe(true); // 1 alpha + 18 numeric
        expect(validateLicense("New York", "12345678")).toBe(true); // 8 numeric
        expect(validateLicense("New York", "123456789")).toBe(true); // 9 numeric
        expect(validateLicense("New York", "1234567890123456")).toBe(true); // 16 numeric
        expect(validateLicense("New York", "ABCDEFGH")).toBe(true); // 8 alpha
    });

    test("returns false for invalid New York licenses", () => {
        expect(validateLicense("New York", "A123456")).toBe(false); // Less than 7 numeric
        expect(validateLicense("New York", "A1234567890123456790")).toBe(false); // More than 18 numeric
        expect(validateLicense("New York", "A12345678901234567")).toBe(false);  // Less than 18 numeric
        expect(validateLicense("New York", "1234567")).toBe(false); // Less than 8 numeric
        expect(validateLicense("New York", "1234567890")).toBe(false); // More than 9 numeric
        expect(validateLicense("New York", "123456789012345")).toBe(false); // Less than 16 numeric
        expect(validateLicense("New York", "12345678901234512")).toBe(false); // More than 16 numeric
        expect(validateLicense("New York", "ABCDEFG")).toBe(false); // Less than 8 alpha
        expect(validateLicense("New York", "ABCDEFGAHS")).toBe(false); // More than 8 alpha
    });

    test("returns true for valid North Carolina licenses", () => {
        expect(validateLicense("North Carolina", "123")).toBe(true); // 3 numeric
        expect(validateLicense("North Carolina", "123456789012")).toBe(true); // 12 numeric
    });

    test("returns false for invalid North Carolina licenses", () => {
        expect(validateLicense("North Carolina", "A12")).toBe(false); // Alpha
        expect(validateLicense("North Carolina", "1234567890123")).toBe(false); // More than 12 numeric
    });

    test("returns true for valid North Dakota licenses", () => {
        expect(validateLicense("North Dakota", "ABC123456")).toBe(true); // 3 alpha + 6 numeric
        expect(validateLicense("North Dakota", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid North Dakota licenses", () => {
        expect(validateLicense("North Dakota", "AB1234567")).toBe(false); // Less than 3 alpha
        expect(validateLicense("North Dakota", "ABC123456A")).toBe(false); // Wrong alpha placement
        expect(validateLicense("North Dakota", "12345678")).toBe(false); // Less than 9 numeric
        expect(validateLicense("North Dakota", "1234567890")).toBe(false); // More than 9 numeric
    });

    test("returns true for valid Ohio licenses", () => {
        expect(validateLicense("Ohio", "A1234")).toBe(true); // 1 alpha + 4 numeric
        expect(validateLicense("Ohio", "A12345678")).toBe(true); // 1 alpha + 8 numeric
        expect(validateLicense("Ohio", "A123456")).toBe(true); // 1 alpha + 6 numeric
        expect(validateLicense("Ohio", "AB123")).toBe(true); // 2 alpha + 3 numeric
        expect(validateLicense("Ohio", "AB1234567")).toBe(true); // 2 alpha + 7 numeric
        expect(validateLicense("Ohio", "AB12345")).toBe(true); // 2 alpha + 5 numeric
        expect(validateLicense("Ohio", "12345678")).toBe(true); // 8 numeric
    });

    test("returns false for invalid Ohio licenses", () => {
        expect(validateLicense("Ohio", "A123")).toBe(false); // Less than 4 numeric
        expect(validateLicense("Ohio", "A123456789")).toBe(false); // More than 8 numeric
        expect(validateLicense("Ohio", "AB12")).toBe(false); // Less than 3 numeric
        expect(validateLicense("Ohio", "AB12345678")).toBe(false); // More than 7 numeric
        expect(validateLicense("Ohio", "1234567")).toBe(false); // Less than 8 numeric
        expect(validateLicense("Ohio", "123456789")).toBe(false); // More than 8 numeric
        expect(validateLicense("Ohio", "123A56789")).toBe(false); // Alpha in the middle
    });

    test("returns true for valid Oklahoma licenses", () => {
        expect(validateLicense("Oklahoma", "A123456789")).toBe(true); // 1 alpha + 9 numeric
        expect(validateLicense("Oklahoma", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid Oklahoma licenses", () => {
        expect(validateLicense("Oklahoma", "A12345678")).toBe(false); // 1 alpha + Less than 9 numeric
        expect(validateLicense("Oklahoma", "A1234567890")).toBe(false); // 1 alpha + More than 9 numeric
        expect(validateLicense("Oklahoma", "12345678")).toBe(false); // Less than 9 numeric
        expect(validateLicense("Oklahoma", "1234567890")).toBe(false); // More than 9 numeric
        expect(validateLicense("Oklahoma", "123456789A")).toBe(false); // 9 numeric + 1 alpha
    });

    test("returns true for valid Oregon licenses", () => {
        expect(validateLicense("Oregon", "123")).toBe(true); // 3 numeric
        expect(validateLicense("Oregon", "123456")).toBe(true); // 6 numeric
        expect(validateLicense("Oregon", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid Oregon licenses", () => {
        expect(validateLicense("Oregon", "A12")).toBe(false); // Alpha
        expect(validateLicense("Oregon", "1234567890")).toBe(false);  // More than 9 numeric
        expect(validateLicense("Oregon", "1234567890")).toBe(false);  // More than 9 numeric
    });

    test("returns true for valid Pennsylvania licenses", () => {
        expect(validateLicense("Pennsylvania", "12345678")).toBe(true); // 8 numeric
    });

    test("returns false for invalid Pennsylvania licenses", () => {
        expect(validateLicense("Pennsylvania", "1234567")).toBe(false); // Less than 8 numeric
        expect(validateLicense("Pennsylvania", "123456789")).toBe(false); // More than 8 numeric
    });

    test("returns true for valid Rhode Island licenses", () => {
        expect(validateLicense("Rhode Island", "1234567")).toBe(true); // 7 numeric
        expect(validateLicense("Rhode Island", "A123456")).toBe(true); // 1 alpha + 6 numeric
    });

    test("returns false for invalid Rhode Island licenses", () => {
        expect(validateLicense("Rhode Island", "123456")).toBe(false); // Less than 7 numeric
        expect(validateLicense("Rhode Island", "12345678")).toBe(false); // More than 7 numeric
        expect(validateLicense("Rhode Island", "A12345")).toBe(false); // Less than 6 numeric
        expect(validateLicense("Rhode Island", "A1234567")).toBe(false); // More than 6 numeric
    });

    test("returns true for valid South Carolina licenses", () => {
        expect(validateLicense("South Carolina", "12345")).toBe(true); // 5 numeric
        expect(validateLicense("South Carolina", "1234567")).toBe(true); // 7 numeric
        expect(validateLicense("South Carolina", "12345678901")).toBe(true); // 11 numeric
    });

    test("returns false for invalid South Carolina licenses", () => {
        expect(validateLicense("South Carolina", "1234")).toBe(false); // Less than 5 numeric
        expect(validateLicense("South Carolina", "123456789012")).toBe(false); // More than 11 numeric
    });

    test("returns true for valid South Dakota licenses", () => {
        expect(validateLicense("South Dakota", "123456")).toBe(true); // 6 numeric
        expect(validateLicense("South Dakota", "12345678")).toBe(true); // 8 numeric
        expect(validateLicense("South Dakota", "1234567890")).toBe(true); // 10 numeric
        expect(validateLicense("South Dakota", "123456789012")).toBe(true); // 12 numeric
    });

    test("returns false for invalid South Dakota licenses", () => {
        expect(validateLicense("South Dakota", "12345")).toBe(false); // Less than 6 numeric
        expect(validateLicense("South Dakota", "12345678901")).toBe(false); // 11 numeric
        expect(validateLicense("South Dakota", "1234567890123")).toBe(false); // More than 12 numeric
    });

    test("returns true for valid Tennessee licenses", () => {
        expect(validateLicense("Tennessee", "1234567")).toBe(true); // 7 numeric
        expect(validateLicense("Tennessee", "12345678")).toBe(true); // 8 numeric
        expect(validateLicense("Tennessee", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid Tennessee licenses", () => {
        expect(validateLicense("Tennessee", "123456")).toBe(false); // Less than 7 numeric
        expect(validateLicense("Tennessee", "1234567890")).toBe(false); // More than 9 numeric
        expect(validateLicense("Tennessee", "123456789A")).toBe(false); // 9 numeric + 1 alpha
        expect(validateLicense("Tennessee", "A123456789")).toBe(false); // 1 alpha + 9 numeric
    });

    test("returns true for valid Texas licenses", () => {
        expect(validateLicense("Texas", "1234567")).toBe(true); // 7 numeric
        expect(validateLicense("Texas", "12345678")).toBe(true); // 8 numeric
    });

    test("returns false for invalid Texas licenses", () => {
        expect(validateLicense("Texas", "123456")).toBe(false); // Less than 7 numeric
        expect(validateLicense("Texas", "123456789")).toBe(false); // More than 8 numeric
        expect(validateLicense("Texas", "12345678A")).toBe(false); // 8 numeric + 1 alpha
    });

    test("returns true for valid Utah licenses", () => {
        expect(validateLicense("Utah", "1234")).toBe(true); // 4 numeric
        expect(validateLicense("Utah", "1234567")).toBe(true); // 7 numeric
        expect(validateLicense("Utah", "1234567890")).toBe(true); // 10 numeric
    });

    test("returns false for invalid Utah licenses", () => {
        expect(validateLicense("Utah", "123")).toBe(false); // Less than 4 numeric
        expect(validateLicense("Utah", "123ABFD")).toBe(false); // Alpha
        expect(validateLicense("Utah", "12345678901")).toBe(false); // More than 10 numeric
    });

    test("returns true for valid Vermont licenses", () => {
        expect(validateLicense("Vermont", "12345678")).toBe(true); // 8 numeric
        expect(validateLicense("Vermont", "1234567A")).toBe(true);// 7 numeric + A
    });

    test("returns false for invalid Vermont licenses", () => {
        expect(validateLicense("Vermont", "1234567")).toBe(false); // Less than 8 numeric
        expect(validateLicense("Vermont", "123456789")).toBe(false); // More than 8 numeric
        expect(validateLicense("Vermont", "12345678A")).toBe(false); // 8 numeric + 1 alpha
        expect(validateLicense("Vermont", "123456A")).toBe(false); // 6 numeric + 1 alpha
        expect(validateLicense("Vermont", "A1234567")).toBe(false); // 1 alpha + 7 numeric
        expect(validateLicense("Vermont", "1234567B")).toBe(false);// 7 numeric + B
    });

    test("returns true for valid Virginia licenses", () => {
        expect(validateLicense("Virginia", "A12345678")).toBe(true); // 1 alpha + 8 numeric
        expect(validateLicense("Virginia", "A12345678901")).toBe(true); // 1 alpha + 11 numeric
        expect(validateLicense("Virginia", "A1234567890")).toBe(true); // 1 alpha + 10 numeric
        expect(validateLicense("Virginia", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid Virginia licenses", () => {
        expect(validateLicense("Virginia", "A123456789124")).toBe(false); // More than 11 numeric
        expect(validateLicense("Virginia", "1234567890")).toBe(false); // More than 9 numeric
        expect(validateLicense("Virginia", "12345678")).toBe(false); // No alpha + not 9 numeric
        expect(validateLicense("Virginia", "A1234567")).toBe(false); // Less than 8 numeric
    });

    test("returns true for valid Wisconsin licenses", () => {
        expect(validateLicense("Wisconsin", "A1234567890123")).toBe(true); // 1 alpha + 13 numeric
    });

    test("returns false for invalid Wisconsin licenses", () => {
        expect(validateLicense("Wisconsin", "A123456789012")).toBe(false); // Less than 13 numeric
        expect(validateLicense("Wisconsin", "A12345678901234")).toBe(false); // More than 13 numeric
        expect(validateLicense("Wisconsin", "1234567890123")).toBe(false); // No alpha
        expect(validateLicense("Wisconsin", "123456A7890123")).toBe(false); // Alpha in the middle
    });

    test("returns true for valid Wyoming licenses", () => {
        expect(validateLicense("Wyoming", "123456789")).toBe(true); // 9 numeric
        expect(validateLicense("Wyoming", "1234567890")).toBe(true); // 10 numeric
    });

    test("returns false for invalid Wyoming licenses", () => {
        expect(validateLicense("Wyoming", "12345678")).toBe(false); // Less than 9 numeric
        expect(validateLicense("Wyoming", "12345678901")).toBe(false); // More than 10 numeric
        expect(validateLicense("Wyoming", "A12345678901")).toBe(false); // Alpha
    });

    test("returns true for valid Washington licenses", () => {
        expect(validateLicense("Washington", "ABCD12345678")).toBe(true); // 4 alpha + 8 numeric
        expect(validateLicense("Washington", "EE1B39423jdg")).toBe(true); // 2 alpha + 8 numeric + 1 alpha
        expect(validateLicense("Washington", "ABCGHGF28kd0")).toBe(true); // 5 alpha + 5 numeric + 1 alpha
    });

    test("returns false for invalid Washington licenses", () => {
        expect(validateLicense("Washington", "ABCD1234")).toBe(false); // Less than 8 numeric
        expect(validateLicense("Washington", "ABCDE123")).toBe(false); // Less than 9 numeric
        expect(validateLicense("Washington", "ABCDEFGH12349")).toBe(false); // More than 8 numeric 
        expect(validateLicense("Washington", "1234ABCDEFGH")).toBe(false); // More than 4 alpha
    });

    test("returns true for valid West Virginia licenses", () => {
        expect(validateLicense("West Virginia", "AB12345")).toBe(true); // 2 alpha + 5 numeric
        expect(validateLicense("West Virginia", "AB123456")).toBe(true); // 2 alpha + 6 numeric
        expect(validateLicense("West Virginia", "A12345")).toBe(true); // 1 alpha + 5 numeric
        expect(validateLicense("West Virginia", "A123456")).toBe(true); // 1 alpha + 6 numeric
        expect(validateLicense("West Virginia", "1234567")).toBe(true); // 7 numeric
    });

    test("returns false for invalid West Virginia licenses", () => {
        expect(validateLicense("West Virginia", "123456")).toBe(false); // Less than 7 numeric
        expect(validateLicense("West Virginia", "12345678")).toBe(false); // More than 7 numeric
        expect(validateLicense("West Virginia", "ABCD123")).toBe(false); // More than 2 alpha
        expect(validateLicense("West Virginia", "ABCDE12")).toBe(false); // More than 1 alpha
        expect(validateLicense("West Virginia", "A12B456")).toBe(false); // Alpha in the middle
        expect(validateLicense("West Virginia", "12B456")).toBe(false); // Alpha in the middle
    });

});
