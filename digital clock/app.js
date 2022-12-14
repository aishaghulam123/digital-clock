




// function initclock(){
//     upclock();
//     window.setInterval("upclock()", 1 )
// }




function currentTime(){
    var now = new Date();
    var dname = now.getDay();
    var mo = now.getMonth();
    var dnum = now.getDate();
    var yr = now.getFullYear();
    var hh = now.getHours();
    var mm = now.getMinutes();
    var ss = now.getSeconds();
    var pe = "AM"; {
    
if(hh == 0 ){
    hh = 12;
}
if(hh > 12){
    hh = hh - 12;
pe = "PM";
}
hh = (hh < 10) ? "0" + hh : hh;
mm = (mm < 10) ? "0" + mm : mm;
ss = (ss < 10) ? "0" + ss : ss;
 
let time = hh + ":" + mm + ":" + ss + " " + pe;

document.getElementById("abc").innerText = time; 
let t = setTimeout(function(){ currentTime() }, 1000);

}

//     var month = ["January","February","March","April","May","June","July","August","September","Octuber","November","Decembar"];
//     var week = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
// var ids = ["dayName","month","daynum","year","hour","min","sec","period"];
// var v = [week[dname],month[mo],dnum,yr,hh,mm,ss,pe];
// for(var i = 0; i < ids.length; i++)
// document.getElementById(ids[i]).firstChild.nodeValue = value[i]
 }
currentTime();






// function currentTime() {
//   let date = new Date(); 
//   let hh = date.getHours();
//   let mm = date.getMinutes();
//   let ss = date.getSeconds();
//   let session = "AM";

//   if(hh === 0){
//       hh = 12;
//   }
//   if(hh > 12){
//       hh = hh - 12;
//       session = "PM";
//    }

//    hh = (hh < 10) ? "0" + hh : hh;
//    mm = (mm < 10) ? "0" + mm : mm;
//    ss = (ss < 10) ? "0" + ss : ss;
    
//    let time = hh + ":" + mm + ":" + ss + " " + session;

//   document.getElementById("clock").innerText = time; 
//   let t = setTimeout(function(){ currentTime() }, 1000);
// }

// currentTime();
  



