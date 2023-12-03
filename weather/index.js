const apiKey='7cba2bc7bfa46c22ee34837e6cf8e8f4';
const apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

async function check(city){
    const response= await fetch(apiUrl+ city +`&appid=${apiKey}`)
    var data=await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML=data.name
    document.querySelector(".temperature").innerHTML= Math.round(data.main.temp) +"°C"
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%"
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/h"
   
if(data.weather.description='clear sky'){
    document.getElementById("xelo").src="./images/clear.png";
}
   

}
 function send(){

    check(searchBox.value)
 }
 send()