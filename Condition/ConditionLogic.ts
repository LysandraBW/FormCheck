import { Condition } from "./Condition";
import { AND, OR } from "./Composite/Condition";

const Token = {
    OpenP: "(",
    CloseP: ")",
    And: "&",
    Or: "|",
    LAnd: "&&",
    LOr: "||"
}

// Stores Parts of a Conditions
interface ConditionParts {
    operator: string;
    conditions: Array<Condition>;
}

// Looks Ahead of Boolean Expression
const peek = (str: string, booleanExp: string, index: number): boolean => {
    return booleanExp.substring(index, index + str.length) === str;
}

// Builds Condition from ConditionParts
const buildCondition = (parts: ConditionParts): Condition => {
    let condition: Condition;

    // Simple Condition
    if (!parts.operator) {
        condition = parts.conditions[0];
    }
    // Composite Condition
    else {
        switch (parts.operator) {
            case Token.LOr:
                condition = OR(parts.conditions);
                break;
            default:
                condition = AND(parts.conditions);
                break;
        }
    }

    return condition;
}

// Reads in the Name of a Condition
const readConditionName = (booleanExpression: string, index: number): string => {
    let conditionName = "";

    while (index < booleanExpression.length) {
        const char: string = booleanExpression[index];
        if (char !== Token.Or && char !== Token.And &&char !== Token.OpenP && char !== Token.CloseP)
            conditionName += char;
        else
            break;
        index++;
    }

    return conditionName;
}

// Builds Condition from Boolean Expression
export default function booleanExpressionToCondition(booleanExp: string, conditions: {[key: string]: Condition}): Condition {
    let index = 0;
    const booleanExpression = "(" + booleanExp.replace(/\s/g, "") + ")";

    const match = (str: string): boolean => {
        if (peek(str, booleanExpression, index)) {
            index += str.length;
            return true;
        }
        return false;
    }

    const buffer: Array<ConditionParts> = [];
    buffer.push({operator: Token.LAnd, conditions: []});

    while (index < booleanExpression.length) {
        if (match(Token.OpenP)) {
            buffer.push({operator: "", conditions: []});
        }
        else if (match(Token.CloseP)) {
            let bufferCondition = buffer.pop();
            
            if (!bufferCondition) {
                throw new Error("Empty Buffer");
            }

            let condition = buildCondition(bufferCondition);
            buffer[buffer.length - 1].conditions.push(condition);
        }
        else if (match(Token.LAnd)) {
            buffer[buffer.length - 1].operator = Token.LAnd;
        }
        else if (match(Token.LOr)) {
            buffer[buffer.length - 1].operator = Token.LOr;
        }
        else {
            let name = readConditionName(booleanExpression, index);

            if (!conditions.hasOwnProperty(name)) {
                throw new Error("Missing Condition");
            }

            index += name.length;
            buffer[buffer.length - 1].conditions.push(conditions[name]);
        }
    }

    if (!buffer || !buffer[0] || !buffer[0].conditions[0]) {
        throw new Error("Empty Buffer at End");
    }

    return buffer[0].conditions[0];
}