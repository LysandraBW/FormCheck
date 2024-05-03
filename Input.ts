import { Condition } from "./Condition/Condition";
import booleanExpressionToCondition from "./Condition/ConditionLogic";
import { CompositeCondition, AND, TYPE_AND } from "./Condition/Composite/Condition";
import { SimpleCondition } from "./Condition/Simple/Condition";
import { toList } from "./Grammar/Build";

export default class Input {
    #context: string;
    #condition: CompositeCondition = AND([]);
    #shortCircuit: boolean;

    constructor(context: string | undefined = undefined, condition: Condition | undefined = undefined, shortCircuit: boolean = false) {
        if (context)
            this.#context = context;

        if (condition)
            this.setCondition(condition);
        
        this.#shortCircuit = shortCircuit;
    }

    setErrorMessageContext(context: string) {
        this.#context = context;
    }

    setShortCircuit(shortCircuit: boolean) {
        this.#shortCircuit = shortCircuit;
    }

    setCondition(condition: Condition) {
        if (condition instanceof CompositeCondition) {
            this.#condition = condition;
        }
        else if (condition instanceof SimpleCondition) {
            this.#condition = AND([condition]);
        }
    }

    setConditionByBoolean(booleanExpression: string, conditions: {[key: string]: Condition}) {
        const condition =  booleanExpressionToCondition(booleanExpression, conditions);
        
        if (condition instanceof CompositeCondition) {
            this.#condition = condition as CompositeCondition;
        }
        else if (condition instanceof SimpleCondition) {
            this.#condition = AND([condition]);
        }
    }

    addCondition(condition: Condition) {
        this.#condition.conditions.push(condition);
    }

    checkInput(inputValue: string): string | undefined {
        const result = this.#checkCondition(this.#condition, inputValue);
        if (!result) {
            return undefined;
        }
        return this.#context + " " + result[1] + ".";
    }

    #checkCondition(condition: Condition, inputValue: string): Array<string> | undefined {
        if (condition instanceof SimpleCondition) {
            if (condition.test(inputValue)) {
                return undefined;
            }
            return [condition.command, condition.condition];
        }
        else if (condition instanceof CompositeCondition) {
            const allConditions: Array<boolean> = [];
            const failedConditions: Array<Array<string>> = [];

            for (const subCondition of condition.conditions) {
                const result = this.#checkCondition(subCondition, inputValue);
                
                if (!result) {
                    allConditions.push(true);
                }
                else {
                    allConditions.push(false);
                    failedConditions.push(result);
                }
                
                if (result && this.#shortCircuit && condition.type === TYPE_AND) {
                    break;
                }
            }

            if (condition.test(allConditions)) {
                return undefined;
            }

            const subConditions: Array<any> = [];
            for (const cond of failedConditions) {
                subConditions.push(cond[0] + " " + cond[1]);
            }

            return ["", toList(subConditions, condition.conjunction)];
        }
    }
}