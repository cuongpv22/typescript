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

function add (num1: number,num2?: number):number{
    if(num2)
    return num1 + num2;
    else return num1;

}

function add1 (num1: number,num2: number = 20) :number{
    if(num2)
    return num1 + num2;
    else return num1;

}
interface Person {
    firstName : string,
    lastName? : string
}
function fullName (person:Person){
    console.log(`${person.firstName} ${person.lastName}`);
}
let p = {
    firstName : 'Leo',
    lastName : 'Messi'
};
fullName(p);


class Employee {
  private  employeeName : string;
    constructor (name: string){
        this.employeeName = name;
    }
    greet(){
        console .log(`Good morning : ${this.employeeName}`);
    }
}
let emp1 = new Employee ('Leo');
emp1.greet();

class Manager extends Employee {
    constructor(managerName : string){
        super(managerName);
    }
    delegateWork(){
        console.log(`Manager delegating task`);
    }
}

let m1 = new Manager( 'Messi');
m1.delegateWork();
m1.greet();