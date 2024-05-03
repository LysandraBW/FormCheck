import { Condition } from "../Condition";
import { testAND, testOR, testXOR, testNAND } from "./Bools";
import { CONJUNCTION_AND, CONJUNCTION_OR } from "../../Grammar/Word";

export const TYPE_OR = "OR";
export const TYPE_AND = "AND";
export const TYPE_XOR = "XOR";
export const TYPE_NAND = "NAND";

export class CompositeCondition extends Condition {
    conjunction: string;
    conditions: Array<Condition> = [];
    type: string;

    constructor(test: (bools: Array<boolean>) => boolean, conjunction: string, conditions: Array<Condition>, type: string) {
        super(test);
        this.conjunction = conjunction;
        this.conditions = conditions === undefined ? [] : conditions;
        this.type = type;
    }
}

export function AND(conditions: Array<Condition>): CompositeCondition {
    const condition = new CompositeCondition(testAND, CONJUNCTION_AND, conditions, TYPE_AND);
    return condition;
}

export function OR(conditions: Array<Condition>): CompositeCondition {
    const condition = new CompositeCondition(testOR, CONJUNCTION_OR, conditions, TYPE_OR);
    return condition;
}

export function XOR(conditions: Array<Condition>): CompositeCondition {
    const condition = new CompositeCondition(testXOR, CONJUNCTION_OR, conditions, TYPE_XOR);
    return condition;
}

export function NAND(conditions: Array<Condition>): CompositeCondition {
    const condition = new CompositeCondition(testNAND, CONJUNCTION_OR, conditions, TYPE_NAND);
    return condition;
}

/* Not Yet
    I'm not sure how I'd allow the user to fully integrate the conditions they've made.
    Maybe I don't?
    export function makeCompositeCondition(test: (bools: Array<boolean>) => boolean, conjunction: string, conditions: Array<Condition>, type: string): CompositeCondition {
        const condition = new CompositeCondition(test, conjunction, conditions, type);
        return condition;
    }
*/