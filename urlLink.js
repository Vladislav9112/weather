export function urlLinkForecast(name){
    const serverUrl = 'http://api.openweathermap.org/data/2.5/forecast';
    const cityName = name;
    const apiKey = 'ac32ff441e190838ab61e262ae3ebdbf';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
    return url;
}

export function urlLink (name){
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const cityName = name;
    const apiKey = 'ac32ff441e190838ab61e262ae3ebdbf';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
    return url;
}