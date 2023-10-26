//Bai 1 hien thi "Toi la bac thay mua florentino"

//alert("Toi la bac thay mua florentinos")






//Bai 3

/*
let a = 1 ;let b=2
let c = a++;
let d = ++b;
console.log(c,d)*/

/*







//BAi 4 

// caau a 

//yeu cau nguoi dung nhap so n
let n = parseInt(prompt("nhap so n:"))
 
// in ra so chan so le
let evenNumbers =[];
let oddNumbers =[];

for(let i =1 ;i<n ;i++){
    if(i % 2 === 0){
        evenNumbers.push(i);
    }else{
        oddNumbers.push(i);
    }
}
console.log(`Cac so chan nho hon ${n} :${evenNumbers}`);
console.log(`Cac so le nho hon ${n}: ${oddNumbers}`);

// cau b 
let n = parseInt(prompt("nhap so n:"))
let maxMultip7of = 0;
for(let i = n-1; i>0;i--){
    if(i % 7 ===0){
        maxMultip7of = i;
        break
    }
}
console.log( `So chia het cho 7 va lon nhat hon ${n} :${maxMultip7of}`)


//cau c
let n = parseInt(prompt("nhap so n:"))
let sum = 0;
for(let i = 1; i<=n ;i++){
    sum +=i;
}
console.log(`tong cac so tu 1 den ${n}:${sum}`);


//câu d
//Ktra n co phai so nguyen to khong 

let isPrime = true;
let n = parseInt(prompt("nhập số n "));
if(n === 1 ){
    isPrime = false;
}else{
    for(let i = 2;i <= Math.sqrt(n);i++){
        if(n % i === 0){
        isPrime = false;
        break;
        }
    }
}
console.log(`${n} là số ${isPrime ? "Nguyên tố":"Không nguyên tố"} `);


//cấu d
// in ra hình vuông * cạnh là n(vuông đăch và rỗng) 

// hình vuoong đặc *
 let n = parseInt(prompt ("Nhập cạnh n: "))
 let square = ""

 for (let i = 1 ; i<= n ; i++){
    for (let j = 1 ; j<= n ; j++){
        square +="*";

    }
    square +="\n";
 }
 console.log(square)
 
// hình vuông bên trong rỗng 
let n = parseInt(prompt("Nhập cạnh n : "))
let square = ""
for( let i = 1;i<=n;i++){
    for(let j = 1; j <= n ; j++){
        if(i==1 || i == n || j == 1 || j == n){
            square +="*";
        }else{ 
            square += " ";
        }
    }
    square +="\n";
}
console.log(square)

  // câu e 
  // in ra tam giac cân có độ dài cạnh đáy là n(các cạnh là dấu *)
  let n = parseInt(prompt("nhập cạnh đáy n: "));
  let triangle = "";

  for(let i = 1; i<=n ; i++){
    for(let j = 1 ; j <= n-1 ;j++){
        triangle +=" "
    }
    for(let k = 1 ; k <= 2*i-1;k++){
        triangle += "*"
    }
    triangle += "\n"
  }
  console.log(triangle)
 

  //Bài 5 
  // câu a : viết một hàm sum nhập vào một mảng có ố nguyên và tổng mảng đó
  function sum(arr){
    let total = 0;
    for ( let i = 0 ; i < arr.length;i++){
        total += arr[i]
    } 
    return total;
  }
const numbers = [1,2,3,4,5]
const total = sum(numbers)
console.log(total)
 
//câu b : viết mọt hàm findMax nhậ vào một mảng các số nguyên và trả về giá trị lớn nhất của mảng đó

function findMax(arr){
    let max = arr[0]
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i]>max){
            max = arr[i]
        }

    }
    return max;
}
const numbers = [1,2,3,4,5]
const max = findMax(numbers)
console.log(max)



//Bài 6 
 
// câu a 
const student ={
    name : "Tạ Thị Vân",
    age : 21,
    hobbies: ["Kem","Xiên bẩn","dooki"]
};
//câu b 
for(let key in student){
    console.log(key + ":"+student[key])
}
// câu c
delete student.age;


//Bài 7 
const cauthu = {
    name : "Fernandor Torres",
    year : "20/03/1984",
    nationality : "Tây Ban Nha"
}
//Hỏi người dùng nhập thong tin không 
let answer = prompt(`Bạn có muốn nhập thông tin không? (Y/N)`);
while(answer == 'Y'){
    let info = prompt("Thông tin muốn thêm là gì ?");
    let value = prompt(`Gia trị của thong tin ${info} là gì ?`);
// thêm thông tin mguowif dùng nhập vào obj ban đầu
    cauthu[info] = value;
    answer = prompt("Bạn có muốn thêm thông tin không ? (Y/N)");

}
if(answer == 'N' ){
    console.log("chào tạm biệt")
}


// Bài 8
let fruits = ["Cam" , "xoài", "Táo" , "Nho" ,"Sầu Riêng"]
const answer = prompt(` Bạn muốn nhập thêm trái cây nào không ? (Y/N)`)
if(answer === `Y`){
    const newFruits = prompt(` Trái cây mới bạn muốn nhập là gì?`)
    fruits.push(newFruits)
    console.log(fruits)
}else if(answer ===`N`){
    console.log("Cảm ơn")
}



//Bài 9 
let fruits = ["Cam", "Xoài", "Táo", "Nho", "Sầu Riêng"];
console.log("Danh sách trái cây: " +fruits);
let response = prompt(` Bạn có muốn xoa trái cây nào không? (Y/N) `);
if(response ==='Y'){
    let position = Number(prompt(`Nhập vị trí cây muốn xóa:  `));
    if(position >= 0 && position < fruits.length){
        let name = prompt("Nhập tên trái cây muốn xóa : ");
        if(fruits[position] ===  name ){
            fruits.splice(position,);
            console.log("Danh sách trái cây sau khi bị xóa: " + fruits)
        }else{
            console.log("Không tìm thấy trái cây cần xóa tại vị trí nhập!")
        }
    }else{
        console.log("Vị trí nhập không tồn tại trái cây trong danh sách trái cây");
    }

}else{
    console.log("Cảm ơn!!!")
}
*/
