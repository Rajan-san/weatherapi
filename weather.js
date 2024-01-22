const key = "462d566115b5454199a142644241501";
const a ="https://api.weatherapi.com/v1/current.json";
const api="http://api.weatherapi.com/v1/current.json?key=462d566115b5454199a142644241501&q=";
const input=document.querySelector(".input");
const submit=document.querySelector(".img_btn");
const humidity=document.querySelector(".humid_value");
const wind_speed=document.querySelector(".wind_speed");
let apis = async function(city){
    let response= await axios.get(api+city);
    const temperature=document.querySelector(".temp");
    const place=document.querySelector(".city");
    temperature.innerText=response.data.current.temp_c+"°C";
    place.innerText=city.toUpperCase();
    wind_speed.innerText=response.data.current.wind_kph+" km/h";
    humidity.innerText=response.data.current.humidity+" %";
    let img=document.querySelector(".weather");
    if(data.current.condition.text=="sunny"){
        img.src="imgs/sunny.png";
    }
    }
// apis();
submit.addEventListener("click", async function(){
    apis(input.value);
})