

//number
let num1: number = 10;
//num1 = "asdassd";   // en typescript ya no podemos cambiar el tipo de dato
num1 = 1000;            // en typescript si podemos cambiar el valor siendo del mismo tipo

//string
let myString: string = "pepito";

//boolean
let myBoolean:boolean = false;

//undefined
let varUndefined: undefined = undefined;

//null
let varNull: null = null;

//object
let kitty: object = {
    name: "kitty",
    age: "1",
    color: "orange"
}


//array
let numeros: number[] = [1, 2, 3, 4, 5];
let numeros2: Array<number> = [1,3,4];

//varios tipos
let edad: number | string | null = "20/05/78";
edad = 45;
edad = null;

let arrayNumerosStrings: (number | string)[] =  [2, "pepe", 5]


//any : acepta cualquiera
let variable: any = "pepito";
variable = 5;
variable = null;
variable = [3, 6, 8]


//unknown
let variable2: unknown = "pepito";
variable2 = null;
variable2 = 4;
