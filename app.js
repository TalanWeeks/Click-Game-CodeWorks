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
  updateInventory()
}

// NOTE keeping track of total cheese to manipulate later


function updateInventory(){
  
  document.getElementById('current-cheese-total').innerHTML = currentCheeseMined;
  document.getElementById('total-cheese-earned').innerHTML = totalCheeseEarned;
  document.getElementById('current-click-style').innerText = clickUpgrades.bareHands.name;
  document.getElementById('current-cart-style').innerText = cartUpgrades.bucket.name;
  document.getElementById('current-cart-total').innerHTML = currentCartTotal;
  document.getElementById('current-rover-total').innerHTML = currentRoverTotal;  
}
