import * as Regex from "./Regex";

// Existence Tests

export function hasInput(input: string): boolean {
    return input.length > 0;
}

export function hasNonEmptyInput(input: string): boolean {
    return input.trim().length > 0;
}

export function hasInputs(inputs: Array<string>): boolean {
    return inputs.length > 0;
}

export function inputIn(input: string, options: Array<string>) {
    return options.includes(input);
}

export function inputsIn(inputs: Array<string>, options: Array<string>) {
    inputs.sort();
    options.sort();

    let currentIndex = -1;

    for (const input of inputs) {
        while (options[++currentIndex] != input) {
            if (currentIndex >= parent.length) {
                return false;
            }
        }
    }
    
    return true;
}

// State Tests

export function isName(input: string): boolean {
    return Regex.IS_NAME.test(input);
}

export function isPhoneNumber(input: string): boolean {
    return Regex.IS_PHONE_NUMBER.test(input);
}

export function isEmailAddress(input: string): boolean {
    return Regex.IS_EMAIL_ADDRESS.test(input);
}

export function isVIN(input: string): boolean {
    return Regex.IS_VIN.test(input);
}

export function isLicensePlate(input: string): boolean {
    return Regex.IS_LICENSE_PLATE.test(input);
}

export function isCardNumber(input: string): boolean {
    return Regex.IS_CARD_NUMBER.test(input);
}

export function isExpirationDate(input: string): boolean {
    return Regex.IS_EXPIRATION_DATE.test(input);
}

export function isCVV(input: string): boolean {
    return Regex.IS_CVV.test(input);
}

export function isNumber(input: string): boolean {
    return Regex.IS_NUMBER.test(input);
}

export function isFloat(input: string): boolean {
    return Regex.IS_FLOAT.test(input);
}

export function isPrice(input: string): boolean {
    return Regex.IS_PRICE.test(input);
}

// Containment Tests

export function noSymbols(input: string): boolean {
    return !input.match(Regex.HAS_SYMBOL);
}

export function noNumbers(input: string): boolean {
    return !input.match(Regex.HAS_NUMBER);
}

export function noLetters(input: string): boolean {
    return !input.match(Regex.HAS_LETTER);
}

export function haveSymbols(input: string): boolean {
    return input.match(Regex.HAS_SYMBOL) !== null;
}

export function haveNumbers(input: string): boolean {
    return input.match(Regex.HAS_NUMBER) !== null;
}

export function haveLetters(input: string): boolean {
    return input.match(Regex.HAS_LETTER) !== null;
}

export function onlySymbols(input: string): boolean {
    return Regex.ONLY_SYMBOLS.test(input);
}

export function onlyNumbers(input: string): boolean {
    return Regex.ONLY_NUMBERS.test(input);
}

export function onlyLetters(input: string): boolean {
    return Regex.ONLY_LETTERS.test(input);
}

// Length Tests

export function hasLength(input: string, length: number) {
    return input.length === length;
}

export function hasMinimumLength(input: string, minLength: number): boolean {
    return input.length >= minLength;
}

export function hasMaximumLength(input: string, maxLength: number): boolean {
    return input.length <= maxLength;
}

export function hasSize(inputs: Array<string>, size: number) {
    return inputs.length === size;
}

export function hasMinimumSize(inputs: Array<string>, minSize: number) {
    return inputs.length >= minSize;
}

export function hasMaximumSize(inputs: Array<string>, maxSize: number) {
    return inputs.length <= maxSize;
}