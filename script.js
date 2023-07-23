const inputCity = document.getElementById('input-city');
const apikey = "fc8c0cf5a6d06481140558efb8e230bb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const Searchcity = document.getElementById('input-city');
const Searchbtn = document.getElementById('Search-btn');
const weatherconditionImg = document.getElementById('weatherConditionImg');


async function fetchdata(city){
    try{

        const bodycontainer = document.getElementById('body-container');
        const loading = document.getElementById('lds-roller');

        bodycontainer.style.display = 'none';
        loading.style.display = 'block';
        
        const data = await fetch(apiUrl +  city + `&appid=${apikey}`);
        var jsonData = await data.json();
        console.log(jsonData); 

        bodycontainer.style.display = 'block';
        loading.style.display = 'none';
    }
    catch(err){
        console.log(err);
    }
    loadData(jsonData);

}

function loadData(jsonData){
    const city = document.getElementById('city');
    const temp = document.getElementById('temp');
    const desc = document.getElementById('Description');
    const humidity = document.getElementById('humidity');
    const pressure = document.getElementById('pressure');
    const wind = document.getElementById('wind');
    const tempmax = document.getElementById('tempmax');
    const tempmin = document.getElementById('tempmin');
    const feelslike = document.getElementById('feel-like');
    const weathermain = document.getElementById('weatherMain');
    const bodycontainer = document.getElementById('body-container');
    // const bg = document.getElementById('background');
    const btn = document.querySelector('button');

    
    weathermain.innerHTML = jsonData.weather[0].main;
    city.innerHTML = jsonData.name;
    temp.innerHTML = Math.round(jsonData.main.temp) + "°";
    desc.innerHTML = jsonData.weather[0].main;
    humidity.innerHTML = jsonData.main.humidity + " %";
    pressure.innerHTML = jsonData.main.pressure + " hPa";
    wind.innerHTML = jsonData.wind.speed + " km/h";
    feelslike.innerHTML = jsonData.main.feels_like + "°C";
    tempmax.innerHTML = jsonData.main.temp_max + "°C";
    tempmin.innerHTML = jsonData.main.temp_min + "°C"; 

    if(jsonData.weather[0].main == "Clouds"){
        weatherconditionImg.src = "Images/clouds1.png";
        bodycontainer.style.backgroundImage = "url('Images/cloudy2.jpg')"
        btn.style.background = 'rgb(133, 96, 1) ';

    }
    if(jsonData.weather[0].main == "Haze"){
        weatherconditionImg.src = "Images/humidity1.png";
        bodycontainer.style.backgroundImage = "url('Images/Haze.jpg')"
        btn.style.background = 'rgb(1, 124, 133) ';
    }
    if(jsonData.weather[0].main == "Clear"){
        weatherconditionImg.src = "Images/clear1.png";
        bodycontainer.style.backgroundImage = "url('Images/clear.jpg')";
        btn.style.background = 'rgb(1, 78, 133)';
    }
    if(jsonData.weather[0].main == "Mist"){
        weatherconditionImg.src = "Images/mist1.png";
        bodycontainer.style.backgroundImage = "url('Images/mist.jpg')";
        btn.style.background = 'rgb(6, 136, 97)';

    }
    if(jsonData.weather[0].main == "Drizzle"){
        weatherconditionImg.src = "Images/drizzle1.png";
        bodycontainer.style.backgroundImage = "url('Images/drizzle.jpg')";
        btn.style.background = 'rgb(1, 78, 133)';

    }
    if(jsonData.weather[0].main == "Rain"){
        weatherconditionImg.src = "Images/rain1.png";
        bodycontainer.style.backgroundImage = "url('Images/rainy.jpg')";
        btn.style.background = 'rgb(3, 87, 74) ';
    }

    if(jsonData.weather[0].main == "Snow"){
        weatherconditionImg.src = "Images/snow1.png";
        bodycontainer.style.backgroundImage = "url('Images/snow.jpg')";
        btn.style.background = 'rgb(136, 6, 6) ';
    }

    if(jsonData.weather[0].main == "Wind"){
        weatherconditionImg.src = "Images/wind1.png";
        bodycontainer.style.backgroundImage = "url('Images/windy.jpg')";
        btn.style.background = 'rgb(6, 136, 88) ';
    }

    if(jsonData.weather[0].main == "Fog"){
        weatherconditionImg.src = "Images/wind1.png";
        bodycontainer.style.backgroundImage  = "url('Images/fog.jpg')";
        btn.style.background = 'rgb(0, 10, 0) ';
    }


}

Searchbtn.addEventListener("click", () => {
    weatherconditionImg.style.display = 'block';

    fetchdata(Searchcity.value);
})

fetchdata();