const apikey = "c6584e7c1a8a236565b6a9852f5fd92a"
const url = "https://api.openweathermap.org/data/2.5/weather?&q= "

const searchBox = document.querySelector(".input")
const searchButton = document.querySelector(".btn")
const weaterIcon = document.querySelector(".img")
const rain = document.querySelector(".rain")
//fetches the infomation form the api
 async function checkweather(city){
    const response = await fetch(url + city +`&appid=${apikey}`);
   
   if(response.status == 404){
    document.querySelector(".error").style.display ="block"
    document.querySelector(".cityerror").style.display ="block"
    
   }
   else{
    var data = await response.json();
   
    // gets the data from the api
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed)+" km/h";

   // changes the weather image depending on the cloud result or condition
    if(data.weather[0].main == 'Clouds'){
        weaterIcon.src ="./cluods-removebg-preview.png";
        rain.innerHTML="Cloudy"
    }
    else if(data.weather[0].main == 'Rain'){
        weaterIcon.src ="./rain.png";
        rain.innerHTML="Raining"
    }
    else if(data.weather[0].main == 'clear'){
        weaterIcon.src ="./clear.png";
        rain.innerHTML="Clear"
    }
    else if(data.weather[0].main == 'Drizzle'){
        weaterIcon.src ="./drizzle.png";
        rain.innerHTML="Drizzling"
    }
    else if(data.weather[0].main == 'Mist'){
        weaterIcon.src ="./mist.png";
        rain.innerHTML="Mist"
    }
   
   document.querySelector(".error").style.display ="none"
   document.querySelector(".cityerror").style.display ="none"
 }}
 searchButton.addEventListener("click", ()=>{
   checkweather(searchBox.value); 
   
 })






