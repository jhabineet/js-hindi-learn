const accountId=144553;
let accountEmail="bineetjha0@gmail.com"; //basically we are using 'let' keyword
var accountPassword="12345"; // 'var' was used earlier due to the problem of scope,so we will not be using var instead we will use 'let'
accountCity="Jaipur";  //This is not a good practise

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail="bineetjha10@gmail.com";
accountPassword="123456";
accountCity="Jaipuriya";


console.table([accountEmail, accountPassword, accountCity, accountCity]);