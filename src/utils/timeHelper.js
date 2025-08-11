export function greetingHelper(currentTime){
    return currentTime >= 5 && currentTime < 12 
    ? "GOOD MORNING" 
    : currentTime >= 12 && currentTime < 18 
    ? "GOOD AFTERNOON" 
    : "GOOD NIGHT"
}

export function isDaytimeHelper(currentTime){
    return currentTime >= 5 && currentTime < 18;
}