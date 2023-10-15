let frm = document.getElementById("sub");
frm.addEventListener("submit", function (e) {
  e.preventDefault();
  let time1 = document.getElementById("first").value;
  let time2 = document.getElementById("second").value;
  time1 = new Date(time1);
  time2 = new Date(time2);

  let firstyearday = time1.getDate();

  let lastyearday = time2.getDate();

  let time;
  if (time2 > time1) {
    time = time2.getTime() - time1.getTime();
  } 
  else {
    time = time1.getTime() - time2.getTime();
  }

  let second = time / 1000;
  let day = second / 60 / 60 / 24;

//   let i;
//   if(year1<year2){
//       i =year1;
//   }
//   else{
//       i=year2;
//   }

//   if(((i%100==0 && i%400==0))||(i%4==0&&i%100!=0) ){
//       feb=29;
//   }
//   else{
//       feb = 28;
//   }

//   let days = [31,31,31,30,31,31,31,31,30,31,30,31];

  let x;

  if (firstyearday > lastyearday) {
    x = 31 - firstyearday;
    x = x + lastyearday;
    document.getElementById("day").innerHTML = x;
  } else {
    x = lastyearday - firstyearday;
    document.getElementById("day").innerHTML = x;
  }

  let month = ((day - x) / 30.41) % 12;
  document.getElementById("month").innerHTML = Math.floor(month);
  let year = day / 365;
  document.getElementById("year").innerHTML = Math.floor(year);
});
