let dateText = document.querySelector('.container .date');
let timeText = document.querySelector('.container .time');
const weeks = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let AMpm = "AM";

let getTime =()=>{
 let d = new Date();
 let day = d.getDay();
 let year = d.getFullYear();
 let date = d.getDate();
 let month = d.getMonth();
 let hours = d.getHours();
 let minutes = d.getMinutes();
 let seconds = d.getSeconds();
 
 if(hours > 12){
    hours = hours - 12; 
    AMpm = "PM";
 }
 
 if(hours < 10){
    hours = "0" + hours;   
 }
 
 if(minutes < 10){
    minutes = "0" + minutes;   
 }
 
 if(seconds < 10){
   seconds = "0" + seconds;   
 }
 
 dateText.innerHTML = `${weeks[day]}, ${months[month]} ${date}, ${year}`;
 timeText.innerHTML = `${hours} : ${minutes} : ${seconds} ${AMpm}`;
}
setInterval(getTime,1000);     
