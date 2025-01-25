import oblako from "./img/oblako.png";
import sun from "./img/sun.png";
import fog from "./img/fog.png";
import snow from "./img/snow.png";
import rain from "./img/rain.png";
import storm from "./img/storm.png";

export const switchImg = (img, dataJson) =>{
    if (img) {
        switch( dataJson){
            case "Clouds":
                img.src = oblako;
                break;
            case "Clear":
                img.src = sun;

                break;
            case "Atmosphere":
                img.src = fog;

                break;
            case "Snow":
                img.src = snow;

                break;
            case "Rain":
                img.src = rain;

                break;
            case "Drizzle":
                img.src = rain;

                break;
            case "Thunderstorm":
                img.src = storm;

                break;
        }
    }
}