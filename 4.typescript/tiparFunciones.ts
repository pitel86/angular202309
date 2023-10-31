const suma = (a: number, b: number):number => {
    return a + b;
}

function suma2(a: number, b: number): number{
    return a + b;
}

function newArray(array: number[], num: number): number[] {
    return [...array, num];
}

newArray([4, 6, 8], 9)