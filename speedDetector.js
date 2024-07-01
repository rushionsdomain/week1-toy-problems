const prompt = require("prompt-sync")();

// Function to detect speed
function speedDetector() {
  // Prompts the user to enter speed
  const speed = Number(prompt("Enter the speed of the car: "));

  const SpeedLimit = 70;
  const KmPerPoint = 5;

  if (speed <= SpeedLimit) {
    console.log("Ok");
  } else {
    const points = Math.floor((speed - SpeedLimit) / KmPerPoint);
    if (points >= 12) {
      console.log(`Points: ${points}. License suspended.`);
    } else {
      console.log(`Points: ${points}`);
    }
  }
}

// Calls the function
speedDetector();
