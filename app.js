// variables

let currentCheeseMined = 0;
let totalCheeseEarned = 0;
let currentCartTotal = 0;
let currentRoverTotal = 0;
let currentCartStyle = '';
let currentRoverStyle = '';
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
  totalCheeseEarned += 1
  currentCheeseMined +=1
  currentCartTotal += 1
  console.log(currentCheeseMined)
  critClick()
  updateInventory()
}

// NOTE keeping track of total cheese to manipulate later

function critClick(){
  let randomNum = Math.floor(Math.random()*10)
  if (randomNum >= 7) {
    currentCheeseMined += 5
    totalCheeseEarned += 5
    currentCartTotal += 5
    console.log("critical click!")
  }
  console.log(randomNum)
}

// checks what cart upgrade we currently have SECTION
function checkCartStyle(currentUpgrade){
  let bucketCartStatus = 0
  let mineCartStatus = 0
  let dumpTruckStatus = 0
  if (currentUpgrade == cartUpgrades.mineCart){
    mineCartStatus = 1
  } if (currentUpgrade == cartUpgrades.dumpTruck){
    dumpTruckStatus = 1
  } bucketCartStatus = 1

}
function updateInventory(){
  
  // @ts-ignore
  document.getElementById('current-cheese-total').innerHTML = currentCheeseMined;
  // @ts-ignore
  document.getElementById('total-cheese-earned').innerHTML = totalCheeseEarned;
  document.getElementById('current-click-style').innerText = clickUpgrades.bareHands.name;
  document.getElementById('current-cart-style').innerText = cartUpgrades.bucket.name;
  // @ts-ignore
  document.getElementById('current-cart-total').innerHTML = currentCartTotal;
  // @ts-ignore
  document.getElementById('current-rover-total').innerHTML = currentRoverTotal;  
}
