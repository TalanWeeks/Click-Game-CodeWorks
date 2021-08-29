// variables

let currentCheeseMined = 0;
let totalCheeseEarned = 0;
let currentCartTotal = 0;
let currentRoverTotal = 0;
let currentCartStyle = 1;
let currentPickStyle = '';

// Dictionaries

let clickUpgrades = {
  bareHands: {
    name:'Bare Hands',
    cost: 0,
    quantity: 0,
    multiplier: 1
  },
  pickAxe: {
    name: 'Pick Axe',
    cost:10,
    quantity:0,
    multiplier: 5
  },
  superSaiyan: {
    name: 'Super Saiyan Mode',
    cost: 30,
    quantity:0,
    multiplier: 20
  }
}

let cartUpgrades = {
  bucket: {
    name:'Bucket',
    cost:0,
    quantity: 50,
  },
  mineCart: {
    name:'Mine Cart',
    cost: 100,
    quantity: 100,
  },
  dumpTruck: {
    name:'Dump Truck',
    cost:400,
    quantity: 200,
  }
}

let rover = {
  name: 'Moon Rover',
  cost: 100,
  quantity: 0, 
}


document.getElementById('current-click-style').innerText = clickUpgrades.bareHands.name;
document.getElementById('current-cart-style').innerText = cartUpgrades.bucket.name;




// functions

// NOTE adding to current cheese when moon is clicked

function startGame(){
  document.getElementById("start-button").classList.add("visually-hidden")
  document.getElementById("how-to-section").classList.add("visually-hidden")
  document.getElementById("purchase-inventory").classList.remove("visually-hidden")
  document.getElementById("user-inventory").classList.remove("visually-hidden")
  updateInventory()
}
function mineCheese(){
  
  currentCheeseMined +=1
  currentCartTotal += 1

  critClick()
  
  updateInventory()
}

// NOTE keeping track of total cheese to manipulate later

function critClick(){
  let randomNum = Math.floor(Math.random()*10)
  if (randomNum >= 7) {
    currentCheeseMined += 5
    
    currentCartTotal += 5
    console.log("critical click!")
  }
  
}

// checks what cart upgrade we currently have SECTION
// function checkCartStyle(){
//   let cartSytle = 0
//   if (cartUpgrades == bucket)
// }

// // NOTE keep working on cart functions
// function checkCartAmount(){
//   if (bucketCartStatus == 1)

// }


// BUYING ITEMS SECTION
function buyMineCart(){
  if (totalCheeseEarned < 100){
    alert("insufficient cheese funds to buy this upgrade")
  } else if (totalCheeseEarned >= 100)
  totalCheeseEarned -= 100
  currentCartStyle = 2
  document.getElementById('current-cart-style').innerText = cartUpgrades.mineCart.name;
  updateInventory()
}
function buyDumpTruck(){
  if (totalCheeseEarned < 400){
    alert("insufficient cheese funds to buy this upgrade")
  } else if (totalCheeseEarned >= 400)
  totalCheeseEarned -= 400
  currentCartStyle = 3
  document.getElementById('current-cart-style').innerText = cartUpgrades.dumpTruck.name;
  updateInventory()
}

function buyRover(){  
  // NOTE change back to 100
  if (totalCheeseEarned < 100){
    alert("insufficient cheese funds to buy this upgrade")
  } else if (totalCheeseEarned >= 100){
    totalCheeseEarned -= 100
    console.log(totalCheeseEarned)
    currentRoverTotal ++
    startRoverTimer()
  }
    updateInventory()   
}

function buyPickAxe(){
  if (totalCheeseEarned < 100){
    alert("insufficient cheese funds to buy this upgrade")
  } else if (totalCheeseEarned >= 100){
    totalCheeseEarned -= 100
  }
  updateInventory()
}

// UPDATING ITEMS SECTION
function cartStyleStatus(){
  let maxCartValue = 0
  if(currentCartStyle>2){
    maxCartValue = cartUpgrades.dumpTruck.quantity
  } else if (currentCartStyle >1){
    maxCartValue = cartUpgrades.mineCart.quantity
  } else if (currentCartStyle >0){
    maxCartValue = cartUpgrades.bucket.quantity
  }
  console.log("max cart value", maxCartValue)
}

 function unloadCart(){
   let cartAmount = currentCartTotal
   totalCheeseEarned += cartAmount
   currentCartTotal -= cartAmount
   currentCheeseMined -= cartAmount
   updateInventory()
 }
function startRoverTimer(){
  if(currentRoverTotal>2){
    setInterval(unloadCart,8000)
  } else if (currentRoverTotal >1){
    setInterval(unloadCart,15000)
  } else if (currentRoverTotal >0){
    setInterval(unloadCart,20000)
  }
  console.log("current rover total", currentRoverTotal)
}
  // function roverCartDump(){   
  //   currentCartTotal -= (currentRoverTotal*100)
  //   totalCheeseEarned += (currentRoverTotal*100)
  //   document.getElementById('current-cart-total').innerHTML = currentCartTotal;
  //   document.getElementById('total-cheese-earned').innerHTML = totalCheeseEarned;
  //   console.log("current rover total",currentRoverTotal)
  // } 

function updateInventory(){
  
  // @ts-ignore
  document.getElementById('current-cheese-total').innerHTML = currentCheeseMined;
  // @ts-ignore
  document.getElementById('total-cheese-earned').innerHTML = totalCheeseEarned;

  // @ts-ignore
  document.getElementById('current-cart-total').innerHTML = currentCartTotal;
  // @ts-ignore
  document.getElementById('current-rover-total').innerHTML = currentRoverTotal;  
}
