// console.log("hello world...@@")

// let radius="priya"
// let pi=3.142
// const area=pi*radius*radius
// console.log( typeof area);
// console.log(typeof pi);


//DATATYPES

//1]NUMBER
// let date=8   //number
// let user="priya"  //string

// let num1=25467623746245
// console.log(num1*25);
// console.log(typeof num1);
// console.log(typeof user);

// let num2=0xff  //hexadecimal
// console.log(num2);

// let num3=1.5e12   //exponential--> 1.5*10^12
// console.log(num3);

// let num4=10_00_00_00_000  //easy to know how many zeros are their.
// console.log(num4);

// let num5=5/0; //infinit (positive infinity)
// console.log(num5);

// let num6=-5/0;
// console.log(num6);

// console.log(Number.MAX_VALUE*10);

// let num33=1232323235233434333336   //loosing precision(unable to see the last digit.)
// console.log(num33);

//BIGINT
// let num34=1232323235233434333336n  //with bigint we'll not loose precision (we'll get the last digit too..)
// console.log(num34);

// let num35=1232323235233434333336n
// console.log(num35+2);//TypeError: Cannot mix BigInt and other types, use explicit conversions
 //at Object.

// let num36=1232323235233434333336n
// console.log(num36+2n);

//2]STRING
// STRING OPERATIONS
// let fname="priya"
// let lname="anka"
// user=fname+lname
// console.log(user);

//3] BOOLEAN
// let bool=5>6
// console.log(bool);
// console.log(typeof bool);

//4] NULL
// let user=null
// console.log(user);   //'null'
// console.log(typeof null);  //'object'

//5] UNDEFINED
// let user
// console.log(user);
// console.log(typeof user);

//NAN  /*interview queston*/
// let num=5
// console.log(5/"priya");   //'NAN'-->NOT A NUMBER-which is not a number
// console.log(typeof(5/"priya"));  //'number'



//TYPE CONVERSION AND TYPE COERCION

//1] TYPE CONVERSION
// let num=String(6)       //Explicit conversion
// console.log(num, typeof num);

//2] TYPE COERCION



// RELATIONAL OPERATORS in JavaSript

// console.log(7>5); //boolean value
// data=3>1
// console.log(data); // boolean value

// let x="Pen"
// let y="Book"
// console.log(x>y);  //true-->beacuse P>B , b comes first p comes after b(ascii value)
// let x="Pen"
// let y="Pencil"
// console.log(x>y);

// let x="2"
// let y=1
// console.log(x>y);  //true--> it converts 2 string to number.

let x="2"
let y=1
console.log(x===y)// checks value as well as datatype.in js always use this.


