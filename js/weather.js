//key: 630578a63b62392c171454ea8db7eed8
// async function getPlaces(){
// var input=document.getElementById("input");
// await new google.maps.places.Autocomplate(input);
// }
 var input=document.getElementById("input");

let form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let searchkey=document.getElementById("input").value;
    console.log(searchkey);
    searchWeather(searchkey);

});
// input.addEventListener('keyup',(e)=>{
//     e.preventDefault();
//     let searchkey=e.target.value;
//     searchWeather(searchkey);
// });
function searchWeather(searchkey){
    let WeatherApi=`http://api.openweathermap.org/data/2.5/weather?q=${searchkey}&appid=630578a63b62392c171454ea8db7eed8`;
    window.fetch(WeatherApi).then((data)=> {
        data.json().then((weather)=>{
            console.log(weather);
            let weatherData=weather.weather;
            let main =weather.main;
            output=[];
            for(let x of weatherData){
                output+=`
                <div class="col-md-12 mt-4 card">
                <div class="card-body">
                <h1>${weather.name}</h1>
                <div>
                <p class="icon">
                <img src="https://openweathermap.org/img/wn/${x.icon}.png"></p>
                <p><span>temp:</span>
                <span class="temp">${weather.main.temp}&deg;c</span></p>
                <p class="float-left>humidity:${weather.main.humidity}&deg;c</p> 
                <p class="des float-left>humidity:${x.description}</p>                
                <p class=" des float-left>humidity:${x.main}</p>   
                </div>
                </div>             
                `;
                document.getElementById("WeatherTemplate").innerHTML=output;
            }
        })
        .catch((err)=>console.log(err));
    })
.catch((err)=>console.log(err));
}
// let WeatherApi=`api.openweathermap.org/data/2.5/weather?q={city name}&appid={630578a63b62392c171454ea8db7eed8}`;
