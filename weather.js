import { switchImg } from "./switch.js";
import { urlLink, urlLinkForecast } from "./urlLink.js";
import { formatTime } from "./time.js";
import { cleanDiv } from "./funcs.js";


let detailList=["0","1","2"];

// export const wethDetail = (name) =>{
//     const feelsLike = document.querySelector('.fl');
//     const sunRise = document.querySelector('.sunrise');
//     const sunSet = document.querySelector('.sunset');
//     fetch(urlLink(name))
//         .then(request => request.json())
//         .then((data)=> {
//             let feelsLikeCel = parseInt(data['main']['feels_like']) - 273.15;
//             feelsLike.textContent = `Ощущаестя: ${feelsLikeCel.toFixed(1)}`;
//             let sunriseData = parseInt(data['sys']['sunrise']);
//             sunRise.textContent = `Рассвет: ${formatTime(sunriseData)}`;
//             let sunsetData = parseInt(data['sys']['sunset']);
//             sunSet.textContent = `Закат: ${formatTime(sunsetData)}`;

           
//         })
// }

export async function wethDetail (name){
    const feelsLike = document.querySelector('.fl');
    const sunRise = document.querySelector('.sunrise');
    const sunSet = document.querySelector('.sunset');
    const response = await fetch(urlLink(name));
    const data = await response.json();
    let feelsLikeCel = parseInt(data['main']['feels_like']) - 273.15;
    feelsLike.textContent = `Ощущаестя: ${feelsLikeCel.toFixed(1)}`;
    let sunriseData = parseInt(data['sys']['sunrise']);
    sunRise.textContent = `Рассвет: ${formatTime(sunriseData)}`;
    let sunsetData = parseInt(data['sys']['sunset']);
    sunSet.textContent = `Закат: ${formatTime(sunsetData)}`;

           
        
}


// export const wethDetailFor =(name)=>{
//     detailList.forEach(i => {
//         const detList = document.querySelector(".t-det-time-container");


//         const divItem = document.createElement('div');
//         divItem.setAttribute('class', 't-det-time');


//         const divItemText = document.createElement('div');
//         divItemText.setAttribute('class', 'det-text')

//         const timeText = document.createElement('p');
//         timeText.setAttribute('class', 'time');

//         const temeratureText = document.createElement('p');
//         temeratureText.setAttribute('class', 'temerature');

//         const feelsText = document.createElement('p');
//         feelsText.setAttribute('class', 'feels');


//         const divItemImg = document.createElement('div');
//         divItemImg.setAttribute('class', 'det-img')

//         const itemImg = document.createElement('img');
//         itemImg.setAttribute('class', 'det-img-item');
//         itemImg.setAttribute('alt', 'img');


//         detList.appendChild(divItem);

//         divItem.appendChild(divItemText);
//         divItem.appendChild(divItemImg);

//         divItemText.appendChild(timeText);
//         divItemText.appendChild(temeratureText);
//         divItemText.appendChild(feelsText);

//         divItemImg.appendChild(itemImg);
//         fetch(urlLinkForecast(name))
//             .then(request=>request.json())
//             .then((data)=>{
//                 const dataj = data['list'][i]['weather']['0']['main'];
//                 switchImg(itemImg, dataj);
//                 const timeData = parseInt(data['list'][i]['dt']);
//                 timeText.textContent = `${formatTime(timeData)}`;
//                 const tempData = parseInt(data['list'][i]['main']['temp'] - 273.15);
//                 temeratureText.textContent = `Температура: ${tempData.toFixed(1)}`;
//                 const feelsData = parseInt(data['list'][i]['main']['feels_like'] -273.15);
//                 feelsText.textContent = `Ощущается ${feelsData.toFixed(1)}`;
//             })



//     })
// }
export async function wethDetailFor(name){
    const response = await fetch(urlLinkForecast(name));
    const data = await response.json(); 
    for(const i of detailList){
        
        const detList = document.querySelector(".t-det-time-container");


        const divItem = document.createElement('div');
        divItem.setAttribute('class', 't-det-time');


        const divItemText = document.createElement('div');
        divItemText.setAttribute('class', 'det-text')

        const timeText = document.createElement('p');
        timeText.setAttribute('class', 'time');

        const temeratureText = document.createElement('p');
        temeratureText.setAttribute('class', 'temerature');

        const feelsText = document.createElement('p');
        feelsText.setAttribute('class', 'feels');


        const divItemImg = document.createElement('div');
        divItemImg.setAttribute('class', 'det-img')

        const itemImg = document.createElement('img');
        itemImg.setAttribute('class', 'det-img-item');
        itemImg.setAttribute('alt', 'img');


        detList.appendChild(divItem);

        divItem.appendChild(divItemText);
        divItem.appendChild(divItemImg);

        divItemText.appendChild(timeText);
        divItemText.appendChild(temeratureText);
        divItemText.appendChild(feelsText);

        divItemImg.appendChild(itemImg);
        
        const dataj = data['list'][i]['weather']['0']['main'];
        switchImg(itemImg, dataj);
        const timeData = parseInt(data['list'][i]['dt']);
        timeText.textContent = `${formatTime(timeData)}`;
        const tempData = parseInt(data['list'][i]['main']['temp'] - 273.15);
        temeratureText.textContent = `Температура: ${tempData.toFixed(1)}`;
        const feelsData = parseInt(data['list'][i]['main']['feels_like'] -273.15);
        feelsText.textContent = `Ощущается ${feelsData.toFixed(1)}`;
            



    }
}


// export const wethFunc=(name)=>{
//     let t = document.querySelector('.t');
//     let img = document.querySelector('.weather-img');
//     const cityName = name;
//     fetch(urlLink(name))
//         .then(request=> request.json())
//         .then((data) => {
//             let t_cel = parseInt(data['main']['temp']) - 273.15;
//             t.textContent = t_cel.toFixed(1);
//             document.querySelector('.low-bar-text').textContent = cityName;
//             const dataJ = data.weather[0].main;
//             switchImg(img, dataJ);
//             // console.log(data.weather[0].main);
//         });
// }
export async function wethFunc(name){
    let t = document.querySelector('.t');
    let img = document.querySelector('.weather-img');
    const cityName = name;
    const response = await fetch(urlLink(name));
    
    const data = await response.json();

    let t_cel = parseInt(data['main']['temp']) - 273.15;
    t.textContent = t_cel.toFixed(1);
    document.querySelector('.low-bar-text').textContent = cityName;
    document.cookie = `city=${cityName}; max-age=20; path=/`;
    setTimeout(()=>{
        document.cookie=`city=; max-age=0;path=/`;
    },10000)
    const dataJ = data.weather[0].main;
    switchImg(img, dataJ);
        
}


export function weth (){
    let name = document.querySelector('.head-text').value;
    wethFunc(name);
    wethDetail(name);
    cleanDiv('.t-det-time-container','.t-det-time');
    wethDetailFor(name);
}
