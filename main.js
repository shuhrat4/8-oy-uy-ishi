"use strict";
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
