const apiKey="weather api key add here"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")

//*https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=6494ceb5859e64fe8426cdd2e29f45b4&units=metric

async function checkWeather(city){
    const res=await fetch(apiUrl +city+ `&appid=${apiKey}`);
    if (res.status ==404) {
        document.querySelector('.error').style.display="block"
        document.querySelector('.weather').style.display="none"
        
    }else{
        const data= await res.json();
    console.log('all fetch data is here',data);
    document.querySelector(".city").innerHTML=data.name;
   
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    if (data.weather[0].main == 'Cloud') {
        weatherIcon.src='images/clouds.png'
        
    }else if (data.weather[0].main =='Rain') {
         weatherIcon.src='images/rain.png'
        
    }
    else if (data.weather[0].main =='Drizzle') {
        weatherIcon.src='images/drizzle.png'
       
   }
   else if (data.weather[0].main =='Mist') {
        weatherIcon.src='images/mist.png'
       
   }
   else if (data.weather[0].main =="Haze") {
        weatherIcon.src='images/mist.png'
      
    
   }
   document.querySelector('.weather').style.display="block"
   document.querySelector('.error').style.display="none"

    }
    

    };
    


searchBtn.addEventListener("click",()=>{

    checkWeather(searchBox.value)
})
