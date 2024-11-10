// 1

// let newValue: string | null = prompt("Qiymat kiriting");
// let list: string[] = [];

// function collectList(value: string | null): void {
//     if (value) {
//         list.push(value);
//     }
// }

// collectList(newValue);
// console.log(list); 

// 2

// let numberList:number[]= [21, 32, 45, 54, 67, 87]

// function findMaxNumber(arr:number[]):number{
//     let maxNum:number = arr [0]
//     for(let num of arr ){
//         if(num>=maxNum ){
//             maxNum = num
//         }
//     }
//     return maxNum
// }
// const result:number = findMaxNumber(numberList)
// console.log(result);

// 3

// let value:string | null = prompt('soz kiriting')
// let list:string[] = ['salom', 'yaxshi', 'zor', ]

// function findvalue(newValue:string | null , arr:string[]):void{
//     let count:number = 0 
//     arr.forEach((item:string)=>{
//         if(item == newValue){
//             count++
//         }
//     })
//     console.log(count > 0 ? true : false);
// }
// findvalue(value,list)

// 4

// function sum(arr: Array<number>): Array<number> {
//     return arr.filter(num => num % 2 === 0);
// }

// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(sum(numberArray));


// 5

// function sumArray(arr: Array<number>): number {
//     return arr.reduce((sum, num) => sum + num, 0);
// }

// const numsArray = [10, 20, 30, 40];
// console.log(sumArray(numsArray)); 



// 6
// type UserType = {
//     id:number
//     name:string
//     email:string
//     address:string
//     password:string | number
// }

// type ResultType = {
//     name:string
//     email:string
// }

// const userList:Array<UserType> = [ 
//     {
//         id:1,
//         name:"Hello",
//         email:"nodir@gmail.com",
//         address:"Chilonzor",
//         password:123
//     },
//     {
//         id:2,
//         name:"Salom",
//         email:"botir@gmail.com",
//         address:"Bunyodkor",
//         password:162
//     }
// ]

// function namesAndEmails(arr:Array<UserType>):ResultType[]{
//     let res:Array<ResultType> = [];
//     arr.forEach((item:UserType) => {
//         const data:ResultType = {name:item.name,email:item.email}
//         return res.push(data)
//     })
//     return res
// }

// console.log(namesAndEmails(userList));


// 7 Masala 
// type UserType = {
//     id: number;
//     name: string;
//     email: string;
//     address: string;
//     password: string | number;
// };

// const userList: Array<UserType> = [
//     { id: 1, name: "Hello", email: "hello@gmail.com", address: "Chilonzor", password: 123 },
//     { id: 2, name: "Salom", email: "salom@gmail.com", address: "Bunyodkor", password: 162 },
//     { id: 3, name: "Salom", email: "bilmadim@gmail.com", address: "Bunyodkor", password: 162 },
//     { id: 4, name: "Salom", email: "qanday@gmail.com", address: "Bunyodkor", password: 162 },
//     { id: 5, name: "Salom", email: "yaxshi@gmail.com", address: "Bunyodkor", password: 162 },
//     { id: 6, name: "Salom", email: "hjca@gmail.com", address: "Bunyodkor", password: 162 },
//     { id: 7, name: "Oyatillo", email: "Oyatillo@gmail.com", address: "Bunyodkor", password: 162 }
// ];

// let userId: number = Number(prompt("Userning ID-sini kiriting:"));

// function findUser(arr: Array<UserType>, id: number): string {
//     const foundUser: UserType | undefined = arr.find((item: UserType) => item.id === id);
//     return foundUser ? foundUser.address : 'Bunday user mavjud emas';
// }

// console.log(findUser(userList, userId));

// 8

// function revers(users: Array<UserType>): Array<string> {
//     return users.map(user => user.name);
// }

// console.log(revers(usersList));

// 9

// function num1(arr1: Array<number>, arr2: Array<number>): Array<string> {
//     const max1 = Math.max(...arr1);
//     const max2 = Math.max(...arr2);
//     return [max1.toString(), max2.toString()];
// }

// const array1 = [3, 5, 7, 2];
// const array2 = [9, 12, 1, 4];
// console.log(num1(array1, array2)); 

// 10

// function num(arr: Array<number>): { even: Array<number>, odd: Array<number> } {
//     const even = arr.filter(num => num % 2 === 0);
//     const odd = arr.filter(num => num % 2 !== 0);
//     return { even, odd };
// }

// const mixedNumbers = [-3, -2, -1, 0, 1, 2, 3, 4, 5];
// console.log(num(mixedNumbers));


// 2-rasm masalalar

// 1
// function reverseNums(num:number):number{
//     return Number(String(num).split("").reverse().join(""))
// }
// console.log(reverseNums(123));


// 2

// function factorial(num: number): number {
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(5)); 

// 3

// type Person = {
//     name: string;
//     age: number;
// };

// function findOldest(person1: Person, person2: Person, person3: Person): string {
//     const oldest = [person1, person2, person3].reduce((prev, current) => 
//         (current.age > prev.age ? current : prev)
//     );
//     return oldest.name;
// }

// const personA = { name: "Ali", age: 25 };
// const personB = { name: "Bob", age: 30 };
// const personC = { name: "Charlie", age: 28 };

// console.log(findOldest(personA, personB, personC)); 

// 4

// function countdown(num: number): void {
//     if (num < 0) return;
//     console.log(num);
//     countdown(num - 1);
// }

// countdown(5); 

// 5

// const user = { name: "Shaxzod" };
// const age = { age: 25 };
// const userJob = { job: "Developer" };

// const combined = { ...user, ...age, ...userJob };
// console.log(combined);


// 6

// const salaries = {
//     aXodim: 150,
//     bXodim: 180,
//     cXodim: 210
// };

// function totalSalary(salaries: { [key: string]: number }): number {
//     return Object.values(salaries).reduce((sum, salary) => sum + salary, 0);
// }

// console.log(totalSalary(salaries)); 

// 7

// function sum(arr: Array<number>): number | null {
//     if (arr.length === 0) return null;
//     return Math.max(...arr);
// }

// const num = [2, 4, 6, 8, 1];
// console.log(sum(num)); 

// 8

// const mixedArr = [2, 4, 6, 7, true, false, null, undefined];
// function sumArrayValues(arr: Array<any>): number {
//     return arr.reduce((sum, value) => sum + (typeof value === "number" ? value : 0), 0);
// }
// console.log(sumArrayValues(mixedArr)); 
