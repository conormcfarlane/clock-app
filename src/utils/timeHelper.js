export const getGreeting = (currentHour) => {
    if(currentHour >= 5 && currentHour <= 12 ){
        return "Good Morning";
    }
    if(currentHour >= 12 && currentHour <= 18){
        return "Good Afternoon"
    }
    return "Good Night"
}