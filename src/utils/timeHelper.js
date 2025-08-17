export const getGreeting = (currentHours) => {
    return currentHours >= 5 && currentHours <= 12
     ? "GOOD MORNING" : currentHours >= 13 && currentHours <= 18
      ? "GOOD AFTERNOON" : "GOOD EVENING"
}
export const isDaytime = (currentHours) =>{
    return currentHours >= 6 && currentHours <= 18
}