export{};
let msg = 'Welcome back';
console.log(msg);
let x = 10 ;
const y = 20;
let sum ;
const title = 'Codevolution ' ;
let isBeginer: boolean = true;
let total: number = 0;
let name: string = 'Vishas';
let sentence: string  = `My name is ${name}
I am a beginner in typscript`;
console.log(sentence);
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];
let person1: [string, number] = ['Leo',22];

enum Color{Red=2, Green, Blue};
let c: Color = Color.Green;

console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Leo';

let myVariable: any = 10;

console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();
