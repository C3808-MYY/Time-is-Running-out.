let timeDiv = document.querySelector(".timeDiv");
let dateDiv = document.querySelector(".date");
let clockDiv = document.getElementsByClassName("clock")[0];


let day;
let month;
let year;

function showTime(){


let date = new Date();

let h = date.getHours(); // 0-23
let m = date.getMinutes(); // 0-59
let s = date.getSeconds(); // 0-59
let AmPm ="AM";
if(h>12){
    h = h-12;
    AmPm = "PM"
}

if(h == 0){
    h = 12;
}

h = (h <10) ? "0" + h : h;
m = (m <10) ? "0" + m : m;
s = (s <10) ? "0" + s : s;

let time = `${h}:${m}:${s}    ${AmPm}`;
document.getElementsByClassName("clock")[0].innerHTML = time;
// clockDiv.appendChild(time);
setTimeout(showTime, 1000);
}
showTime();

let date = new Date();
let yıl = date.getFullYear();
let ay = date.getMonth();
let gün = date.getDate();
let today =`${gün}.${ay+1}.${yıl}` 
// console.log(dateDiv)
dateDiv.innerHTML = today;
