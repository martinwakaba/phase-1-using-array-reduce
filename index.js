const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let totalBatteries = 0;
function reducer(batteryBatches) {
   
    return batteryBatches.reduce(function(totalBatteries, batch){return totalBatteries + batch, 0});
  }