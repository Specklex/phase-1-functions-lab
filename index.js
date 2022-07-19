// Code your solution in this file!
let feetTraveled;
function distanceFromHqInBlocks(blocks){
    if (blocks < 42){
        return (42 - blocks)
    }
    else return (blocks - 42);
}

function distanceFromHqInFeet(blocks) {
    return (distanceFromHqInBlocks(blocks) * 264);
}

function distanceTravelledInFeet(start, end){
    if(start > end){
        return  (start - end) * 264;
    }
    else return  (end - start) * 264;
    
}

function calculatesFarePrice(start, end){
    if(distanceTravelledInFeet(start, end) <= 400){
        return 0;
    }
    else if (distanceTravelledInFeet(start, end) < 2000)
    {
        return (distanceTravelledInFeet(start, end) - 400) * .02;
    }
    else if (distanceTravelledInFeet(start, end) > 2500)
    {
        return 'cannot travel that far';
    }
    else return 25;
}