export function formatTime(time){
    const timeInMillis = time * 1000;
    const timeData = new Date(timeInMillis);
    const hours = timeData.getHours();
    const minutes = timeData.getMinutes();
    const times = `${hours}:${minutes}`;
    return times;
}