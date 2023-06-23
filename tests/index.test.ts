import { matchLicense, validateLicense } from '../src/index';  // Adjust this path as needed

describe("validateLicense", () => {
    test("returns true for valid AL licenses", () => {
        expect(validateLicense("AL", "12345678")).toBe(true); // 1-8 digits
    });

    test("returns false for invalid AL licenses", () => {
        expect(validateLicense("AL", "123456789")).toBe(false);  // More than 8 digits
        expect(validateLicense("AL", "ABC12345")).toBe(false);   // Contains non-numeric characters
    });

    test("returns true for valid AK licenses", () => {
        expect(validateLicense("AK", "1234567")).toBe(true); // 1-7 digits
    });

    test("returns false for invalid AK licenses", () => {
        expect(validateLicense("AK", "12345678")).toBe(false);  // More than 7 digits
        expect(validateLicense("AK", "ABC1234")).toBe(false);   // Contains non-numeric characters
    });

    test("returns true for valid AR licenses", () => {
        expect(validateLicense("AR", "1234")).toBe(true); // 4 digits
        expect(validateLicense("AR", "12345")).toBe(true); // 5 digits
        expect(validateLicense("AR", "123456")).toBe(true); // 6 digits
        expect(validateLicense("AR", "1234567")).toBe(true); // 7 digits
        expect(validateLicense("AR", "12345678")).toBe(true); // 8 digits
        expect(validateLicense("AR", "123456789")).toBe(true); // 9 digits
    });

    test("returns false for invalid AR licenses", () => {
        expect(validateLicense("AR", "123")).toBe(false);  // Less than 4 digits
        expect(validateLicense("AR", "1234567890")).toBe(false);  // More than 9 digits
        expect(validateLicense("AR", "ABC1234")).toBe(false);  // Contains non-numeric characters
    });

    test("returns true for valid AZ licenses", () => {
        expect(validateLicense("AZ", "A12345678")).toBe(true);  // 1 alpha + 8 numeric
        expect(validateLicense("AZ", "123456789")).toBe(true);  // 9 numeric
    });

    test("returns false for invalid AZ licenses", () => {
        expect(validateLicense("AZ", "AB12345678")).toBe(false);  // More than 1 alpha
        expect(validateLicense("AZ", "12345678")).toBe(false);    // Less than 9 numeric
    });

    test("returns true for valid CA licenses", () => {
        expect(validateLicense("CA", "A1234567")).toBe(true); // 1 alpha + 7 numeric
    });

    test("returns false for invalid CA licenses", () => {
        expect(validateLicense("CA", "12345678")).toBe(false); // No alpha
        expect(validateLicense("CA", "A123456")).toBe(false); // Less than 7 numeric
        expect(validateLicense("CA", "A123456789")).toBe(false); // More than 7 numeric
    });

    test("returns true for valid CO licenses", () => {
        expect(validateLicense("CO", "123456789")).toBe(true); // 9 numeric
        expect(validateLicense("CO", "A1234")).toBe(true); // 1 Alpha + 3-6 Numeric
        expect(validateLicense("CO", "AB123")).toBe(true); // 2 Alpha + 2-5 Numeric
    });

    test("returns false for invalid CO licenses", () => {
        expect(validateLicense("CO", "12345678")).toBe(false); // Less than 9 numeric
        expect(validateLicense("CO", "ABC123")).toBe(false); // More than 2 alpha
        expect(validateLicense("CO", "A1234567")).toBe(false); // More than 6 numeric
        expect(validateLicense("CO", "AC123456")).toBe(false); // More than 5 numeric
    });

    test("returns true for valid CT licenses", () => {
        expect(validateLicense("CT", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid CT licenses", () => {
        expect(validateLicense("CT", "12345678")).toBe(false); // Less than 9 numeric
        expect(validateLicense("CT", "1234567890")).toBe(false); // More than 9 numeric
        expect(validateLicense("CT", "A12345678")).toBe(false); // Alpha
    });

    test("returns true for valid DE licenses", () => {
        expect(validateLicense("DE", "1234567")).toBe(true); // 1-7 digits
    });

    test("returns false for invalid DE licenses", () => {
        expect(validateLicense("DE", "A1234567")).toBe(false); // Alpha
        expect(validateLicense("DE", "12345678")).toBe(false); // More than 7 digits
    });

    test("returns true for valid DC licenses", () => {
        expect(validateLicense("DC", "1234567")).toBe(true); // 7 digits
        expect(validateLicense("DC", "123456789")).toBe(true); // 9 digits
    });

    test("returns false for invalid DC licenses", () => {
        expect(validateLicense("DC", "12345678")).toBe(false); // 8 digits
        expect(validateLicense("DC", "1234567890")).toBe(false); // 10 digits
        expect(validateLicense("DC", "A12345678")).toBe(false); // Alpha
    });


    test("returns true for valid FL licenses", () => {
        expect(validateLicense("FL", "A123456789012")).toBe(true); // 1 alpha + 12 numeric
    });

    test("returns false for invalid FL licenses", () => {
        expect(validateLicense("FL", "123456789012")).toBe(false); // No alpha
        expect(validateLicense("FL", "A12345678901")).toBe(false); // Less than 12 numeric
        expect(validateLicense("FL", "A12345678901123456")).toBe(false); // More than 12 numeric
        expect(validateLicense("FL", "AB123456789012")).toBe(false); // More than 12 numeric
    });

    test("returns true for valid GA licenses", () => {
        expect(validateLicense("GA", "1234567")).toBe(true); // 7 digits
        expect(validateLicense("GA", "12345678")).toBe(true); // 8 digits
        expect(validateLicense("GA", "123456789")).toBe(true); // 9 digits
    });

    test("returns false for invalid GA licenses", () => {
        expect(validateLicense("GA", "123456")).toBe(false); // Less than 7 digits
        expect(validateLicense("GA", "1234567890")).toBe(false); // More than 9 digits
        expect(validateLicense("GA", "A234567890")).toBe(false); // Alpha
    });

    test("returns true for valid HI licenses", () => {
        expect(validateLicense("HI", "A12345678")).toBe(true); // 1 alpha + 8 numeric
        expect(validateLicense("HI", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid HI licenses", () => {
        expect(validateLicense("HI", "A1234567")).toBe(false); // Less than 8 numeric
        expect(validateLicense("HI", "A123456789")).toBe(false); // More than 8 numeric
        expect(validateLicense("HI", "12345678")).toBe(false); // No alpha + not 9 numeric
        expect(validateLicense("HI", "1234567890")).toBe(false); // More than 9 numeric
    });

    test("returns true for valid ID licenses", () => {
        expect(validateLicense("ID", "AB123456C")).toBe(true); // 2 alpha + 6 numeric + 1 alpha
        expect(validateLicense("ID", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid ID licenses", () => {
        expect(validateLicense("ID", "AB123456")).toBe(false); // No ending alpha 
        expect(validateLicense("ID", "AB12345678C")).toBe(false); // More than 9 numeric in middle
        expect(validateLicense("ID", "12345678")).toBe(false); // No alpha + not 9 numeric
        expect(validateLicense("ID", "1234567890")).toBe(false); // More than 9 numeric
    });

    test("returns true for valid IL licenses", () => {
        expect(validateLicense("IL", "A12345678901")).toBe(true);
        expect(validateLicense("IL", "A123456789012")).toBe(true);
    });

    test("returns false for invalid IL licenses", () => {
        expect(validateLicense("IL", "A123456789")).toBe(false); // Less than 11 numeric
        expect(validateLicense("IL", "A1234567890123")).toBe(false); // More than 12 numeric
        expect(validateLicense("IL", "1234567890123")).toBe(false); // No alpha
    });

    test("returns true for valid IN licenses", () => {
        expect(validateLicense("IN", "A123456789")).toBe(true); // 1 alpha + 9 numeric
        expect(validateLicense("IN", "123456789")).toBe(true); // 9 numeric
        expect(validateLicense("IN", "1234567890")).toBe(true); // 10 numeric
    });

    test("returns false for invalid IN licenses", () => {
        expect(validateLicense("IN", "A12345678")).toBe(false); // 1 alpha + Less than 9 numeric
        expect(validateLicense("IN", "A1234567890")).toBe(false); // 1 alpha + More than 9 numeric
        expect(validateLicense("IN", "12345678")).toBe(false); // Less than 9 numeric
        expect(validateLicense("IN", "12345678901")).toBe(false); // More than 10 numeric
    });

    test("returns true for valid IA licenses", () => {
        expect(validateLicense("IA", "123456789")).toBe(true); // 9 numeric
        expect(validateLicense("IA", "123AB4567")).toBe(true); // 3 numeric + 2 alpha + 4 numeric
    });

    test("returns false for invalid IA licenses", () => {
        expect(validateLicense("IA", "12345678")).toBe(false); // Less than 9 numeric
        expect(validateLicense("IA", "1234567890")).toBe(false); // More than 9 numeric
        expect(validateLicense("IA", "12AB4567")).toBe(false); // Less than 3 prefixed
        expect(validateLicense("IA", "123AB567")).toBe(false); // Less than 4 suffixed
        expect(validateLicense("IA", "123AB839567")).toBe(false); // More than 4 suffixed
        expect(validateLicense("IA", "1234AB8397")).toBe(false); // More than 3 prefixed
    });

    test("returns true for valid KS licenses", () => {
        expect(validateLicense("KS", "A1B2C")).toBe(true); // 1 alpha + 1 numeric + 1 alpha + 1 numeric + 1 alpha
        expect(validateLicense("KS", "A12345678")).toBe(true); // 1 alpha + 8 numeric
        expect(validateLicense("KS", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid KS licenses", () => {
        expect(validateLicense("KS", "A1B2")).toBe(false); // Less than 5 characters
        expect(validateLicense("KS", "1A2B3")).toBe(false); // No alpha
        expect(validateLicense("KS", "ABCDE")).toBe(false); // No numeric
        expect(validateLicense("KS", "A1234567")).toBe(false); // Less than 8 numeric
        expect(validateLicense("KS", "12345678")).toBe(false); // No alpha + not 9 numeric
        expect(validateLicense("KS", "1234567890")).toBe(false); // More than 9 numeric
    });

    test("returns true for valid KY licenses", () => {
        expect(validateLicense("KY", "A12345678")).toBe(true); // 1 alpha + 8 numeric
        expect(validateLicense("KY", "A123456789")).toBe(true); // 1 alpha + 9 numeric
        expect(validateLicense("KY", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid KY licenses", () => {
        expect(validateLicense("KY", "A1234567")).toBe(false); // Less than 8 numeric
        expect(validateLicense("KY", "A1234567890")).toBe(false); // More than 9 numeric
        expect(validateLicense("KY", "12345678")).toBe(false); // No alpha + not 9 numeric
        expect(validateLicense("KY", "1234567890")).toBe(false); // More than 9 numeric
        expect(validateLicense("KY", "AB12345678")).toBe(false); // More than one alpha
    });

    test("returns true for valid LA licenses", () => {
        expect(validateLicense("LA", "1")).toBe(true); // 1 digit
        expect(validateLicense("LA", "12")).toBe(true); // 2 digits
        expect(validateLicense("LA", "123")).toBe(true); // 3 digits
        expect(validateLicense("LA", "1234")).toBe(true); // 4 digits
        expect(validateLicense("LA", "12345")).toBe(true); // 5 digits
        expect(validateLicense("LA", "123456")).toBe(true); // 6 digits
        expect(validateLicense("LA", "1234567")).toBe(true); // 7 digits
        expect(validateLicense("LA", "12345678")).toBe(true); // 8 digits
        expect(validateLicense("LA", "123456789")).toBe(true); // 9 digits
    });
    test("returns false for invalid LA licenses", () => {
        expect(validateLicense("LA", "A1234567")).toBe(false); // Alpha
        expect(validateLicense("LA", "1234567890")).toBe(false); // More than 9 digits
    });

    test("returns true for valid ME licenses", () => {
        expect(validateLicense("ME", "1234567")).toBe(true); // 7 digits
        expect(validateLicense("ME", "12345678")).toBe(true); // 8 digits
        expect(validateLicense("ME", "1234567A")).toBe(true); // 7 digits + 1 alpha
    });

    test("returns false for invalid ME licenses", () => {
        expect(validateLicense("ME", "123456")).toBe(false); // Less than 7 digits
        expect(validateLicense("ME", "123456789")).toBe(false); // More than 8 digits
        expect(validateLicense("ME", "123456A")).toBe(false); // Less than 7 digits + 1 alpha
        expect(validateLicense("ME", "12345678A")).toBe(false); // More than 8 digits + 1 alpha
    });

    test("returns true for valid MD licenses", () => {
        expect(validateLicense("MD", "A123456789012")).toBe(true); // 1 alpha + 12 numeric
    });

    test("returns false for invalid MD licenses", () => {
        expect(validateLicense("MD", "123456789012")).toBe(false); // No alpha
        expect(validateLicense("MD", "A1234567890123")).toBe(false); // More than 12 numeric
        expect(validateLicense("MD", "A12345678901")).toBe(false); // Less than 12 digits
    });

    test("returns true for valid MA licenses", () => {
        expect(validateLicense("MA", "A12345678")).toBe(true); // 1 alpha + 8 numeric
        expect(validateLicense("MA", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid MA licenses", () => {
        expect(validateLicense("MA", "A1234567")).toBe(false); // Less than 8 numeric
        expect(validateLicense("MA", "A123456789")).toBe(false); // More than 8 numeric
        expect(validateLicense("MA", "12345678")).toBe(false); // No alpha + not 9 numeric
        expect(validateLicense("MA", "1234567890")).toBe(false); // More than 9 numeric
    });

    test("returns true for valid MI licenses", () => {
        expect(validateLicense("MI", "A1234567890")).toBe(true); // 1 alpha + 10 numeric
        expect(validateLicense("MI", "A123456789012")).toBe(true); // 1 alpha + 12 numeric
    });

    test("returns false for invalid MI licenses", () => {
        expect(validateLicense("MI", "A123456789")).toBe(false); // Less than 10 numeric
        expect(validateLicense("MI", "A12345678901")).toBe(false); // 11 numeric
        expect(validateLicense("MI", "A1234567890123")).toBe(false); // More than 12 numeric
        expect(validateLicense("MI", "1234567890123")).toBe(false); // No alpha
    });

    test("returns true for valid MN licenses", () => {
        expect(validateLicense("MN", "A123456789012")).toBe(true); // 1 alpha + 12 numeric
    });

    test("returns false for invalid MN licenses", () => {
        expect(validateLicense("MN", "A12345678901")).toBe(false); // Less than 12 numeric
        expect(validateLicense("MN", "A1234567890134")).toBe(false); // More than 12 numeric
        expect(validateLicense("MN", "AB123456789013")).toBe(false); // More than 1 alpha
        expect(validateLicense("MN", "123456789013")).toBe(false); // No alpha
    });

    test("returns true for valid MS licenses", () => {
        expect(validateLicense("MS", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid MS licenses", () => {
        expect(validateLicense("MS", "12345678")).toBe(false); // Less than 9 numeric
        expect(validateLicense("MS", "1234567890")).toBe(false); // More than 9 numeric
        expect(validateLicense("MS", "A1234567890")).toBe(false); // Alpha
    });

    test("returns true for valid MO licenses", () => {
        expect(validateLicense("MO", "123A456789")).toBe(true); // 3 numeric + 1 alpha + 6 numeric
        expect(validateLicense("MO", "A12345")).toBe(true); // 1 alpha + 5 numeric
        expect(validateLicense("MO", "A123456789")).toBe(true); // 1 alpha + 9 numeric
        expect(validateLicense("MO", "A123456R")).toBe(true); // 1 alpha + 6 numeric + R
        expect(validateLicense("MO", "12345678AB")).toBe(true); // 8 numeric + 2 alpha
        expect(validateLicense("MO", "123456789A")).toBe(true); // 9 numeric + 1 alpha
        expect(validateLicense("MO", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid MO licenses", () => {
        expect(validateLicense("MO", "123AB12345")).toBe(false); // 2 Two alpha in the middle
        expect(validateLicense("MO", "A1234")).toBe(false); // Less than 5 numeric
        expect(validateLicense("MO", "A1234567R")).toBe(false); // More than 6 numeric + R
        expect(validateLicense("MO", "A123456S")).toBe(false); // More than 6 numeric + S
        expect(validateLicense("MO", "12345678A")).toBe(false); // More than 8 numeric + 1 alpha
        expect(validateLicense("MO", "1234567A")).toBe(false); // Less than 8 numeric + 1 alpha
        expect(validateLicense("MO", "1234567AB")).toBe(false); // Less than 8 numeric + 2 alpha
        expect(validateLicense("MO", "123456789AB")).toBe(false); // More than 9 numeric + 2 alpha
        expect(validateLicense("MO", "12345678")).toBe(false); // No alpha + not 9 numeric
        expect(validateLicense("MO", "1234567890")).toBe(false); // More than 9 numeric
    });

    test("returns true for valid MT licenses", () => {
        expect(validateLicense("MT", "A12345678")).toBe(true); // 1 alpha + 8 numeric
        expect(validateLicense("MT", "123456789")).toBe(true); // 9 numeric
        expect(validateLicense("MT", "1234567890123")).toBe(true); // 13 numeric
        expect(validateLicense("MT", "12345678901234")).toBe(true); // 14 numeric
    });

    test("returns false for invalid MT licenses", () => {
        expect(validateLicense("MT", "A1234567")).toBe(false); // Less than 8 numeric
        expect(validateLicense("MT", "A123456789")).toBe(false); // More than 8 numeric
        expect(validateLicense("MT", "12345678")).toBe(false); // No alpha + not 9 numeric
        expect(validateLicense("MT", "1234567891")).toBe(false); // 10 numeric
        expect(validateLicense("MT", "12345678912")).toBe(false); // 11 numeric
        expect(validateLicense("MT", "123456789123")).toBe(false); // 12 numeric
        expect(validateLicense("MT", "123456789012345")).toBe(false); // More than 14 numeric
    });

    test("returns true for valid NE licenses", () => {
        expect(validateLicense("NE", "A123456")).toBe(true); // 1 alpha + 6 numeric
        expect(validateLicense("NE", "A1234567")).toBe(true); // 1 alpha + 7 numeric
        expect(validateLicense("NE", "A12345678")).toBe(true); // 1 alpha + 8 numeric
    });

    test("returns false for invalid NE licenses", () => {
        expect(validateLicense("NE", "A12345")).toBe(false); // Less than 6 numeric
        expect(validateLicense("NE", "A123456789")).toBe(false); // More than 8 numeric
        expect(validateLicense("NE", "123456789")).toBe(false); //
    });

    test("returns true for valid NV licenses", () => {
        expect(validateLicense("NV", "123456789")).toBe(true); // 9 numeric
        expect(validateLicense("NV", "1234567890")).toBe(true); // 10 numeric
        expect(validateLicense("NV", "123456789012")).toBe(true); // 12 numeric
        expect(validateLicense("NV", "X12345678")).toBe(true); // 1 alpha + 8 numeric
    });

    test("returns false for invalid NV licenses", () => {
        expect(validateLicense("NV", "12345678")).toBe(false); // Less than 9 numeric
        expect(validateLicense("NV", "12345678901")).toBe(false); // 11 numeric
        expect(validateLicense("NV", "1234567890123")).toBe(false); // More than 12 numeric
        expect(validateLicense("NV", "X1234567")).toBe(false); // 1 alpha + Less than 8 numeric
        expect(validateLicense("NV", "X123456789")).toBe(false); // 1 alpha + More than 8 numeric
    });

    test("returns true for valid NH licenses", () => {
        expect(validateLicense("NH", "12ABC12345")).toBe(true); // 2 numeric + 3 alpha + 5 numeric
    });

    test("returns false for invalid NH licenses", () => {
        expect(validateLicense("NH", "1ABC12345")).toBe(false); // Less than 2 numeric
        expect(validateLicense("NH", "123ABC12345")).toBe(false); // More than 3 alpha
        expect(validateLicense("NH", "12ABC1234")).toBe(false); // Less than 5 numeric
        expect(validateLicense("NH", "12ABC123456")).toBe(false); // More than 5 numeric
        expect(validateLicense("NH", "12ABCD12345")).toBe(false); // More than 3 alpha
    });

    test("returns true for valid NJ licenses", () => {
        expect(validateLicense("NJ", "A12345678901234")).toBe(true); // 1 alpha + 14 numeric
    });

    test("returns false for invalid NJ licenses", () => {
        expect(validateLicense("NJ", "A1234567890123")).toBe(false); // Less than 14 numeric
        expect(validateLicense("NJ", "A123456789012345")).toBe(false); // More than 14 numeric
        expect(validateLicense("NJ", "12345678901234A")).toBe(false); // 1 alpha at the end
    });

    test("returns true for valid NM licenses", () => {
        expect(validateLicense("NM", "12345678")).toBe(true); // 8 numeric
        expect(validateLicense("NM", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid NM licenses", () => {
        expect(validateLicense("NM", "1234567")).toBe(false); // Less than 8 numeric
        expect(validateLicense("NM", "1234567890")).toBe(false); // More than 9 numeric
    });

    test("returns true for valid NY licenses", () => {
        expect(validateLicense("NY", "A1234567")).toBe(true); // 1 alpha + 7 numeric
        expect(validateLicense("NY", "A123456789012345678")).toBe(true); // 1 alpha + 18 numeric
        expect(validateLicense("NY", "12345678")).toBe(true); // 8 numeric
        expect(validateLicense("NY", "123456789")).toBe(true); // 9 numeric
        expect(validateLicense("NY", "1234567890123456")).toBe(true); // 16 numeric
        expect(validateLicense("NY", "ABCDEFGH")).toBe(true); // 8 alpha
    });

    test("returns false for invalid NY licenses", () => {
        expect(validateLicense("NY", "A123456")).toBe(false); // Less than 7 numeric
        expect(validateLicense("NY", "A1234567890123456790")).toBe(false); // More than 18 numeric
        expect(validateLicense("NY", "A12345678901234567")).toBe(false);  // Less than 18 numeric
        expect(validateLicense("NY", "1234567")).toBe(false); // Less than 8 numeric
        expect(validateLicense("NY", "1234567890")).toBe(false); // More than 9 numeric
        expect(validateLicense("NY", "123456789012345")).toBe(false); // Less than 16 numeric
        expect(validateLicense("NY", "12345678901234512")).toBe(false); // More than 16 numeric
        expect(validateLicense("NY", "ABCDEFG")).toBe(false); // Less than 8 alpha
        expect(validateLicense("NY", "ABCDEFGAHS")).toBe(false); // More than 8 alpha
    });

    test("returns true for valid NC licenses", () => {
        expect(validateLicense("NC", "123")).toBe(true); // 3 numeric
        expect(validateLicense("NC", "123456789012")).toBe(true); // 12 numeric
    });

    test("returns false for invalid NC licenses", () => {
        expect(validateLicense("NC", "A12")).toBe(false); // Alpha
        expect(validateLicense("NC", "1234567890123")).toBe(false); // More than 12 numeric
    });

    test("returns true for valid ND licenses", () => {
        expect(validateLicense("ND", "ABC123456")).toBe(true); // 3 alpha + 6 numeric
        expect(validateLicense("ND", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid ND licenses", () => {
        expect(validateLicense("ND", "AB1234567")).toBe(false); // Less than 3 alpha
        expect(validateLicense("ND", "ABC123456A")).toBe(false); // Wrong alpha placement
        expect(validateLicense("ND", "12345678")).toBe(false); // Less than 9 numeric
        expect(validateLicense("ND", "1234567890")).toBe(false); // More than 9 numeric
    });

    test("returns true for valid OH licenses", () => {
        expect(validateLicense("OH", "A1234")).toBe(true); // 1 alpha + 4 numeric
        expect(validateLicense("OH", "A12345678")).toBe(true); // 1 alpha + 8 numeric
        expect(validateLicense("OH", "A123456")).toBe(true); // 1 alpha + 6 numeric
        expect(validateLicense("OH", "AB123")).toBe(true); // 2 alpha + 3 numeric
        expect(validateLicense("OH", "AB1234567")).toBe(true); // 2 alpha + 7 numeric
        expect(validateLicense("OH", "AB12345")).toBe(true); // 2 alpha + 5 numeric
        expect(validateLicense("OH", "12345678")).toBe(true); // 8 numeric
    });

    test("returns false for invalid OH licenses", () => {
        expect(validateLicense("OH", "A123")).toBe(false); // Less than 4 numeric
        expect(validateLicense("OH", "A123456789")).toBe(false); // More than 8 numeric
        expect(validateLicense("OH", "AB12")).toBe(false); // Less than 3 numeric
        expect(validateLicense("OH", "AB12345678")).toBe(false); // More than 7 numeric
        expect(validateLicense("OH", "1234567")).toBe(false); // Less than 8 numeric
        expect(validateLicense("OH", "123456789")).toBe(false); // More than 8 numeric
        expect(validateLicense("OH", "123A56789")).toBe(false); // Alpha in the middle
    });

    test("returns true for valid OK licenses", () => {
        expect(validateLicense("OK", "A123456789")).toBe(true); // 1 alpha + 9 numeric
        expect(validateLicense("OK", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid OK licenses", () => {
        expect(validateLicense("OK", "A12345678")).toBe(false); // 1 alpha + Less than 9 numeric
        expect(validateLicense("OK", "A1234567890")).toBe(false); // 1 alpha + More than 9 numeric
        expect(validateLicense("OK", "12345678")).toBe(false); // Less than 9 numeric
        expect(validateLicense("OK", "1234567890")).toBe(false); // More than 9 numeric
        expect(validateLicense("OK", "123456789A")).toBe(false); // 9 numeric + 1 alpha
    });

    test("returns true for valid OR licenses", () => {
        expect(validateLicense("OR", "123")).toBe(true); // 3 numeric
        expect(validateLicense("OR", "123456")).toBe(true); // 6 numeric
        expect(validateLicense("OR", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid OR licenses", () => {
        expect(validateLicense("OR", "A12")).toBe(false); // Alpha
        expect(validateLicense("OR", "1234567890")).toBe(false);  // More than 9 numeric
        expect(validateLicense("OR", "1234567890")).toBe(false);  // More than 9 numeric
    });

    test("returns true for valid PA licenses", () => {
        expect(validateLicense("PA", "12345678")).toBe(true); // 8 numeric
    });

    test("returns false for invalid PA licenses", () => {
        expect(validateLicense("PA", "1234567")).toBe(false); // Less than 8 numeric
        expect(validateLicense("PA", "123456789")).toBe(false); // More than 8 numeric
    });

    test("returns true for valid RI licenses", () => {
        expect(validateLicense("RI", "1234567")).toBe(true); // 7 numeric
        expect(validateLicense("RI", "A123456")).toBe(true); // 1 alpha + 6 numeric
    });

    test("returns false for invalid RI licenses", () => {
        expect(validateLicense("RI", "123456")).toBe(false); // Less than 7 numeric
        expect(validateLicense("RI", "12345678")).toBe(false); // More than 7 numeric
        expect(validateLicense("RI", "A12345")).toBe(false); // Less than 6 numeric
        expect(validateLicense("RI", "A1234567")).toBe(false); // More than 6 numeric
    });

    test("returns true for valid SC licenses", () => {
        expect(validateLicense("SC", "12345")).toBe(true); // 5 numeric
        expect(validateLicense("SC", "1234567")).toBe(true); // 7 numeric
        expect(validateLicense("SC", "12345678901")).toBe(true); // 11 numeric
    });

    test("returns false for invalid SC licenses", () => {
        expect(validateLicense("SC", "1234")).toBe(false); // Less than 5 numeric
        expect(validateLicense("SC", "123456789012")).toBe(false); // More than 11 numeric
    });

    test("returns true for valid SD licenses", () => {
        expect(validateLicense("SD", "123456")).toBe(true); // 6 numeric
        expect(validateLicense("SD", "12345678")).toBe(true); // 8 numeric
        expect(validateLicense("SD", "1234567890")).toBe(true); // 10 numeric
        expect(validateLicense("SD", "123456789012")).toBe(true); // 12 numeric
    });

    test("returns false for invalid SD licenses", () => {
        expect(validateLicense("SD", "12345")).toBe(false); // Less than 6 numeric
        expect(validateLicense("SD", "12345678901")).toBe(false); // 11 numeric
        expect(validateLicense("SD", "1234567890123")).toBe(false); // More than 12 numeric
    });

    test("returns true for valid TN licenses", () => {
        expect(validateLicense("TN", "1234567")).toBe(true); // 7 numeric
        expect(validateLicense("TN", "12345678")).toBe(true); // 8 numeric
        expect(validateLicense("TN", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid TN licenses", () => {
        expect(validateLicense("TN", "123456")).toBe(false); // Less than 7 numeric
        expect(validateLicense("TN", "1234567890")).toBe(false); // More than 9 numeric
        expect(validateLicense("TN", "123456789A")).toBe(false); // 9 numeric + 1 alpha
        expect(validateLicense("TN", "A123456789")).toBe(false); // 1 alpha + 9 numeric
    });

    test("returns true for valid TX licenses", () => {
        expect(validateLicense("TX", "1234567")).toBe(true); // 7 numeric
        expect(validateLicense("TX", "12345678")).toBe(true); // 8 numeric
    });

    test("returns false for invalid TX licenses", () => {
        expect(validateLicense("TX", "123456")).toBe(false); // Less than 7 numeric
        expect(validateLicense("TX", "123456789")).toBe(false); // More than 8 numeric
        expect(validateLicense("TX", "12345678A")).toBe(false); // 8 numeric + 1 alpha
    });

    test("returns true for valid UT licenses", () => {
        expect(validateLicense("UT", "1234")).toBe(true); // 4 numeric
        expect(validateLicense("UT", "1234567")).toBe(true); // 7 numeric
        expect(validateLicense("UT", "1234567890")).toBe(true); // 10 numeric
    });

    test("returns false for invalid UT licenses", () => {
        expect(validateLicense("UT", "123")).toBe(false); // Less than 4 numeric
        expect(validateLicense("UT", "123ABFD")).toBe(false); // Alpha
        expect(validateLicense("UT", "12345678901")).toBe(false); // More than 10 numeric
    });

    test("returns true for valid VT licenses", () => {
        expect(validateLicense("VT", "12345678")).toBe(true); // 8 numeric
        expect(validateLicense("VT", "1234567A")).toBe(true);// 7 numeric + A
    });

    test("returns false for invalid VT licenses", () => {
        expect(validateLicense("VT", "1234567")).toBe(false); // Less than 8 numeric
        expect(validateLicense("VT", "123456789")).toBe(false); // More than 8 numeric
        expect(validateLicense("VT", "12345678A")).toBe(false); // 8 numeric + 1 alpha
        expect(validateLicense("VT", "123456A")).toBe(false); // 6 numeric + 1 alpha
        expect(validateLicense("VT", "A1234567")).toBe(false); // 1 alpha + 7 numeric
        expect(validateLicense("VT", "1234567B")).toBe(false);// 7 numeric + B
    });

    test("returns true for valid VA licenses", () => {
        expect(validateLicense("VA", "A12345678")).toBe(true); // 1 alpha + 8 numeric
        expect(validateLicense("VA", "A12345678901")).toBe(true); // 1 alpha + 11 numeric
        expect(validateLicense("VA", "A1234567890")).toBe(true); // 1 alpha + 10 numeric
        expect(validateLicense("VA", "123456789")).toBe(true); // 9 numeric
    });

    test("returns false for invalid VA licenses", () => {
        expect(validateLicense("VA", "A123456789124")).toBe(false); // More than 11 numeric
        expect(validateLicense("VA", "1234567890")).toBe(false); // More than 9 numeric
        expect(validateLicense("VA", "12345678")).toBe(false); // No alpha + not 9 numeric
        expect(validateLicense("VA", "A1234567")).toBe(false); // Less than 8 numeric
    });

    test("returns true for valid WI licenses", () => {
        expect(validateLicense("WI", "A1234567890123")).toBe(true); // 1 alpha + 13 numeric
    });

    test("returns false for invalid WI licenses", () => {
        expect(validateLicense("WI", "A123456789012")).toBe(false); // Less than 13 numeric
        expect(validateLicense("WI", "A12345678901234")).toBe(false); // More than 13 numeric
        expect(validateLicense("WI", "1234567890123")).toBe(false); // No alpha
        expect(validateLicense("WI", "123456A7890123")).toBe(false); // Alpha in the middle
    });

    test("returns true for valid WY licenses", () => {
        expect(validateLicense("WY", "123456789")).toBe(true); // 9 numeric
        expect(validateLicense("WY", "1234567890")).toBe(true); // 10 numeric
    });

    test("returns false for invalid WY licenses", () => {
        expect(validateLicense("WY", "12345678")).toBe(false); // Less than 9 numeric
        expect(validateLicense("WY", "12345678901")).toBe(false); // More than 10 numeric
        expect(validateLicense("WY", "A12345678901")).toBe(false); // Alpha
    });

    test("returns true for valid WA licenses", () => {
        expect(validateLicense("WA", "ABCD12345678")).toBe(true); // 4 alpha + 8 numeric
        expect(validateLicense("WA", "EE1B39423jdg")).toBe(true); // 2 alpha + 8 numeric + 1 alpha
        expect(validateLicense("WA", "ABCGHGF28kd0")).toBe(true); // 5 alpha + 5 numeric + 1 alpha
    });

    test("returns false for invalid WA licenses", () => {
        expect(validateLicense("WA", "ABCD1234")).toBe(false); // Less than 8 numeric
        expect(validateLicense("WA", "ABCDE123")).toBe(false); // Less than 9 numeric
        expect(validateLicense("WA", "ABCDEFGH12349")).toBe(false); // More than 8 numeric 
        expect(validateLicense("WA", "1234ABCDEFGH")).toBe(false); // More than 4 alpha
    });

    test("returns true for valid WV licenses", () => {
        expect(validateLicense("WV", "AB12345")).toBe(true); // 2 alpha + 5 numeric
        expect(validateLicense("WV", "AB123456")).toBe(true); // 2 alpha + 6 numeric
        expect(validateLicense("WV", "A12345")).toBe(true); // 1 alpha + 5 numeric
        expect(validateLicense("WV", "A123456")).toBe(true); // 1 alpha + 6 numeric
        expect(validateLicense("WV", "1234567")).toBe(true); // 7 numeric
    });

    test("returns false for invalid WV licenses", () => {
        expect(validateLicense("WV", "123456")).toBe(false); // Less than 7 numeric
        expect(validateLicense("WV", "12345678")).toBe(false); // More than 7 numeric
        expect(validateLicense("WV", "ABCD123")).toBe(false); // More than 2 alpha
        expect(validateLicense("WV", "ABCDE12")).toBe(false); // More than 1 alpha
        expect(validateLicense("WV", "A12B456")).toBe(false); // Alpha in the middle
        expect(validateLicense("WV", "12B456")).toBe(false); // Alpha in the middle
    });

});

describe("matchLicense", () => {
    test("returns true for valid AL licenses", () => {
        expect(matchLicense("12345678")).toBe({
            "AL": [
                "numeric-1-to-8",
            ],
            "AR": [
                "numeric-4-to-9",
            ],
            "GA": [
                "numeric-7-to-9",
            ],
            "LA": [
                "numeric-1-to-9",
            ],
            "ME": [
                "numeric-8",
            ],
            "NC": [
                "numeric-1-to-12",
            ],
            "NM": [
                "numeric-8-to-9",
            ],
            "NY": [
                "numeric-8-to-9",
            ],
            "OH": [
                "numeric-8",
            ],
            "OR": [
                "numeric-1-to-9",
            ],
            "PA": [
                "numeric-8",
            ],
            "SC": [
                "numeric-5-to-11",
            ],
            "SD": [
                "numeric-6-to-10",
            ],
            "TN": [
                "numeric-7-to-9",
            ],
            "TX": [
                "numeric-7-to-8",
            ],
            "UT": [
                "numeric-4-to-10",
            ],
            "VT": [
                "numeric-8",
            ],
        });
    });
});
