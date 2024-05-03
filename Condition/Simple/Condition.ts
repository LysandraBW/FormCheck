import { Condition } from "../Condition";
import * as Test from "./Check/Bools.ts";
import * as Grammar from "../../Grammar/Word";

export class SimpleCondition extends Condition {
    command: string;
    condition: string;

    constructor(test: (...args: any[]) => boolean, command: string = DEF.HasInput[0], condition: string = DEF.HasInput[1]) {
        super(test);
        this.command = command;
        this.condition = condition;
    }
}

export function makeSimpleCondition(test: (...args: any[]) => boolean, command: string = DEF.HasInput[0], condition: string = DEF.HasInput[1]) {
    return new SimpleCondition(test, command, condition);
}

const DEF = {
    HasInput:           [Grammar.COMMAND_ENTER, "a value"],
    HasNonEmptyInput:   [Grammar.COMMAND_ENTER, "a value"],
    HasInputs:          [Grammar.COMMAND_SELECT, "at least one value"],
    InputIn:            [Grammar.COMMAND_SELECT, "all values from the given options"],
    InputsIn:           [Grammar.COMMAND_SELECT, "all values from the given options"],
    IsName:             [Grammar.COMMAND_BE, "a valid name"],
    IsPhoneNumber:      [Grammar.COMMAND_BE, "a valid phone number"],
    IsEmailAddress:     [Grammar.COMMAND_BE, "a valid email address"],
    IsVIN:              [Grammar.COMMAND_BE, "a valid VIN"],
    IsLicensePlate:     [Grammar.COMMAND_BE, "a valid license plate"],
    IsCardNumber:       [Grammar.COMMAND_BE, "a valid card number"],
    IsExpirationDate:   [Grammar.COMMAND_BE, "a valid expiration date"],
    IsCVV:              [Grammar.COMMAND_BE, "a valid CVV"],
    IsNumber:           [Grammar.COMMAND_BE, "a valid number"],
    IsFloat:            [Grammar.COMMAND_BE, "a valid float"],
    IsPrice:            [Grammar.COMMAND_BE, "a valid price"],
    NoSymbols:          [Grammar.COMMAND_NOT_HAVE, "symbols"],
    NoNumbers:          [Grammar.COMMAND_NOT_HAVE, "numbers"],
    NoLetters:          [Grammar.COMMAND_NOT_HAVE, "letters"],
    HaveSymbols:        [Grammar.COMMAND_HAVE, "symbols"],
    HaveNumbers:        [Grammar.COMMAND_HAVE, "numbers"],
    HaveLetters:        [Grammar.COMMAND_HAVE, "letters"],
    OnlySymbols:        [Grammar.COMMAND_ONLY_HAVE, "symbols"],
    OnlyNumbers:        [Grammar.COMMAND_ONLY_HAVE, "numbers"],
    OnlyLetters:        [Grammar.COMMAND_ONLY_HAVE, "letters"],
    HasLength:          [Grammar.COMMAND_HAVE],
    HasMinimumLength:   [Grammar.COMMAND_HAVE],
    HasMaximumLength:   [Grammar.COMMAND_HAVE],
    HasSize:            [Grammar.COMMAND_SELECT],
    HasMinimumSize:     [Grammar.COMMAND_SELECT],
    HasMaximumSize:     [Grammar.COMMAND_SELECT]
}

// 1. Existence Conditions

export function HasInput(command: string = DEF.HasInput[0], condition: string = DEF.HasInput[1]) {
    return makeSimpleCondition(Test.hasInput, command, condition);
}

export function HasNonEmptyInput(command: string = DEF.HasNonEmptyInput[0], condition: string = DEF.HasNonEmptyInput[1]) {
    return makeSimpleCondition(Test.hasNonEmptyInput, command, condition);
}

export function HasInputs(command: string = DEF.HasInputs[0], condition: string = DEF.HasInputs[1]) {
    return makeSimpleCondition(Test.hasInputs, command, condition);
}

export function InputIn(options: Array<string>, command: string = DEF.InputIn[0], condition: string = DEF.InputIn[1]) {
    const test = (input: string) => Test.inputIn(input, options);
    return makeSimpleCondition(test, command, condition);
}

export function InputsIn(options: Array<string>, command: string = DEF.InputsIn[0], condition: string = DEF.InputsIn[1]) {
    const test = (input: Array<string>) => Test.inputsIn(input, options);
    return makeSimpleCondition(test, command, condition);
}

// 2. State Conditions

export function IsName(command: string = DEF.IsName[0], condition: string = DEF.IsName[1]) {
    return makeSimpleCondition(Test.isName, command, condition);
}

export function IsPhoneNumber(command: string = DEF.IsPhoneNumber[0], condition: string = DEF.IsPhoneNumber[1]) {
    return makeSimpleCondition(Test.isPhoneNumber, command, condition);
}

export function IsEmailAddress(command: string = DEF.IsEmailAddress[0], condition: string = DEF.IsEmailAddress[1]) {
    return makeSimpleCondition(Test.isEmailAddress, command, condition);
}

export function IsVIN(command: string = DEF.IsVIN[0], condition: string = DEF.IsVIN[1]) {
    return makeSimpleCondition(Test.isVIN, command, condition);
}

export function IsLicensePlate(command: string = DEF.IsLicensePlate[0], condition: string = DEF.IsLicensePlate[1]) {
    return makeSimpleCondition(Test.isLicensePlate, command, condition);
}

export function IsCardNumber(command: string = DEF.IsCardNumber[0], condition: string = DEF.IsCardNumber[1]) {
    return makeSimpleCondition(Test.isCardNumber, command, condition);
}

export function IsExpirationDate(command: string = DEF.IsExpirationDate[0], condition: string = DEF.IsExpirationDate[1]) {
    return makeSimpleCondition(Test.isExpirationDate, command, condition);
}

export function IsCVV(command: string = DEF.IsCVV[0], condition: string = DEF.IsCVV[1]) {
    return makeSimpleCondition(Test.isCVV, command, condition);
}

export function IsNumber(command: string = DEF.IsNumber[0], condition: string = DEF.IsNumber[1]) {
    return makeSimpleCondition(Test.isNumber, command, condition);
}

export function IsFloat(command: string = DEF.IsFloat[0], condition: string = DEF.IsFloat[1]) {
    return makeSimpleCondition(Test.isFloat, command, condition);
}

export function IsPrice(command: string = DEF.IsPrice[0], condition: string = DEF.IsPrice[1]) {
    return makeSimpleCondition(Test.isPrice, command, condition);
}

// 3. Containment Conditions

export function NoSymbols(command: string = DEF.NoSymbols[0], condition: string = DEF.NoSymbols[1]) {
    return makeSimpleCondition(Test.noSymbols, command, condition);
}

export function NoNumbers(command: string = DEF.NoNumbers[0], condition: string = DEF.NoNumbers[1]) {
    return makeSimpleCondition(Test.noNumbers, command, condition);
}

export function NoLetters(command: string = DEF.NoLetters[0], condition: string = DEF.NoLetters[1]) {
    return makeSimpleCondition(Test.noLetters, command, condition);
}

export function HaveSymbols(command: string = DEF.HaveSymbols[0], condition: string = DEF.HaveSymbols[1]) {
    return makeSimpleCondition(Test.haveSymbols, command, condition);
}

export function HaveNumbers(command: string = DEF.HaveNumbers[0], condition: string = DEF.HaveNumbers[1]) {
    return makeSimpleCondition(Test.haveNumbers, command, condition);
}

export function HaveLetters(command: string = DEF.HaveLetters[0], condition: string = DEF.HaveLetters[1]) {
    return makeSimpleCondition(Test.haveLetters, command, condition);
}

export function OnlySymbols(command: string = DEF.OnlySymbols[0], condition: string = DEF.OnlySymbols[1]) {
    return makeSimpleCondition(Test.onlySymbols, command, condition);
}

export function OnlyNumbers(command: string = DEF.OnlyNumbers[0], condition: string = DEF.OnlyNumbers[1]) {
    return makeSimpleCondition(Test.onlyNumbers, command, condition);
}

export function OnlyLetters(command: string = DEF.OnlyLetters[0], condition: string = DEF.OnlyLetters[1]) {
    return makeSimpleCondition(Test.onlyLetters, command, condition);
}

// 4. Length Conditions

export function HasLength(length: number, command: string = DEF.HasLength[0], condition: string = `${length} values`) {
    const test = (input: string) => Test.hasLength(input, length);
    return makeSimpleCondition(test, command, condition);
}

export function HasMinimumLength(minLength: number, command: string = DEF.HasMinimumLength[0], condition: string = `at least ${minLength} values`) {
    const test = (input: string) => Test.hasMinimumLength(input, minLength);
    return makeSimpleCondition(test, command, condition);
}

export function HasMaximumLength(maxLength: number, command: string = DEF.HasMaximumLength[0], condition: string = `at most ${maxLength} values`) {
    const test = (input: string) => Test.hasMaximumLength(input, maxLength);
    return makeSimpleCondition(test, command, condition);
}

export function HasSize(size: number, command: string = DEF.HasSize[0], condition: string = `${size} values`) {
    const test = (inputs: Array<string>) => Test.hasSize(inputs, size);
    return makeSimpleCondition(test, command, condition);
}

export function HasMinimumSize(minSize: number, command: string = DEF.HasMinimumSize[0], condition: string = `at least ${minSize} values`) {
    const test = (inputs: Array<string>) => Test.hasMinimumSize(inputs, minSize);
    return makeSimpleCondition(test, command, condition);
}

export function HasMaximumSize(maxSize: number, command: string = DEF.HasMaximumSize[0], condition: string = `at most ${maxSize} values`) {
    const test = (inputs: Array<string>) => Test.hasMaximumSize(inputs, maxSize);
    return makeSimpleCondition(test, command, condition);
}