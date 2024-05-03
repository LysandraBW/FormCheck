export class Condition {
    test: ((...args: any[]) => boolean) | ((bools: Array<boolean>) => boolean);
}

export class SimpleCondition extends Condition {
    command: string;
    condition: string;
}

export class CompositeCondition extends Condition {
    conjunction: string;
    conditions: Array<Condition> = [];
}