export function toList(clauses: string[], conjunction: string): string {
    const clauseLength: number = clauses.length;
    let list = "";

    switch (clauseLength) {
        case 1:
            list = clauses[0];
            break;
        case 2:
            list = `${clauses[0]} ${conjunction} ${clauses[1]}`;
            break;
        default:
            list = clauses.slice(0, clauseLength - 1).join(", ") + `, ${conjunction} ` + clauses[clauseLength - 1];
            break;
    }

    return list;
}