export function Storage(){
    this.savefavoriteCity = function(key,name){
        localStorage.setItem(key, name);
    }
    this.getFavoritecity = function(key){
       return localStorage.getItem(key);
    }
    this.removeFavoriteCity = function(key){
        localStorage.removeItem(key);
    }
}