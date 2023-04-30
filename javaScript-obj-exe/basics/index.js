
//1]  REVERSE A STRING
// var str='priya'
// var rev=''
// for(i=str.length-1;i>=0;i--)
// {
//    rev=rev+str[i]
// }
// console.log(rev)

//2] NUMBER MATCH

// const num=Math.ceil(Math.random()*10);
// console.log(num)
//  const gnum=prompt('guess the number')
//  if(gnum==num)
// {
//      console.log('matched')
//  }else{
//     console.log('not matched')
//  }

// var num1=document.getElementById('fname').value
// var num2=document.getElementById('lname').value
// function mul(){
// document.getElementById('res').innerHTML=num1+num2
// }
// function div(){
// num1/num2
// document.getElementById('res').innerHTML=num1/num2
// }

// function multiplyBy()
// {
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
//         document.getElementById("result").innerHTML = num1 * num2;
// }

// function divideBy() 
// { 
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
// document.getElementById("result").innerHTML = num1 / num2;
// }

// function multiply(){
//         num1=document.getElementById('first_num').value
//         num2=document.getElementById('Sec_num').value
//         document.getElementById('Result').innerHTML=num1*num2
       
// }


// const MyObj={
//         name:"priya",
//         class:"10th",
//         barnch:"ise"

// }
// const {name,class}=MyObj
// console.log(name,class);

// const obj={
//         a:"blur",
//         g:"blue"
// }
// const {a,g}=obj
// console.log(a,g)

// function js_style() 
// {
// //font styles added by JS:
//  text.style.fontSize = "14pt";
//  text.style.fontFamily = "Comic Sans MS";
//  text.style.color = "green";
// }

// function test(){
// data.style.fontSize="14pt"
// data.style.fontFamily='Comic Sans MS'
// data.style.color="red";
// }
function getFormvalue()
{
  var x=document.getElementById("form1");
  for (var i=0;i<x.length;i++)
  {
   if (x.elements[i].value!='Submit')
    {  
      console.log(x.elements[i].value);
     }  
   }
}
