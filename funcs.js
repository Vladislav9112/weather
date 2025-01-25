import { Storage } from "./storage.js";
import * as w from "./weather.js";
import del from "./img/del.png";

const storage = new Storage();

export function cleanDiv(pDiv, cDiv){
    const parentDiv = document.querySelector(pDiv);
    const childDiv = parentDiv.querySelectorAll(cDiv);

    if (childDiv.length > 0) {
        childDiv.forEach(i => {
            i.remove();
        });
    }
};

export function addCityInList(){
    const fName = document.querySelector('.low-bar-text').textContent;
    // cleanDiv('.list', '.list-item');

    let favorites = storage.getFavoritecity('favoriteCity');
    if(favorites){
        favorites = new Set(JSON.parse(favorites));
    }else{
        favorites = new Set();
        
    }
    const cityKey = fName;
    favorites.add(cityKey);
    storage.savefavoriteCity('favoriteCity', JSON.stringify(Array.from(favorites)));
    // document.cookie = "lastCity_"+ fName;
    cleanDiv('.list', '.list-item');
    showList();
}

export function showList(){
    let getFavorite = storage.getFavoritecity('favoriteCity');
    let listCity = JSON.parse(getFavorite);
    // listCity.forEach(i=>{console.log(i)})

    listCity.forEach(i=>{
        // const key = localStorage.key(i);
        // const cityName = storage.getFavoritecity(key);
        const cont = document.querySelector('.list');
        let newDiv = document.createElement('div');
        let newCityName = document.createElement('span');
        let delBtn = document.createElement('button');
        let newImg = document.createElement('img');


        newDiv.setAttribute('class', 'list-item');
        newCityName.setAttribute('class', 'text-list-item');
        newCityName.textContent = i;
        newImg.src = del;
        newImg.setAttribute('class', 'btn-img');
        delBtn.setAttribute('class', 'btn-list-item');
        delBtn.appendChild(newImg);


        delBtn.addEventListener('click', ()=>{
            // storage.removeFavoriteCity(i);
            let favoriteCities = localStorage.getItem('favoriteCity');   
            if (favoriteCities) {
                let cityArray = JSON.parse(favoriteCities);
            
                if (i) {
                    const index = cityArray.indexOf(i);
                    if (index > -1) {
                        cityArray.splice(index, 1);
                    }
                    if (cityArray.length === 0) {
                        localStorage.removeItem('favoriteCity');    
                    } else {
                        localStorage.setItem('favoriteCity', JSON.stringify(cityArray));
                    }
                }
            }
            cleanDiv('.list', '.list-item');
            showList();
        })

        newDiv.appendChild(newCityName);
        newDiv.appendChild(delBtn);
        cont.appendChild(newDiv);

        newDiv.addEventListener('click', ()=>{
            w.wethFunc(newCityName.textContent);
            cleanDiv('.t-det-time-container','.t-det-time');
            w.wethDetail(newCityName.textContent);
            w.wethDetailFor(newCityName.textContent);
        })
        document.querySelector('.head-text').value='';

        
    })
}




export function favorites (event){
    event.preventDefault();
    w.weth();
    cleanDiv('.list', '.list-item')
    showList();
}
