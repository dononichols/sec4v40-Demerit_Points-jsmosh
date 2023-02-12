// Speed Limit = 70
// for every 5mph over the speedLimit, driver recieves 1 point
// Math.floor (1.3)
// 12 points => 'Suspended'

checkSpeed(74);

function checkSpeed(speed) {
    const speedLimit = 70;
    const mphPerPoint = 5;

    if (speed < speedLimit + mphPerPoint) {
        console.log('you are ok');
        return;
    }
   
    const points = Math.floor((speed - speedLimit) / mphPerPoint);
    if (points >= 12)
        console.log('License Suspended!');
    else
        console.log('Points', points);
    
    
}