export const operationReg = /\+|\/|\*|-/;
const displayReg = /([0-9]|\+|\/|\*|-|\.)+/g;

export function getLastNumber(displayValue: string) {
    return displayValue.split(operationReg).slice(-1)[0];
}

export function isLastCharOperator(displayValue: string) {
    return operationReg.test(displayValue.trim().split(' ').slice(-1)[0]);
}

export function isError(displayValue: string) {
    const checking = displayValue.replace(/\s/g, "").match(displayReg);
    if (checking && checking.length === 1) {
        return false;
    }

    return true;
}

export function isNumberPositive(displayValue: string) {
    const arr = displayValue.split(' ').filter(n => n !== '');
    if (arr[arr.length - 2] === "-" &&
        (operationReg.test(arr[arr.length - 3]) ||
            !arr[arr.length - 3])) return false;

    return true;
}

function checkOperatorsSpaces(n: string) {
    if (n === " ") return "";
    if (operationReg.test(n)) {
        return ` ${n} `;
    }

    return n;
}

export function deleteLastNumber(displayValue: string) {
    const arr = displayValue.split(' ')
        .filter(n => n !== '')
        .map(checkOperatorsSpaces)
    const deleted = arr.pop();
    return {
        valueWithoutLastNumber: arr,
        deleted
    }
}



export function reviveSpaces(displayValue: string): string {
    return displayValue
        .split('')
        .map(checkOperatorsSpaces)
        .join('');
}

export function deleteNotNeededZeros(displayValue: string): string {
    let [naturalPiece, floatPiece] = displayValue.split('.');
    if (!floatPiece || floatPiece[floatPiece.length - 1] !== "0") {
        return `${naturalPiece}${floatPiece && '.'}${floatPiece && floatPiece}`;
    } else {
        floatPiece = floatPiece.slice(0, -1);

        return deleteNotNeededZeros(`${naturalPiece}.${floatPiece}`);
    }
}