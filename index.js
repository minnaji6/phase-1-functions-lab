// distanceFromHqInBlocks
function distanceFromHqInBlocks(block){
    const distance =42;
    return Math.abs(block - distance)
}
// distanceFromHqInFeet
function distanceFromHqInFeet(block) {
    const distance =42;
    return (Math.abs(block - distance)*264)
}
function distanceTravelledInFeet(start,destination){
    return (Math.abs(destination - start)*264)
}
function calculatesFarePrice(start, destination) {
    const dist = Math.abs(start - destination) * 264;
    if (dist < 400) {
        let fare = 0 * dist;
        return fare;
    }  else if (dist >= 400 && dist < 2000 ) {
        return 0.02 * (dist - 400);
    } else if (dist > 2000 && dist <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}