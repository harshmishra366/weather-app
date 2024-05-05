let apikey = '1b492854767108e6e8162023061146a2';
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
let searchbox=document.querySelector('.search input');
let searchbtn = document.querySelector('.searchbtn');


async function checkweather(city) {
  const response = await fetch(apiurl + city+ `&appid=${apikey}`);
  var data = await response.json();
  console.log(data);


  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = data.main.temp + '°c';
   document.querySelector('.humi').innerHTML=data.main.humidity + '%';
   document.querySelector('.windspeed').innerHTML=data.wind.speed + 'Km/h';
   let img=document.querySelector('.wimg')
   if (data.weather[0].main == 'Snow') {
    
    img.src = 'snow.png';
}
else if (data.weather[0].main == 'Clouds') {
    
    img.src = 'clouds.png';
}
else if (data.weather[0].main == 'Clear') {
    
    img.src = 'clear.png';
}
else if (data.weather[0].main == 'Rain') {
    
    img.src = 'rain.png';
}
else if (data.weather[0].main == 'Haze') {
    
    img.src = 'mist.png';
}
else if (data.weather[0].main == 'Rain') {
    
    img.src = 'rain.png';
}
else if (data.weather[0].main == 'Drizzle') {
    
    img.src = 'drizzle.png';
}
}


searchbtn.addEventListener('click' ,()=>{
    checkweather(searchbox.value)
});


