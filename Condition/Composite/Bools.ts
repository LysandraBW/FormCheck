export function testAND(bools: Array<boolean>): boolean {
    for (const bool of bools) {
        if (!bool) {
            return false;
        }
    }
    return true;
}

export function testOR(bools: Array<boolean>): boolean {
    for (const bool of bools) {
        if (bool) {
            return true;
        }
    }
    return false;
}

export function testXOR(bools: Array<boolean>): boolean {
    let boolCount: number = 0;

    for (const bool of bools) {
        if (bool) {
            boolCount++;
        }
    }
    return boolCount == 1;
}

export function testNAND(bools: Array<boolean>): boolean {
    for (const bool of bools) {
        if (bool) {
            return false;
        }
    }
    return true;
}