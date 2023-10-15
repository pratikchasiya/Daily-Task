
let frm = document.getElementById("sub")
frm.addEventListener("submit",function(e){
    e.preventDefault();
let time1 =document.getElementById("first").value;
let time2 = document.getElementById("second").value;
time1 = new Date(time1);
// console.log(time1);
let firstyearmonth = time1.getMonth();
// console.log(firstyearmonth+1);
let firstyearday = time1.getDate();
// console.log(firstyearday);
year1 = time1.getFullYear();
time2 = new Date(time2);
let lastyearmonth = time2.getMonth();
let lastyearday = time2.getDate();

year2 = time2.getFullYear();
// console.log(time2);

// year

let time;
if(time2>time1){
time = time2.getTime()-time1.getTime();
}
else{
    time = time1.getTime()-time2.getTime();
}
// console.log(time);

let x = time/1000;
let y = (x/60/60);
console.log(y);
let day = y/24;
console.log(day);
let month = (day/30.41)%12;
let year = day/365;
// year = math.
document.getElementById("year").innerHTML = Math.floor(year);
document.getElementById("month").innerHTML = Math.floor(month); 


// let hour = y%24;
// console.log(hour);
// // hour
// document.getElementById("hours").innerHTML=hour;

// days
let feb;
for(let i=year1+1; i<year2;i++){
    if(((i%100==0 && i%400==0))||(i%4==0&&i%100!=0) ){
        feb=29;
    }
    else{
        feb=28;
    }
let days = [31,feb,31,30,31,30,31,31,30,31,30,31];
// days.map(x=>day = day-x)
// console.log(day);

days.map(function(elm){
    day = day-elm;
})

}
console.log(day);
let a;
if(((year1%100==0 && year1%400==0))||(year1%4==0&&year1%100!=0) ){
    a=29;
}
else{
    a=28;
}
let firstyeardays = [31,a,31,30,31,30,31,31,30,31,30,31];
// console.log(firstyeardays);
let bhoomi = day -(firstyeardays[firstyearmonth]- firstyearday);
console.log(bhoomi);
let khushi
for(let j = firstyearmonth+1;j<firstyeardays.length;j++){
    khushi = bhoomi - firstyeardays[j];
    bhoomi=khushi;
}
console.log(khushi);


let b;
if(((year2%100==0 && year2%400==0))||(year2%4==0&&year2%100!=0) ){
    a=29;
}
else{
    a=28;
}
let lastyeardays = [31,a,31,30,31,30,31,31,30,31,30,31];

let reshma;
if(lastyearmonth>0){
    
    for(let k =0;k<lastyearmonth;k++){
        reshma=khushi - lastyeardays[k];
        khushi=reshma;
    }
}
else{
    reshma=khushi;
}

console.log(reshma);
let finalday;
if(firstyearday>lastyearday){
    finalday =firstyearday-lastyearday;
}
else{
    finalday=lastyearday-firstyearday;
}

document.getElementById("day").innerHTML=finalday;






});






