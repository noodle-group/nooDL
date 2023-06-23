import { matchLicense, validateLicense } from '../src/index';  // Adjust this path as needed

describe("validateLicense", () => {
    test("returns the correct pattern for valid AL licenses", () => {
        expect(validateLicense("AL", "12345678")).toBe('numeric-1-to-8'); // 1-8 digits
    });

    test("returns null for invalid AL licenses", () => {
        expect(validateLicense("AL", "123456789")).toBe(null);  // More than 8 digits
        expect(validateLicense("AL", "ABC12345")).toBe(null);   // Contains non-numeric characters
    });

    test("returns the correct pattern for valid AK licenses", () => {
        expect(validateLicense("AK", "1234567")).toBe('numeric-1-to-7'); // 1-7 digits
    });

    test("returns null for invalid AK licenses", () => {
        expect(validateLicense("AK", "12345678")).toBe(null);  // More than 7 digits
        expect(validateLicense("AK", "ABC1234")).toBe(null);   // Contains non-numeric characters
    });

    test("returns the correct pattern for valid AR licenses", () => {
        expect(validateLicense("AR", "1234")).toBe('numeric-4-to-9');
        expect(validateLicense("AR", "12345")).toBe('numeric-4-to-9');
        expect(validateLicense("AR", "123456")).toBe('numeric-4-to-9');
        expect(validateLicense("AR", "1234567")).toBe('numeric-4-to-9');
        expect(validateLicense("AR", "12345678")).toBe('numeric-4-to-9');
        expect(validateLicense("AR", "123456789")).toBe('numeric-4-to-9');
    });

    test("returns null for invalid AR licenses", () => {
        expect(validateLicense("AR", "123")).toBe(null);
        expect(validateLicense("AR", "1234567890")).toBe(null);
        expect(validateLicense("AR", "ABC1234")).toBe(null);
    });

    test("returns the correct pattern for valid AZ licenses", () => {
        expect(validateLicense("AZ", "A12345678")).toBe('alpha-1-numeric-8');
        expect(validateLicense("AZ", "123456789")).toBe('numeric-9');
    });

    test("returns null for invalid AZ licenses", () => {
        expect(validateLicense("AZ", "AB12345678")).toBe(null);
        expect(validateLicense("AZ", "12345678")).toBe(null);
    });

    test("returns the correct pattern for valid CA licenses", () => {
        expect(validateLicense("CA", "A1234567")).toBe('alpha-1-numeric-7');
    });

    test("returns null for invalid CA licenses", () => {
        expect(validateLicense("CA", "12345678")).toBe(null);
        expect(validateLicense("CA", "A123456")).toBe(null);
        expect(validateLicense("CA", "A123456789")).toBe(null);
    });

    test("returns the correct pattern for valid CO licenses", () => {
        expect(validateLicense("CO", "123456789")).toBe('numeric-9');
        expect(validateLicense("CO", "A1234")).toBe('alpha-1-numeric-3-to-6');
        expect(validateLicense("CO", "AB123")).toBe('alpha-2-numeric-2-to-5');
    });

    test("returns null for invalid CO licenses", () => {
        expect(validateLicense("CO", "12345678")).toBe(null);
        expect(validateLicense("CO", "ABC123")).toBe(null);
        expect(validateLicense("CO", "A1234567")).toBe(null);
        expect(validateLicense("CO", "AC123456")).toBe(null);
    });

    test("returns the correct pattern for valid CT licenses", () => {
        expect(validateLicense("CT", "123456789")).toBe('numeric-9');
    });

    test("returns null for invalid CT licenses", () => {
        expect(validateLicense("CT", "12345678")).toBe(null);
        expect(validateLicense("CT", "1234567890")).toBe(null);
        expect(validateLicense("CT", "A12345678")).toBe(null);
    });

    test("returns the correct pattern for valid DE licenses", () => {
        expect(validateLicense("DE", "1234567")).toBe('numeric-1-to-7');
    });

    test("returns null for invalid DE licenses", () => {
        expect(validateLicense("DE", "A1234567")).toBe(null);
        expect(validateLicense("DE", "12345678")).toBe(null);
    });

    test("returns the correct pattern for valid DC licenses", () => {
        expect(validateLicense("DC", "1234567")).toBe('numeric-7');
        expect(validateLicense("DC", "123456789")).toBe('numeric-9');
    });

    test("returns null for invalid DC licenses", () => {
        expect(validateLicense("DC", "12345678")).toBe(null);
        expect(validateLicense("DC", "1234567890")).toBe(null);
        expect(validateLicense("DC", "A12345678")).toBe(null);
    });

    test("returns the correct pattern for valid FL licenses", () => {
        expect(validateLicense("FL", "A123456789012")).toBe('alpha-1-numeric-12');
    });

    test("returns null for invalid FL licenses", () => {
        expect(validateLicense("FL", "123456789012")).toBe(null);
        expect(validateLicense("FL", "A12345678901")).toBe(null);
        expect(validateLicense("FL", "A12345678901123456")).toBe(null);
        expect(validateLicense("FL", "AB123456789012")).toBe(null);
    });

    test("returns the correct pattern for valid GA licenses", () => {
        expect(validateLicense("GA", "1234567")).toBe("numeric-7-to-9");
        expect(validateLicense("GA", "12345678")).toBe("numeric-7-to-9");
        expect(validateLicense("GA", "123456789")).toBe("numeric-7-to-9");
    });

    test("returns null for invalid GA licenses", () => {
        expect(validateLicense("GA", "123456")).toBe(null);
        expect(validateLicense("GA", "1234567890")).toBe(null);
        expect(validateLicense("GA", "A234567890")).toBe(null);
    });

    test("returns the correct pattern for valid HI licenses", () => {
        expect(validateLicense("HI", "A12345678")).toBe("alpha-1-numeric-8");
        expect(validateLicense("HI", "123456789")).toBe("numeric-9");
    });

    test("returns null for invalid HI licenses", () => {
        expect(validateLicense("HI", "A1234567")).toBe(null);
        expect(validateLicense("HI", "A123456789")).toBe(null);
        expect(validateLicense("HI", "12345678")).toBe(null);
        expect(validateLicense("HI", "1234567890")).toBe(null);
    });

    test("returns the correct pattern for valid ID licenses", () => {
        expect(validateLicense("ID", "AB123456C")).toBe("alpha-2-numeric-6-alpha-1");
        expect(validateLicense("ID", "123456789")).toBe("numeric-9");
    });

    test("returns null for invalid ID licenses", () => {
        expect(validateLicense("ID", "AB123456")).toBe(null);
        expect(validateLicense("ID", "AB12345678C")).toBe(null);
        expect(validateLicense("ID", "12345678")).toBe(null);
        expect(validateLicense("ID", "1234567890")).toBe(null);
    });

    test("returns the correct pattern for valid IL licenses", () => {
        expect(validateLicense("IL", "A12345678901")).toBe("alpha-1-numeric-11-to-12");
        expect(validateLicense("IL", "A123456789012")).toBe("alpha-1-numeric-11-to-12");
    });

    test("returns null for invalid IL licenses", () => {
        expect(validateLicense("IL", "A123456789")).toBe(null);
        expect(validateLicense("IL", "A1234567890123")).toBe(null);
        expect(validateLicense("IL", "1234567890123")).toBe(null);
    });

    test("returns the correct pattern for valid IN licenses", () => {
        expect(validateLicense("IN", "A123456789")).toBe("alpha-1-numeric-9");
        expect(validateLicense("IN", "123456789")).toBe("numeric-9-to-10");
        expect(validateLicense("IN", "1234567890")).toBe("numeric-9-to-10");
    });

    test("returns null for invalid IN licenses", () => {
        expect(validateLicense("IN", "A12345678")).toBe(null);
        expect(validateLicense("IN", "A1234567890")).toBe(null);
        expect(validateLicense("IN", "12345678")).toBe(null);
        expect(validateLicense("IN", "12345678901")).toBe(null);
    });

    test("returns the correct pattern for valid IA licenses", () => {
        expect(validateLicense("IA", "123456789")).toBe("numeric-9");
        expect(validateLicense("IA", "123AB4567")).toBe("numeric-3-alpha-2-numeric-4");
    });

    test("returns null for invalid IA licenses", () => {
        expect(validateLicense("IA", "12345678")).toBe(null);
        expect(validateLicense("IA", "1234567890")).toBe(null);
        expect(validateLicense("IA", "12AB4567")).toBe(null);
        expect(validateLicense("IA", "123AB567")).toBe(null);
        expect(validateLicense("IA", "123AB839567")).toBe(null);
        expect(validateLicense("IA", "1234AB8397")).toBe(null);
    });

    test("returns the correct pattern for valid KS licenses", () => {
        expect(validateLicense("KS", "A1B2C")).toBe("alpha-1-numeric-1-alpha-1-numeric-1-alpha-1");
        expect(validateLicense("KS", "A12345678")).toBe("alpha-1-numeric-8");
        expect(validateLicense("KS", "123456789")).toBe("numeric-9");
    });

    test("returns null for invalid KS licenses", () => {
        expect(validateLicense("KS", "A1B2")).toBe(null);
        expect(validateLicense("KS", "1A2B3")).toBe(null);
        expect(validateLicense("KS", "ABCDE")).toBe(null);
        expect(validateLicense("KS", "A1234567")).toBe(null);
        expect(validateLicense("KS", "12345678")).toBe(null);
        expect(validateLicense("KS", "1234567890")).toBe(null);
    });

    test("returns the correct pattern for valid KY licenses", () => {
        expect(validateLicense("KY", "A12345678")).toBe("alpha-1-numeric-8");
        expect(validateLicense("KY", "A123456789")).toBe("alpha-1-numeric-9");
        expect(validateLicense("KY", "123456789")).toBe("numeric-9");
    });

    test("returns null for invalid KY licenses", () => {
        expect(validateLicense("KY", "A1234567")).toBe(null);
        expect(validateLicense("KY", "A1234567890")).toBe(null);
        expect(validateLicense("KY", "12345678")).toBe(null);
        expect(validateLicense("KY", "1234567890")).toBe(null);
        expect(validateLicense("KY", "AB12345678")).toBe(null);
    });

    test("returns the correct pattern for valid LA licenses", () => {
        expect(validateLicense("LA", "1")).toBe("numeric-1-to-9");
        expect(validateLicense("LA", "12")).toBe("numeric-1-to-9");
        expect(validateLicense("LA", "123")).toBe("numeric-1-to-9");
        expect(validateLicense("LA", "1234")).toBe("numeric-1-to-9");
        expect(validateLicense("LA", "12345")).toBe("numeric-1-to-9");
        expect(validateLicense("LA", "123456")).toBe("numeric-1-to-9");
        expect(validateLicense("LA", "1234567")).toBe("numeric-1-to-9");
        expect(validateLicense("LA", "12345678")).toBe("numeric-1-to-9");
        expect(validateLicense("LA", "123456789")).toBe("numeric-1-to-9");
    });

    test("returns null for invalid LA licenses", () => {
        expect(validateLicense("LA", "A1234567")).toBe(null);
        expect(validateLicense("LA", "1234567890")).toBe(null);
    });

    test("returns the correct pattern for valid ME licenses", () => {
        expect(validateLicense("ME", "1234567")).toBe("numeric-7");
        expect(validateLicense("ME", "12345678")).toBe("numeric-8");
        expect(validateLicense("ME", "1234567A")).toBe("numeric-7-alpha-1");
    });

    test("returns null for invalid ME licenses", () => {
        expect(validateLicense("ME", "123456")).toBe(null);
        expect(validateLicense("ME", "123456789")).toBe(null);
        expect(validateLicense("ME", "123456A")).toBe(null);
        expect(validateLicense("ME", "12345678A")).toBe(null);
    });

    test("returns the correct pattern for valid MD licenses", () => {
        expect(validateLicense("MD", "A123456789012")).toBe("alpha-1-numeric-12");
    });

    test("returns null for invalid MD licenses", () => {
        expect(validateLicense("MD", "123456789012")).toBe(null);
        expect(validateLicense("MD", "A1234567890123")).toBe(null);
        expect(validateLicense("MD", "A12345678901")).toBe(null);
    });

    test("returns the correct pattern for valid MA licenses", () => {
        expect(validateLicense("MA", "A12345678")).toBe("alpha-1-numeric-8");
        expect(validateLicense("MA", "123456789")).toBe("numeric-9");
    });

    test("returns null for invalid MA licenses", () => {
        expect(validateLicense("MA", "A1234567")).toBe(null);
        expect(validateLicense("MA", "A123456789")).toBe(null);
        expect(validateLicense("MA", "12345678")).toBe(null);
        expect(validateLicense("MA", "1234567890")).toBe(null);
    });

    test("returns the correct pattern for valid MI licenses", () => {
        expect(validateLicense("MI", "A1234567890")).toBe("alpha-1-numeric-10");
        expect(validateLicense("MI", "A123456789012")).toBe("alpha-1-numeric-12");
    });

    test("returns null for invalid MI licenses", () => {
        expect(validateLicense("MI", "A123456789")).toBe(null);
        expect(validateLicense("MI", "A12345678901")).toBe(null);
        expect(validateLicense("MI", "A1234567890123")).toBe(null);
        expect(validateLicense("MI", "1234567890123")).toBe(null);
    });

    test("returns the correct pattern for valid MN licenses", () => {
        expect(validateLicense("MN", "A123456789012")).toBe("alpha-1-numeric-12");
    });

    test("returns null for invalid MN licenses", () => {
        expect(validateLicense("MN", "A12345678901")).toBe(null);
        expect(validateLicense("MN", "A1234567890134")).toBe(null);
        expect(validateLicense("MN", "AB123456789013")).toBe(null);
        expect(validateLicense("MN", "123456789013")).toBe(null);
    });

    test("returns the correct pattern for valid MS licenses", () => {
        expect(validateLicense("MS", "123456789")).toBe("numeric-9");
    });

    test("returns null for invalid MS licenses", () => {
        expect(validateLicense("MS", "12345678")).toBe(null);
        expect(validateLicense("MS", "1234567890")).toBe(null);
        expect(validateLicense("MS", "A1234567890")).toBe(null);
    });

    test("returns the correct pattern for valid MO licenses", () => {
        expect(validateLicense("MO", "123A456789")).toBe("numeric-3-alpha-1-numeric-6");
        expect(validateLicense("MO", "A12345")).toBe("alpha-1-numeric-5-to-9");
        expect(validateLicense("MO", "A123456789")).toBe("alpha-1-numeric-5-to-9");
        expect(validateLicense("MO", "A123456R")).toBe("alpha-1-numeric-6-suffix-r");
        expect(validateLicense("MO", "12345678AB")).toBe("numeric-8-alpha-2");
        expect(validateLicense("MO", "123456789A")).toBe("numeric-9-alpha-1");
        expect(validateLicense("MO", "123456789")).toBe("numeric-9");
    });

    test("returns null for invalid MO licenses", () => {
        expect(validateLicense("MO", "123AB12345")).toBe(null);
        expect(validateLicense("MO", "A1234")).toBe(null);
        expect(validateLicense("MO", "A1234567R")).toBe(null);
        expect(validateLicense("MO", "A123456S")).toBe(null);
        expect(validateLicense("MO", "12345678A")).toBe(null);
        expect(validateLicense("MO", "1234567A")).toBe(null);
        expect(validateLicense("MO", "1234567AB")).toBe(null);
        expect(validateLicense("MO", "123456789AB")).toBe(null);
        expect(validateLicense("MO", "12345678")).toBe(null);
        expect(validateLicense("MO", "1234567890")).toBe(null);
    });

    test("returns the correct pattern for valid MT licenses", () => {
        expect(validateLicense("MT", "A12345678")).toBe("alpha-1-numeric-8");
        expect(validateLicense("MT", "123456789")).toBe("numeric-9");
        expect(validateLicense("MT", "1234567890123")).toBe("numeric-13-to-14");
        expect(validateLicense("MT", "12345678901234")).toBe("numeric-13-to-14");
    });

    test("returns null for invalid MT licenses", () => {
        expect(validateLicense("MT", "A1234567")).toBe(null);
        expect(validateLicense("MT", "A123456789")).toBe(null);
        expect(validateLicense("MT", "12345678")).toBe(null);
        expect(validateLicense("MT", "1234567891")).toBe(null);
        expect(validateLicense("MT", "12345678912")).toBe(null);
        expect(validateLicense("MT", "123456789123")).toBe(null);
        expect(validateLicense("MT", "123456789012345")).toBe(null);
    });

    test("returns the correct pattern for valid NE licenses", () => {
        expect(validateLicense("NE", "A123456")).toBe("alpha-1-numeric-6-to-8");
        expect(validateLicense("NE", "A1234567")).toBe("alpha-1-numeric-6-to-8");
        expect(validateLicense("NE", "A12345678")).toBe("alpha-1-numeric-6-to-8");
    });

    test("returns null for invalid NE licenses", () => {
        expect(validateLicense("NE", "A12345")).toBe(null);
        expect(validateLicense("NE", "A123456789")).toBe(null);
        expect(validateLicense("NE", "123456789")).toBe(null);
    });


    test("returns 'numeric-9' for valid NV licenses", () => {
        expect(validateLicense("NV", "123456789")).toBe("numeric-9-to-10");
        expect(validateLicense("NV", "1234567890")).toBe("numeric-9-to-10");
        expect(validateLicense("NV", "123456789012")).toBe("numeric-12");
        expect(validateLicense("NV", "X12345678")).toBe("prefix-x-numeric-8");
    });

    test("returns null for invalid NV licenses", () => {
        expect(validateLicense("NV", "12345678")).toBe(null);
        expect(validateLicense("NV", "12345678901")).toBe(null);
        expect(validateLicense("NV", "1234567890123")).toBe(null);
        expect(validateLicense("NV", "X1234567")).toBe(null);
        expect(validateLicense("NV", "X123456789")).toBe(null);
    });

    test("returns 'alpha-2-numeric-3-to-6' for valid NH licenses", () => {
        expect(validateLicense("NH", "12ABC12345")).toBe("numeric-2-alpha-3-numeric-5");
    });

    test("returns null for invalid NH licenses", () => {
        expect(validateLicense("NH", "1ABC12345")).toBe(null);
        expect(validateLicense("NH", "123ABC12345")).toBe(null);
        expect(validateLicense("NH", "12ABC1234")).toBe(null);
        expect(validateLicense("NH", "12ABC123456")).toBe(null);
        expect(validateLicense("NH", "12ABCD12345")).toBe(null);
    });

    test("returns 'alpha-1-numeric-14' for valid NJ licenses", () => {
        expect(validateLicense("NJ", "A12345678901234")).toBe("alpha-1-numeric-14");
    });

    test("returns null for invalid NJ licenses", () => {
        expect(validateLicense("NJ", "A1234567890123")).toBe(null);
        expect(validateLicense("NJ", "A123456789012345")).toBe(null);
        expect(validateLicense("NJ", "12345678901234A")).toBe(null);
    });

    test("returns 'numeric-8' or 'numeric-9' for valid NM licenses", () => {
        expect(validateLicense("NM", "12345678")).toBe("numeric-8-to-9");
        expect(validateLicense("NM", "123456789")).toBe("numeric-8-to-9");
    });

    test("returns null for invalid NM licenses", () => {
        expect(validateLicense("NM", "1234567")).toBe(null);
        expect(validateLicense("NM", "1234567890")).toBe(null);
    });

    test("returns the correct pattern for valid NY licenses", () => {
        expect(validateLicense("NY", "A1234567")).toBe("alpha-1-numeric-7");
        expect(validateLicense("NY", "A123456789012345678")).toBe("alpha-1-numeric-18");
        expect(validateLicense("NY", "12345678")).toBe("numeric-8-to-9");
        expect(validateLicense("NY", "123456789")).toBe("numeric-8-to-9");
        expect(validateLicense("NY", "1234567890123456")).toBe("numeric-16");
        expect(validateLicense("NY", "ABCDEFGH")).toBe("alpha-8");
    });

    test("returns null for invalid NY licenses", () => {
        expect(validateLicense("NY", "A123456")).toBe(null);
        expect(validateLicense("NY", "A1234567890123456790")).toBe(null);
        expect(validateLicense("NY", "A12345678901234567")).toBe(null);
        expect(validateLicense("NY", "1234567")).toBe(null

        );
        expect(validateLicense("NY", "1234567890")).toBe(null);
        expect(validateLicense("NY", "123456789012345")).toBe(null);
        expect(validateLicense("NY", "12345678901234512")).toBe(null);
        expect(validateLicense("NY", "ABCDEFG")).toBe(null);
        expect(validateLicense("NY", "ABCDEFGAHS")).toBe(null);
    });

    test("returns the correct pattern for valid NC licenses", () => {
        expect(validateLicense("NC", "123")).toBe("numeric-1-to-12");
        expect(validateLicense("NC", "123456789012")).toBe("numeric-1-to-12");
    });

    test("returns null for invalid NC licenses", () => {
        expect(validateLicense("NC", "A12")).toBe(null);
        expect(validateLicense("NC", "1234567890123")).toBe(null);
    });

    test("returns the correct pattern for valid ND licenses", () => {
        expect(validateLicense("ND", "ABC123456")).toBe("alpha-3-numeric-6");
        expect(validateLicense("ND", "123456789")).toBe("numeric-9");
    });

    test("returns null for invalid ND licenses", () => {
        expect(validateLicense("ND", "AB1234567")).toBe(null);
        expect(validateLicense("ND", "ABC123456A")).toBe(null);
        expect(validateLicense("ND", "12345678")).toBe(null);
        expect(validateLicense("ND", "1234567890")).toBe(null);
    });

    test("returns the correct pattern for valid OH licenses", () => {
        expect(validateLicense("OH", "A1234")).toBe("alpha-1-numeric-4-to-8");
        expect(validateLicense("OH", "A12345678")).toBe("alpha-1-numeric-4-to-8");
        expect(validateLicense("OH", "A123456")).toBe("alpha-1-numeric-4-to-8");
        expect(validateLicense("OH", "AB123")).toBe("alpha-2-numeric-3-to-7");
        expect(validateLicense("OH", "AB1234567")).toBe("alpha-2-numeric-3-to-7");
        expect(validateLicense("OH", "AB12345")).toBe("alpha-2-numeric-3-to-7");
        expect(validateLicense("OH", "12345678")).toBe("numeric-8");
    });

    test("returns null for invalid OH licenses", () => {
        expect(validateLicense("OH", "A123")).toBe(null);
        expect(validateLicense("OH", "A123456789")).toBe(null);
        expect(validateLicense("OH", "AB12")).toBe(null);
        expect(validateLicense("OH", "AB12345678")).toBe(null);
        expect(validateLicense("OH", "1234567")).toBe(null);
        expect(validateLicense("OH", "123456789")).toBe(null);
        expect(validateLicense("OH", "123456A56789")).toBe(null);
    });

    test("returns the correct pattern for valid OK licenses", () => {
        expect(validateLicense("OK", "A123456789")).toBe("alpha-1-numeric-9");
        expect(validateLicense("OK", "123456789")).toBe("numeric-9");
    });

    test("returns null for invalid OK licenses", () => {
        expect(validateLicense("OK", "A12345678")).toBe(null);
        expect(validateLicense("OK", "A1234567890")).toBe(null);
        expect(validateLicense("OK", "12345678")).toBe(null);
        expect(validateLicense("OK", "1234567890")).toBe(null);
        expect(validateLicense("OK", "123456789A")).toBe(null);
    });

    test("returns the correct pattern for valid OR licenses", () => {
        expect(validateLicense("OR", "123")).toBe("numeric-1-to-9");
        expect(validateLicense("OR", "123456")).toBe("numeric-1-to-9");
        expect(validateLicense("OR", "123456789")).toBe("numeric-1-to-9");
    });

    test("returns null for invalid OR licenses", () => {
        expect(validateLicense("OR", "A12")).toBe(null);
        expect(validateLicense("OR", "1234567890")).toBe(null);
        expect(validateLicense("OR", "1234567890")).toBe(null);
    });

    test("returns the correct pattern for valid PA licenses", () => {
        expect(validateLicense("PA", "12345678")).toBe("numeric-8");
    });

    test("returns null for invalid PA licenses", () => {
        expect(validateLicense("PA", "1234567")).toBe(null);
        expect(validateLicense("PA", "123456789")).toBe(null);
    });

    test("returns the correct pattern for valid RI licenses", () => {
        expect(validateLicense("RI", "1234567")).toBe("numeric-7");
        expect(validateLicense("RI", "A123456")).toBe("alpha-1-numeric-6");
    });

    test("returns null for invalid RI licenses", () => {
        expect(validateLicense("RI", "123456")).toBe(null);
        expect(validateLicense("RI", "12345678")).toBe(null);
        expect(validateLicense("RI", "A12345")).toBe(null);
        expect(validateLicense("RI", "A1234567")).toBe(null);
    });

    test("returns the correct pattern for valid SC licenses", () => {
        expect(validateLicense("SC", "12345")).toBe("numeric-5-to-11");
        expect(validateLicense("SC", "1234567")).toBe("numeric-5-to-11");
        expect(validateLicense("SC", "12345678901")).toBe("numeric-5-to-11");
    });

    test("returns null for invalid SC licenses", () => {
        expect(validateLicense("SC", "1234")).toBe(null);
        expect(validateLicense("SC", "123456789012")).toBe(null);
    });

    test("returns the correct pattern for valid SD licenses", () => {
        expect(validateLicense("SD", "123456")).toBe("numeric-6-to-10");
        expect(validateLicense("SD", "12345678")).toBe("numeric-6-to-10");
        expect(validateLicense("SD", "1234567890")).toBe("numeric-6-to-10");
        expect(validateLicense("SD", "123456789012")).toBe("numeric-12");
    });

    test("returns null for invalid SD licenses", () => {
        expect(validateLicense("SD", "12345")).toBe(null);
        expect(validateLicense("SD", "12345678901")).toBe(null);
        expect(validateLicense("SD", "1234567890123")).toBe(null);
    });

    test("returns the correct pattern for valid TN licenses", () => {
        expect(validateLicense("TN", "1234567")).toBe("numeric-7-to-9");
        expect(validateLicense("TN", "12345678")).toBe("numeric-7-to-9");
        expect(validateLicense("TN", "123456789")).toBe("numeric-7-to-9");
    });

    test("returns null for invalid TN licenses", () => {
        expect(validateLicense("TN", "123456")).toBe(null);
        expect(validateLicense("TN", "1234567890")).toBe(null);
        expect(validateLicense("TN", "123456789A")).toBe(null);
        expect(validateLicense("TN", "A123456789")).toBe(null);
    });

    test("returns the correct pattern for valid TX licenses", () => {
        expect(validateLicense("TX", "1234567")).toBe("numeric-7-to-8");
        expect(validateLicense("TX", "12345678")).toBe("numeric-7-to-8");
    });

    test("returns null for invalid TX licenses", () => {
        expect(validateLicense("TX", "123456")).toBe(null);
        expect(validateLicense("TX", "123456789")).toBe(null);
        expect(validateLicense("TX", "12345678A")).toBe(null);
    });

    test("returns the correct pattern for valid UT licenses", () => {
        expect(validateLicense("UT", "1234")).toBe("numeric-4-to-10");
        expect(validateLicense("UT", "1234567")).toBe("numeric-4-to-10");
        expect(validateLicense("UT", "1234567890")).toBe("numeric-4-to-10");
    });

    test("returns null for invalid UT licenses", () => {
        expect(validateLicense("UT", "123")).toBe(null);
        expect(validateLicense("UT", "123ABFD")).toBe(null);
        expect(validateLicense("UT", "12345678901")).toBe(null);
    });

    test("returns the correct pattern for valid VT licenses", () => {
        expect(validateLicense("VT", "12345678")).toBe("numeric-8");
        expect(validateLicense("VT", "1234567A")).toBe("numeric-7-suffix-a");
    });

    test("returns null for invalid VT licenses", () => {
        expect(validateLicense("VT", "1234567")).toBe(null);
        expect(validateLicense("VT", "123456789")).toBe(null);
        expect(validateLicense("VT", "12345678A")).toBe(null);
        expect(validateLicense("VT", "123456A")).toBe(null);
        expect(validateLicense("VT", "A1234567")).toBe(null);
        expect(validateLicense("VT", "1234567B")).toBe(null);
    });

    test("returns the correct pattern for valid VA licenses", () => {
        expect(validateLicense("VA", "A12345678")).toBe("alpha-1-numeric-8-to-11");
        expect(validateLicense("VA", "A12345678901")).toBe("alpha-1-numeric-8-to-11");
        expect(validateLicense("VA", "A1234567890")).toBe("alpha-1-numeric-8-to-11");
        expect(validateLicense("VA", "123456789")).toBe("numeric-9");
    });

    test("returns null for invalid VA licenses", () => {
        expect(validateLicense("VA", "A123456789124")).toBe(null);
        expect(validateLicense("VA", "1234567890")).toBe(null);
        expect(validateLicense("VA", "12345678")).toBe(null);
        expect(validateLicense("VA", "A1234567")).toBe(null);
    });

    test("returns the correct pattern for valid WI licenses", () => {
        expect(validateLicense("WI", "A1234567890123")).toBe("alpha-1-numeric-13");
    });

    test("returns null for invalid WI licenses", () => {
        expect(validateLicense("WI", "A123456789012")).toBe(null);
        expect(validateLicense("WI", "A12345678901234")).toBe(null);
        expect(validateLicense("WI", "1234567890123")).toBe(null);
        expect(validateLicense("WI", "123456A7890123")).toBe(null);
    });

    test("returns the correct pattern for valid WY licenses", () => {
        expect(validateLicense("WY", "123456789")).toBe("numeric-9-to-10");
        expect(validateLicense("WY", "1234567890")).toBe("numeric-9-to-10");
    });

    test("returns null for invalid WY licenses", () => {
        expect(validateLicense("WY", "12345678")).toBe(null);
        expect(validateLicense("WY", "12345678901")).toBe(null);
        expect(validateLicense("WY", "A12345678901")).toBe(null);
    });

    test("returns the correct pattern for valid WA licenses", () => {
        expect(validateLicense("WA", "ABCD12345678")).toBe("alpha-1-to-7-numeric-alpha-5-to-11");
        expect(validateLicense("WA", "EE1B39423jdg")).toBe("alpha-1-to-7-numeric-alpha-5-to-11");
        expect(validateLicense("WA", "ABCGHGF28kd0")).toBe("alpha-1-to-7-numeric-alpha-5-to-11");
    });

    test("returns null for invalid WA licenses", () => {
        expect(validateLicense("WA", "ABCD1234")).toBe(null);
        expect(validateLicense("WA", "ABCDE123")).toBe(null);
        expect(validateLicense("WA", "ABCDEFGH12349")).toBe(null);
        expect(validateLicense("WA", "1234ABCDEFGH")).toBe(null);
    });

    test("returns the correct pattern for valid WV licenses", () => {
        expect(validateLicense("WV", "AB12345")).toBe("alpha-1-to-2-numeric-5-to-6");
        expect(validateLicense("WV", "AB123456")).toBe("alpha-1-to-2-numeric-5-to-6");
        expect(validateLicense("WV", "A12345")).toBe("alpha-1-to-2-numeric-5-to-6");
        expect(validateLicense("WV", "A123456")).toBe("alpha-1-to-2-numeric-5-to-6");
        expect(validateLicense("WV", "1234567")).toBe("numeric-7");
    });

    test("returns null for invalid WV licenses", () => {
        expect(validateLicense("WV", "123456")).toBe(null);
        expect(validateLicense("WV", "12345678")).toBe(null);
        expect(validateLicense("WV", "ABCD123")).toBe(null);
        expect(validateLicense("WV", "ABCDE12")).toBe(null);
        expect(validateLicense("WV", "A12B456")).toBe(null);
        expect(validateLicense("WV", "12B456")).toBe(null);
    });

    test("returns error for non-existent state", () => {
        // @ts-ignore
        expect(() => validateLicense("PR", "123456")).toThrowError(/State PR not supported/);
    });
});

describe("matchLicense", () => {
    test("returns matched states", () => {
        expect(matchLicense("12345678")).toStrictEqual({
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
