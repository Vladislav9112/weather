// import {format} from "date-fns";
import { cleanDiv, showList} from "./funcs.js";
import { weth } from "./weather.js";
import { addCityInList } from "./funcs.js";

const form = document.querySelector('.form');
const fBtn = document.querySelector('.l-b-input');

// const date = document.querySelector('.date');
// const dateNow = format(new Date(), 'yyyy/MM/dd');
// date.textContent = dateNow;



function favorites (event){
    console.log('start');
    event.preventDefault();
    weth();
    cleanDiv('.list', '.list-item');
    showList();
}



form.addEventListener('submit', favorites);
fBtn.addEventListener('click', addCityInList);
cleanDiv('.list', '.list-item');

showList()



