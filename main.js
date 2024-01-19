let hr = document.getElementById("hour");
let ms = document.getElementById("minute");
let s = document.getElementById("second");

function workingTime () {
    let date = new Date();

   let hh = date.getHours();
   let mm = date.getMinutes();
   let ss = date.getSeconds();

   hRotation = 30*hh + mm/2;
   mRotation = 6*mm;
   sRotation = 6*ss;

   hr.style.transform = `rotate(${hRotation}deg)`;
   ms.style.transform = `rotate(${mRotation}deg)`;
   s.style.transform = `rotate(${sRotation}deg)`;
}

setInterval (workingTime, 1000);