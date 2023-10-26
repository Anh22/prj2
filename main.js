/* Khai báo biến và gán hằng số

let x = 1;
console.log(x);
 x = 10;
 console.log(x);
var y = 10;
var y = 0;
console.log(y);

const gravity = 9.8
console.log(gravity);*/



/* Ktra cac kieu du lieu vs typeof

let x =10
console.log(typeof x) // Number

x = "hello"
console.log(typeof x)//String
 
x = true
console.log(typeof x) //Boolean

x = null
console.log(typeof x) //null

x = undefined
console.log(typeof x)// undefined
*/


/* CAC LOAI TOAN TU TRONG JAVACRIPT

// toan tu gan

let x =1 
x += 2
console.log(x) //3

// toan tu noi chuoi 

x="Hello"
y="word"
console.log(x +" "+ y)


// toan tu so sanh 

let x = 9
let y = 10 
console.log(x<y) 

//Toan tu logic
const x = true
const y = false
console.log(x || y )

*/

//KHOI LENH

/*
console.log("Hello Word")
{
    let x = 10
    console.log(x)
}
*/

//Câu Điều Kiện

/*
//IF
let x = 2;
if(x % 2 === 0){
    console.log("x is even")
}
if(true){
    console.log("true")
}
if(""){
    console.log("You will not see this line")
}
//ElSE

// STWICH-CASE
 
let day;
switch (new Date().getDate()){
    case 0:
    
    case 6:
        day  = "Weekend";
        break;
        case 1:
        case 2:
            day = "Start of week days"
            break;
        case 3:
        case 4:
        case 5:
            day = "End of week days";
            break

}
console.log(day)

*/
 
// Vong lap(LOOP)

/*


//FOR
let sum = 0;
for( let i = 0; i <100 ; i++){
    sum += i
}
console.log(sum)



//WHILE
let i = 0;
let sum = 0;
while( i<99){
    sum +=i;
    i++;
}
console.log(sum)
 */


// ARRAY

/*
let car = ["Saab" , "Volvo" , "BWM"];
car[0] ="Vinfast"
console.log(car)


//Mảng đa chiều
const boards = [
    [" ","X"," "],
    ["X","O","X"],
    [" ","X","O"]
]
console.log(boards[1][0])


//Lặp qua mảng 

const arr = [1,2,3,4,5,6,7,8];
for(let i =0 ; i < arr.length;i++){
    console.log(arr[i])
}
let j = 0;
while(j<arr.length){
    console.log(arr[j]);
    j++
}


//Các pthuc thông dụng của mảng 
 
//push()
const arr = [1,2,3,4,5]
arr.push(6)
console.log(arr)

//pop()
const arr = [1,2,3,4]
arr.pop(4)
console.log(arr)

// shift() 
const arr = [1,2,3,4,5]
arr.shift()
console.log(arr)

//unshift()
const arr = [1,2,3,4]
arr.unshift(0)
console.log(arr)

//concat()
const arr1 = [1,2,3,4]
const arr2 = [1,3,5]
const newArray = arr1.concat(arr2)
console.log(newArray)

//sort()
const arr = [1,3,2,4,6,5]
arr.sort()
console.log(arr)


// nooij dung thay doi innerHTML
document.getElementById("demo").innerHTML = "Heloo"

*/