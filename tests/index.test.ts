import { validateLicense } from '../src/index';  // Adjust this path as needed

describe("validateLicense", () => {
    test("returns true for valid Alabama licenses", () => {
        expect(validateLicense("Alabama", "12345678")).toBe(true);
    });

    test("returns false for invalid Alabama licenses", () => {
        expect(validateLicense("Alabama", "123456789")).toBe(false);  // More than 8 digits
        expect(validateLicense("Alabama", "ABC12345")).toBe(false);   // Contains non-numeric characters
    });

    test("returns true for valid Alaska licenses", () => {
        expect(validateLicense("Alaska", "1234567")).toBe(true);
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
        expect(validateLicense("California", "A1234567")).toBe(true);
    });

    test("returns false for invalid California licenses", () => {
        expect(validateLicense("California", "12345678")).toBe(false);
        expect(validateLicense("California", "A123456")).toBe(false);
    });

    test("returns true for valid Colorado licenses", () => {
        expect(validateLicense("Colorado", "123456789")).toBe(true);
        expect(validateLicense("Colorado", "A1234")).toBe(true);
        expect(validateLicense("Colorado", "AB123")).toBe(true);
    });

    test("returns false for invalid Colorado licenses", () => {
        expect(validateLicense("Colorado", "12345678")).toBe(false);
        expect(validateLicense("Colorado", "A123")).toBe(false);
        expect(validateLicense("Colorado", "ABC123")).toBe(false);
    });

    test("returns true for valid Florida licenses", () => {
        expect(validateLicense("Florida", "A123456789012")).toBe(true);
    });

    test("returns false for invalid Florida licenses", () => {
        expect(validateLicense("Florida", "1234567890123")).toBe(false);
        expect(validateLicense("Florida", "A12345678901")).toBe(false);
    });

    test("returns true for valid Georgia licenses", () => {
        expect(validateLicense("Georgia", "1234567")).toBe(true);
        expect(validateLicense("Georgia", "123456789")).toBe(true);
    });

    test("returns false for invalid Georgia licenses", () => {
        expect(validateLicense("Georgia", "123456")).toBe(false);
        expect(validateLicense("Georgia", "1234567890")).toBe(false);
    });

    test("returns true for valid Hawaii licenses", () => {
        expect(validateLicense("Hawaii", "A12345678")).toBe(true);
        expect(validateLicense("Hawaii", "123456789")).toBe(true);
    });

    test("returns false for invalid Hawaii licenses", () => {
        expect(validateLicense("Hawaii", "A1234567")).toBe(false);
        expect(validateLicense("Hawaii", "12345678")).toBe(false);
    });

    test("returns true for valid Idaho licenses", () => {
        expect(validateLicense("Idaho", "AB123456C")).toBe(true);
        expect(validateLicense("Idaho", "123456789")).toBe(true);
    });

    test("returns false for invalid Idaho licenses", () => {
        expect(validateLicense("Idaho", "AB123456")).toBe(false);
        expect(validateLicense("Idaho", "AB12345678C")).toBe(false);
        expect(validateLicense("Idaho", "12345678")).toBe(false);
    });

    test("returns true for valid Illinois licenses", () => {
        expect(validateLicense("Illinois", "A12345678901")).toBe(true);
        expect(validateLicense("Illinois", "A123456789012")).toBe(true);
    });

    test("returns false for invalid Illinois licenses", () => {
        expect(validateLicense("Illinois", "A123456789")).toBe(false);
        expect(validateLicense("Illinois", "A1234567890123")).toBe(false);
    });

    test("returns true for valid Indiana licenses", () => {
        expect(validateLicense("Indiana", "A123456789")).toBe(true);
        expect(validateLicense("Indiana", "123456789")).toBe(true);
        expect(validateLicense("Indiana", "1234567890")).toBe(true);
    });

    test("returns false for invalid Indiana licenses", () => {
        expect(validateLicense("Indiana", "A12345678")).toBe(false);
        expect(validateLicense("Indiana", "12345678")).toBe(false);
        expect(validateLicense("Indiana", "12345678901")).toBe(false);
    });

    test("returns true for valid Iowa licenses", () => {
        expect(validateLicense("Iowa", "123456789")).toBe(true);
        expect(validateLicense("Iowa", "123AB4567")).toBe(true);
    });

    test("returns false for invalid Iowa licenses", () => {
        expect(validateLicense("Iowa", "12345678")).toBe(false);
        expect(validateLicense("Iowa", "12AB34567")).toBe(false);
    });

    test("returns true for valid Kansas licenses", () => {
        expect(validateLicense("Kansas", "A1B2C")).toBe(true);
        expect(validateLicense("Kansas", "A12345678")).toBe(true);
        expect(validateLicense("Kansas", "123456789")).toBe(true);
    });

    test("returns false for invalid Kansas licenses", () => {
        expect(validateLicense("Kansas", "A1B2")).toBe(false);
        expect(validateLicense("Kansas", "A1234567")).toBe(false);
        expect(validateLicense("Kansas", "12345678")).toBe(false);
    });

    test("returns true for valid Kentucky licenses", () => {
        expect(validateLicense("Kentucky", "A12345678")).toBe(true);
        expect(validateLicense("Kentucky", "A123456789")).toBe(true);
        expect(validateLicense("Kentucky", "123456789")).toBe(true);
    });

    test("returns false for invalid Kentucky licenses", () => {
        expect(validateLicense("Kentucky", "A1234567")).toBe(false);
        expect(validateLicense("Kentucky", "12345678")).toBe(false);
    });

    test("returns true for valid Louisiana licenses", () => {
        expect(validateLicense("Louisiana", "1234567")).toBe(true);
        expect(validateLicense("Louisiana", "123456789")).toBe(true);
    });

    test("returns false for invalid Louisiana licenses", () => {
        expect(validateLicense("Louisiana", "123456")).toBe(false);
        expect(validateLicense("Louisiana", "1234567890")).toBe(false);
    });

    test("returns true for valid Maine licenses", () => {
        expect(validateLicense("Maine", "1234567")).toBe(true);
        expect(validateLicense("Maine", "12345678")).toBe(true);
        expect(validateLicense("Maine", "1234567A")).toBe(true);
    });

    test("returns false for invalid Maine licenses", () => {
        expect(validateLicense("Maine", "123456")).toBe(false);
        expect(validateLicense("Maine", "123456789")).toBe(false);
        expect(validateLicense("Maine", "123456A")).toBe(false);
    });

    test("returns true for valid Maryland licenses", () => {
        expect(validateLicense("Maryland", "A123456789012")).toBe(true);
    });

    test("returns false for invalid Maryland licenses", () => {
        expect(validateLicense("Maryland", "1234567890123")).toBe(false);
        expect(validateLicense("Maryland", "A12345678901")).toBe(false);
    });

    test("returns true for valid Massachusetts licenses", () => {
        expect(validateLicense("Massachusetts", "A12345678")).toBe(true);
        expect(validateLicense("Massachusetts", "123456789")).toBe(true);
    });

    test("returns false for invalid Massachusetts licenses", () => {
        expect(validateLicense("Massachusetts", "A1234567")).toBe(false);
        expect(validateLicense("Massachusetts", "12345678")).toBe(false);
    });

    test("returns true for valid Michigan licenses", () => {
        expect(validateLicense("Michigan", "A1234567890")).toBe(true);
        expect(validateLicense("Michigan", "A123456789012")).toBe(true);
    });

    test("returns false for invalid Michigan licenses", () => {
        expect(validateLicense("Michigan", "A123456789")).toBe(false);
        expect(validateLicense("Michigan", "A12345678901")).toBe(false);
    });

    test("returns true for valid Minnesota licenses", () => {
        expect(validateLicense("Minnesota", "A123456789012")).toBe(true);
    });

    test("returns false for invalid Minnesota licenses", () => {
        expect(validateLicense("Minnesota", "A12345678901")).toBe(false);
        expect(validateLicense("Minnesota", "A123456789013")).toBe(false);
    });

    test("returns true for valid Mississippi licenses", () => {
        expect(validateLicense("Mississippi", "123456789")).toBe(true);
    });

    test("returns false for invalid Mississippi licenses", () => {
        expect(validateLicense("Mississippi", "12345678")).toBe(false);
        expect(validateLicense("Mississippi", "1234567890")).toBe(false);
    });

    test("returns true for valid Missouri licenses", () => {
        expect(validateLicense("Missouri", "123A456789")).toBe(true);
        expect(validateLicense("Missouri", "A12345")).toBe(true);
        expect(validateLicense("Missouri", "A123456R")).toBe(true);
        expect(validateLicense("Missouri", "12345678AB")).toBe(true);
        expect(validateLicense("Missouri", "123456789A")).toBe(true);
        expect(validateLicense("Missouri", "123456789")).toBe(true);
    });

    test("returns false for invalid Missouri licenses", () => {
        expect(validateLicense("Missouri", "1234A56789")).toBe(false);
        expect(validateLicense("Missouri", "A1234")).toBe(false);
        expect(validateLicense("Missouri", "A1234567R")).toBe(false);
        expect(validateLicense("Missouri", "1234567AB")).toBe(false);
        expect(validateLicense("Missouri", "12345678A")).toBe(false);
        expect(validateLicense("Missouri", "12345678")).toBe(false);
    });

    test("returns true for valid Montana licenses", () => {
        expect(validateLicense("Montana", "A12345678")).toBe(true);
        expect(validateLicense("Montana", "123456789")).toBe(true);
        expect(validateLicense("Montana", "1234567890123")).toBe(true);
        expect(validateLicense("Montana", "12345678901234")).toBe(true);
    });

    test("returns false for invalid Montana licenses", () => {
        expect(validateLicense("Montana", "A1234567")).toBe(false);
        expect(validateLicense("Montana", "12345678")).toBe(false);
        expect(validateLicense("Montana", "123456789012")).toBe(false);
        expect(validateLicense("Montana", "123456789012345")).toBe(false);
    });

    test("returns true for valid Nebraska licenses", () => {
        expect(validateLicense("Nebraska", "A123456")).toBe(true);
        expect(validateLicense("Nebraska", "A1234567")).toBe(true);
        expect(validateLicense("Nebraska", "A12345678")).toBe(true);
    });

    test("returns false for invalid Nebraska licenses", () => {
        expect(validateLicense("Nebraska", "A12345")).toBe(false);
        expect(validateLicense("Nebraska", "A123456789")).toBe(false);
    });

    test("returns true for valid Nevada licenses", () => {
        expect(validateLicense("Nevada", "123456789")).toBe(true);
        expect(validateLicense("Nevada", "1234567890")).toBe(true);
        expect(validateLicense("Nevada", "123456789012")).toBe(true);
        expect(validateLicense("Nevada", "X12345678")).toBe(true);
    });

    test("returns false for invalid Nevada licenses", () => {
        expect(validateLicense("Nevada", "12345678")).toBe(false);
        expect(validateLicense("Nevada", "12345678901")).toBe(false);
        expect(validateLicense("Nevada", "1234567890123")).toBe(false);
        expect(validateLicense("Nevada", "X1234567")).toBe(false);
    });

    test("returns true for valid New Hampshire licenses", () => {
        expect(validateLicense("New Hampshire", "12ABC12345")).toBe(true);
    });

    test("returns false for invalid New Hampshire licenses", () => {
        expect(validateLicense("New Hampshire", "1ABC12345")).toBe(false);
        expect(validateLicense("New Hampshire", "123ABC12345")).toBe(false);
    });

    test("returns true for valid New Jersey licenses", () => {
        expect(validateLicense("New Jersey", "A12345678901234")).toBe(true);
    });

    test("returns false for invalid New Jersey licenses", () => {
        expect(validateLicense("New Jersey", "A1234567890123")).toBe(false);
        expect(validateLicense("New Jersey", "A123456789012345")).toBe(false);
    });

    test("returns true for valid New Mexico licenses", () => {
        expect(validateLicense("New Mexico", "12345678")).toBe(true);
        expect(validateLicense("New Mexico", "123456789")).toBe(true);
    });

    test("returns false for invalid New Mexico licenses", () => {
        expect(validateLicense("New Mexico", "1234567")).toBe(false);
        expect(validateLicense("New Mexico", "1234567890")).toBe(false);
    });

    test("returns true for valid New York licenses", () => {
        expect(validateLicense("New York", "A1234567")).toBe(true);
        expect(validateLicense("New York", "A123456789012345678")).toBe(true);
        expect(validateLicense("New York", "12345678")).toBe(true);
        expect(validateLicense("New York", "123456789")).toBe(true);
        expect(validateLicense("New York", "1234567890123456")).toBe(true);
        expect(validateLicense("New York", "ABCDEFGH")).toBe(true);
    });

    test("returns false for invalid New York licenses", () => {
        expect(validateLicense("New York", "A123456")).toBe(false);
        expect(validateLicense("New York", "A1234567890123456790")).toBe(false);
        expect(validateLicense("New York", "1234567")).toBe(false);
        expect(validateLicense("New York", "1234567890")).toBe(false);
        expect(validateLicense("New York", "123456789012345")).toBe(false);
        expect(validateLicense("New York", "ABCDEFG")).toBe(false);
    });

    test("returns true for valid North Carolina licenses", () => {
        expect(validateLicense("North Carolina", "123")).toBe(true);
        expect(validateLicense("North Carolina", "123456789012")).toBe(true);
    });

    test("returns false for invalid North Carolina licenses", () => {
        expect(validateLicense("North Carolina", "12")).toBe(false);
        expect(validateLicense("North Carolina", "1234567890123")).toBe(false);
    });

    test("returns true for valid North Dakota licenses", () => {
        expect(validateLicense("North Dakota", "ABC123456")).toBe(true);
        expect(validateLicense("North Dakota", "123456789")).toBe(true);
    });

    test("returns false for invalid North Dakota licenses", () => {
        expect(validateLicense("North Dakota", "AB1234567")).toBe(false);
        expect(validateLicense("North Dakota", "12345678")).toBe(false);
    });

    test("returns true for valid Ohio licenses", () => {
        expect(validateLicense("Ohio", "A1234")).toBe(true);
        expect(validateLicense("Ohio", "A12345678")).toBe(true);
        expect(validateLicense("Ohio", "AB123")).toBe(true);
        expect(validateLicense("Ohio", "AB1234567")).toBe(true);
        expect(validateLicense("Ohio", "12345678")).toBe(true);
    });

    test("returns false for invalid Ohio licenses", () => {
        expect(validateLicense("Ohio", "A123")).toBe(false);
        expect(validateLicense("Ohio", "A123456789")).toBe(false);
        expect(validateLicense("Ohio", "AB12")).toBe(false);
        expect(validateLicense("Ohio", "AB12345678")).toBe(false);
        expect(validateLicense("Ohio", "1234567")).toBe(false);
    });

    test("returns true for valid Oklahoma licenses", () => {
        expect(validateLicense("Oklahoma", "A123456789")).toBe(true);
        expect(validateLicense("Oklahoma", "123456789")).toBe(true);
    });

    test("returns false for invalid Oklahoma licenses", () => {
        expect(validateLicense("Oklahoma", "A12345678")).toBe(false);
        expect(validateLicense("Oklahoma", "12345678")).toBe(false);
    });

    test("returns true for valid Oregon licenses", () => {
        expect(validateLicense("Oregon", "123")).toBe(true);
        expect(validateLicense("Oregon", "123456789")).toBe(true);
    });

    test("returns false for invalid Oregon licenses", () => {
        expect(validateLicense("Oregon", "12")).toBe(false);
        expect(validateLicense("Oregon", "1234567890")).toBe(false);
    });

    test("returns true for valid Pennsylvania licenses", () => {
        expect(validateLicense("Pennsylvania", "12345678")).toBe(true);
    });

    test("returns false for invalid Pennsylvania licenses", () => {
        expect(validateLicense("Pennsylvania", "1234567")).toBe(false);
        expect(validateLicense("Pennsylvania", "123456789")).toBe(false);
    });

    test("returns true for valid Rhode Island licenses", () => {
        expect(validateLicense("Rhode Island", "1234567")).toBe(true);
        expect(validateLicense("Rhode Island", "A123456")).toBe(true);
    });

    test("returns false for invalid Rhode Island licenses", () => {
        expect(validateLicense("Rhode Island", "123456")).toBe(false);
        expect(validateLicense("Rhode Island", "A12345")).toBe(false);
    });

    test("returns true for valid South Carolina licenses", () => {
        expect(validateLicense("South Carolina", "12345")).toBe(true);
        expect(validateLicense("South Carolina", "12345678901")).toBe(true);
    });

    test("returns false for invalid South Carolina licenses", () => {
        expect(validateLicense("South Carolina", "1234")).toBe(false);
        expect(validateLicense("South Carolina", "123456789012")).toBe(false);
    });

    test("returns true for valid South Dakota licenses", () => {
        expect(validateLicense("South Dakota", "123456")).toBe(true);
        expect(validateLicense("South Dakota", "1234567890")).toBe(true);
        expect(validateLicense("South Dakota", "123456789012")).toBe(true);
    });

    test("returns false for invalid South Dakota licenses", () => {
        expect(validateLicense("South Dakota", "12345")).toBe(false);
        expect(validateLicense("South Dakota", "12345678901")).toBe(false);
        expect(validateLicense("South Dakota", "1234567890123")).toBe(false);
    });

    test("returns true for valid Tennessee licenses", () => {
        expect(validateLicense("Tennessee", "1234567")).toBe(true);
        expect(validateLicense("Tennessee", "123456789")).toBe(true);
    });

    test("returns false for invalid Tennessee licenses", () => {
        expect(validateLicense("Tennessee", "123456")).toBe(false);
        expect(validateLicense("Tennessee", "1234567890")).toBe(false);
    });

    test("returns true for valid Texas licenses", () => {
        expect(validateLicense("Texas", "1234567")).toBe(true);
        expect(validateLicense("Texas", "12345678")).toBe(true);
    });

    test("returns false for invalid Texas licenses", () => {
        expect(validateLicense("Texas", "123456")).toBe(false);
        expect(validateLicense("Texas", "123456789")).toBe(false);
    });

    test("returns true for valid Utah licenses", () => {
        expect(validateLicense("Utah", "1234")).toBe(true);
        expect(validateLicense("Utah", "1234567890")).toBe(true);
    });

    test("returns false for invalid Utah licenses", () => {
        expect(validateLicense("Utah", "123")).toBe(false);
        expect(validateLicense("Utah", "12345678901")).toBe(false);
    });

    test("returns true for valid Vermont licenses", () => {
        expect(validateLicense("Vermont", "12345678")).toBe(true);
        expect(validateLicense("Vermont", "1234567A")).toBe(true);
    });

    test("returns false for invalid Vermont licenses", () => {
        expect(validateLicense("Vermont", "1234567")).toBe(false);
        expect(validateLicense("Vermont", "123456789")).toBe(false);
        expect(validateLicense("Vermont", "12345678A")).toBe(false);
    });

    test("returns true for valid Virginia licenses", () => {
        expect(validateLicense("Virginia", "A12345678")).toBe(true);
        expect(validateLicense("Virginia", "A1234567890")).toBe(true);
        expect(validateLicense("Virginia", "123456789")).toBe(true);
    });

    test("returns false for invalid Virginia licenses", () => {
        expect(validateLicense("Virginia", "A123456789")).toBe(false);
        expect(validateLicense("Virginia", "12345678901")).toBe(false);
    });

    test("returns true for valid Washington licenses", () => {
        expect(validateLicense("Washington", "ABCDE12")).toBe(true);
        expect(validateLicense("Washington", "ABCD123")).toBe(true);
        expect(validateLicense("Washington", "ABC1234")).toBe(true);
        expect(validateLicense("Washington", "AB12345")).toBe(true);
    });

    test("returns false for invalid Washington licenses", () => {
        expect(validateLicense("Washington", "ABCD1234")).toBe(false);
        expect(validateLicense("Washington", "ABCDE123")).toBe(false);
        expect(validateLicense("Washington", "AB1234")).toBe(false);
    });

    test("returns true for valid West Virginia licenses", () => {
        expect(validateLicense("West Virginia", "1234567")).toBe(true);
        expect(validateLicense("West Virginia", "AB1234")).toBe(true);
        expect(validateLicense("West Virginia", "ABCD12")).toBe(true);
    });

    test("returns false for invalid West Virginia licenses", () => {
        expect(validateLicense("West Virginia", "123456")).toBe(false);
        expect(validateLicense("West Virginia", "ABCD123")).toBe(false);
        expect(validateLicense("West Virginia", "ABCDE12")).toBe(false);
    });

    test("returns true for valid Wisconsin licenses", () => {
        expect(validateLicense("Wisconsin", "A1234567890123")).toBe(true);
    });

    test("returns false for invalid Wisconsin licenses", () => {
        expect(validateLicense("Wisconsin", "A123456789012")).toBe(false);
        expect(validateLicense("Wisconsin", "A12345678901234")).toBe(false);
    });

    test("returns true for valid Wyoming licenses", () => {
        expect(validateLicense("Wyoming", "123456789")).toBe(true);
        expect(validateLicense("Wyoming", "1234567890")).toBe(true);
    });

    test("returns false for invalid Wyoming licenses", () => {
        expect(validateLicense("Wyoming", "12345678")).toBe(false);
        expect(validateLicense("Wyoming", "12345678901")).toBe(false);
    });
});
