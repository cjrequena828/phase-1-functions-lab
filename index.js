// Code your solution in this file!
const headQ = 42
const mBlock = 264
//let begBlock;
//let desBlock;

function distanceFromHqInBlocks(pickup) {
    if (pickup >= 43)  
    {return (pickup - headQ)}
    if (pickup <= 42)
    {return (headQ - pickup)}
}
function distanceFromHqInFeet(pickup, desBlock){
    distanceFromHqInBlocks(pickup);
    return ((pickup % desBlock)* mBlock)
    
    //distanceFromHqInBlocks * mBlock

}
