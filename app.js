//get cityname from url
var cityname = window.location.search.replace("?city=", "")

//To request from api
function request(){
    let api = 'https://api.openweathermap.org/data/2.5/weather?q='+cityname+'&units=metric&appid=fa1390396bd8234cda0cac17e88980d0'
    fetch(api).then((response)=>{
        //convert response to json
        response.json().then((result)=>{
            //lets fill the data 
            fillData(result)
        })
    })
}

function fillData(info){
    //lets try to get the name of city via json response from api and fill it in html
    //lets get temperature from api in celsius
    //its time to get description
    //get feels like temp
    //get wind speed

    //set the icons according to weather
    const wind_speed = document.getElementById("windSpeed");
    const feels_like = document.getElementById("feelsLikeTemp");
    const desc = document.getElementById("desc");
    const city = document.getElementById("city");
    const temp = document.getElementById("temp");
    const icon = document.querySelector(".icon");
    const error = document.querySelector(".message");

    const code = info.cod;

    if(code == 404){
        //it means no city found
        error.style.display = 'flex';
    }

    console.log(info)
    city.innerHTML = '@'+info.name;
    temp.innerHTML = Math.floor(info.main.temp)+'°C';
    desc.innerHTML = info.weather[0].description;
    feels_like.innerHTML = Math.floor(info.main.feels_like)+'°C';
    wind_speed.innerHTML = Math.floor(info.wind.speed * 3.6) + ' Km/H'
    

    
    var id = info.weather[0].id;

    if(id == 800){
        //it means clear
        icon.innerHTML += `<img src="https://img.icons8.com/emoji/96/000000/sun-emoji.png">`
    }else if(id >= 200 && id <= 232){
        //it means thunderstrorm
        icon.innerHTML += `<img src="https://img.icons8.com/office/80/000000/rainy-weather.png">`;
    }else if(id >= 300 && id <=321){
        //drizzle
        icon.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="96" height="96"
        viewBox="0 0 172 172"
        style=" fill:#000000;"><defs><radialGradient cx="68.08333" cy="71.66667" r="53.75" gradientUnits="userSpaceOnUse" id="color-1_UyNm3S4bECd7_gr1"><stop offset="0" stop-color="#ffe16e"></stop><stop offset="0.583" stop-color="#fcbf22"></stop><stop offset="0.654" stop-color="#fea20f"></stop><stop offset="0.718" stop-color="#ff8c00"></stop><stop offset="0.797" stop-color="#ffa300"></stop><stop offset="0.928" stop-color="#ffc400"></stop><stop offset="1" stop-color="#ffd000"></stop></radialGradient><radialGradient cx="114.66667" cy="100.33333" r="32.25" gradientUnits="userSpaceOnUse" id="color-2_UyNm3S4bECd7_gr2"><stop offset="0" stop-color="#e3f4ff"></stop><stop offset="1" stop-color="#e3f4ff" stop-opacity="0"></stop></radialGradient><radialGradient cx="132.58333" cy="111.08333" r="28.66667" gradientUnits="userSpaceOnUse" id="color-3_UyNm3S4bECd7_gr3"><stop offset="0" stop-color="#e3f4ff"></stop><stop offset="1" stop-color="#e3f4ff" stop-opacity="0"></stop></radialGradient><radialGradient cx="93.16667" cy="111.08333" r="28.66667" gradientUnits="userSpaceOnUse" id="color-4_UyNm3S4bECd7_gr4"><stop offset="0" stop-color="#e3f4ff"></stop><stop offset="1" stop-color="#e3f4ff" stop-opacity="0"></stop></radialGradient><radialGradient cx="114.66667" cy="111.08333" r="28.66667" gradientUnits="userSpaceOnUse" id="color-5_UyNm3S4bECd7_gr5"><stop offset="0" stop-color="#e3f4ff"></stop><stop offset="1" stop-color="#e3f4ff" stop-opacity="0"></stop></radialGradient><radialGradient cx="68.08333" cy="114.66667" r="17.91667" gradientUnits="userSpaceOnUse" id="color-6_UyNm3S4bECd7_gr6"><stop offset="0" stop-color="#e3f4ff"></stop><stop offset="1" stop-color="#e3f4ff" stop-opacity="0"></stop></radialGradient><radialGradient cx="86" cy="100.33333" r="17.91667" gradientUnits="userSpaceOnUse" id="color-7_UyNm3S4bECd7_gr7"><stop offset="0" stop-color="#e3f4ff"></stop><stop offset="1" stop-color="#e3f4ff" stop-opacity="0"></stop></radialGradient></defs><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M68.08333,17.91667l2.31842,4.79808c2.63375,5.45383 9.75383,6.86925 14.27242,2.838l3.9775,-3.5475l0.30458,5.32125c0.34758,6.04508 6.38192,10.07633 12.10092,8.084l5.031,-1.75225l-1.75225,5.031c-1.99233,5.719 2.03892,11.75333 8.084,12.10092l5.32125,0.30458l-3.5475,3.9775c-4.02767,4.51858 -2.61225,11.63867 2.838,14.27242l4.80167,2.322l-4.79808,2.31842c-5.45383,2.63375 -6.86925,9.75383 -2.838,14.27242l3.5475,3.9775l-5.32125,0.30458c-6.04508,0.34758 -10.07633,6.38192 -8.084,12.10092l1.75225,5.031l-5.031,-1.75225c-5.719,-1.99233 -11.75333,2.03892 -12.10092,8.084l-0.30458,5.32125l-3.9775,-3.5475c-4.51858,-4.02767 -11.63867,-2.61225 -14.27242,2.838l-2.322,4.80167l-2.31842,-4.79808c-2.63375,-5.45383 -9.75383,-6.86925 -14.27242,-2.838l-3.9775,3.5475l-0.30458,-5.32125c-0.34758,-6.04508 -6.38192,-10.07633 -12.10092,-8.084l-5.031,1.75225l1.75225,-5.031c1.99233,-5.719 -2.03892,-11.75333 -8.084,-12.10092l-5.32125,-0.30817l3.5475,-3.9775c4.02767,-4.51858 2.61225,-11.63867 -2.838,-14.27242l-4.80167,-2.31842l4.79808,-2.31842c5.45383,-2.63375 6.86925,-9.75383 2.838,-14.27242l-3.5475,-3.9775l5.32125,-0.30458c6.04508,-0.34758 10.07633,-6.38192 8.084,-12.10092l-1.75225,-5.03458l5.031,1.75225c5.719,1.99233 11.75333,-2.03892 12.10092,-8.084l0.30458,-5.32125l3.9775,3.5475c4.51858,4.02767 11.63867,2.61225 14.27242,-2.838z" fill="url(#color-1_UyNm3S4bECd7_gr1)"></path><circle cx="32" cy="28" transform="scale(3.58333,3.58333)" r="9" fill="#9fd5ed"></circle><circle cx="37" cy="31" transform="scale(3.58333,3.58333)" r="8" fill="#9fd5ed"></circle><circle cx="32" cy="31" transform="scale(3.58333,3.58333)" r="8" fill="#9fd5ed"></circle><circle cx="26" cy="31" transform="scale(3.58333,3.58333)" r="8" fill="#9fd5ed"></circle><circle cx="19" cy="32" transform="scale(3.58333,3.58333)" r="5" fill="#9fd5ed"></circle><circle cx="24" cy="28" transform="scale(3.58333,3.58333)" r="5" fill="#9fd5ed"></circle><circle cx="32" cy="28" transform="scale(3.58333,3.58333)" r="9" fill="url(#color-2_UyNm3S4bECd7_gr2)"></circle><circle cx="37" cy="31" transform="scale(3.58333,3.58333)" r="8" fill="url(#color-3_UyNm3S4bECd7_gr3)"></circle><circle cx="26" cy="31" transform="scale(3.58333,3.58333)" r="8" fill="url(#color-4_UyNm3S4bECd7_gr4)"></circle><circle cx="32" cy="31" transform="scale(3.58333,3.58333)" r="8" fill="url(#color-5_UyNm3S4bECd7_gr5)"></circle><circle cx="19" cy="32" transform="scale(3.58333,3.58333)" r="5" fill="url(#color-6_UyNm3S4bECd7_gr6)"></circle><circle cx="24" cy="28" transform="scale(3.58333,3.58333)" r="5" fill="url(#color-7_UyNm3S4bECd7_gr7)"></circle></g></g></svg>`
    }else if(id >= 500 && id <= 531){
        icon.innerHTML += `<img src="https://img.icons8.com/office/80/000000/rainy-weather.png">`
    }else if(id >= 600 && id <= 622){
        icon.innerHTML += `<img src="https://img.icons8.com/cute-clipart/64/000000/snow.png"/>`
    }else if(id>= 701 && id <= 781){
        icon.innerHTML += `<img src="https://img.icons8.com/fluency/96/000000/foggy-night-1.png"/>`
    }else if(id >= 801 && id <= 804){
        icon.innerHTML += `<img src="https://img.icons8.com/doodle/48/000000/partly-cloudy-day--v1.png"/>`
    }
}