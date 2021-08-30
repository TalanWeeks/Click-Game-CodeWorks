// variables

let currentCheeseMined = 0;
let totalCheeseEarned = 0;
let currentCartTotal = 0;
let currentRoverTotal = 0;
let currentCartStyle = 1;
let currentPickStyle = 1;

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
    quantity: 150,
  },
  dumpTruck: {
    name:'Dump Truck',
    cost:400,
    quantity: 500,
  }
}

let rover = {
  name: 'Moon Rover',
  cost: 600,
  quantity: 0, 
}


document.getElementById('current-click-style').innerText = clickUpgrades.bareHands.name;
document.getElementById('current-cart-style').innerText = cartUpgrades.bucket.name;




// functions

// NOTE adding to current cheese when moon is clicked


function mineCheese(){
  
  // currentCheeseMined++
  // currentCartTotal++
  clickUpgradeStatus()
  critClick()
  cartStyleStatus()
  updateInventory()
}

// CRITICAL CLICK SECTION

function critClick(){
  let randomNum = Math.floor(Math.random()*10)
  if (randomNum >= 7) {
    currentCheeseMined += 5
    currentCartTotal += 5
    console.log("critical click!")
  }
  
}



// BUYING ITEMS SECTION
function buyMineCart(){
  let mineCartPrice =150
  if (totalCheeseEarned < mineCartPrice){
    alert("insufficient cheese funds to buy this upgrade")
  } else if (totalCheeseEarned >= mineCartPrice)
  totalCheeseEarned -= mineCartPrice
  currentCartStyle = 2
  document.getElementById('current-cart-style').innerText = cartUpgrades.mineCart.name;
  updateInventory()
}
function buyDumpTruck(){
  let dumpTruckPrice = 600
  if (totalCheeseEarned < dumpTruckPrice){
    alert("insufficient cheese funds to buy this upgrade")
  } else if (totalCheeseEarned >= dumpTruckPrice)
  totalCheeseEarned -= dumpTruckPrice
  currentCartStyle = 3
  document.getElementById('current-cart-style').innerText = cartUpgrades.dumpTruck.name;
  updateInventory()
}

function buyRover(){ 
  let roverPrice = 600 
  if (totalCheeseEarned < roverPrice){
    alert("insufficient cheese funds to buy this upgrade")
  } else if (totalCheeseEarned >= roverPrice){
    totalCheeseEarned -= roverPrice
    console.log(totalCheeseEarned)
    currentRoverTotal ++
    startRoverTimer()
  }
    updateInventory()   
}

function buyPickAxe(){
  let pickAxePrice = 100
  if (totalCheeseEarned < pickAxePrice){
    alert("insufficient cheese funds to buy this upgrade")
  } else if (totalCheeseEarned >= pickAxePrice){
    totalCheeseEarned -= pickAxePrice
    currentPickStyle = 2
    document.getElementById('current-click-style').innerText= clickUpgrades.pickAxe.name;
  }
  updateInventory()
}

function buySuperSaiyanMode(){
  let SuperSaiyanPrice = 1000
  if (totalCheeseEarned < SuperSaiyanPrice){
    alert("insufficient cheese funds to buy this upgrade")
  } else if (totalCheeseEarned >= SuperSaiyanPrice){
    totalCheeseEarned -= SuperSaiyanPrice
    currentPickStyle = 3
    document.getElementById('current-click-style').innerText= clickUpgrades.superSaiyan.name;

  }
  updateInventory()
}

// UPDATING ITEMS SECTION

function startGame(){
  document.getElementById("start-button").classList.add("visually-hidden")
  document.getElementById("how-to-section").classList.add("visually-hidden")
  document.getElementById("purchase-inventory").classList.remove("visually-hidden")
  document.getElementById("user-inventory").classList.remove("visually-hidden")
  updateInventory()
}

function unloadCart(){
  let cartAmount = currentCartTotal
  totalCheeseEarned += cartAmount
  currentCartTotal -= cartAmount
  currentCheeseMined -= cartAmount
  updateInventory()
}

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


// conditional functions SECTION

function clickUpgradeStatus(){
 
  let clickMultiplier = 0
 if (currentPickStyle>2){
  clickMultiplier = clickUpgrades.superSaiyan.multiplier
  } else if (currentPickStyle>1){
    clickMultiplier = clickUpgrades.pickAxe.multiplier
    } else if (currentPickStyle>0){
      clickMultiplier = clickUpgrades.bareHands.multiplier
    }
    console.log("click count multiplier",clickMultiplier)
    currentCheeseMined += (1*clickMultiplier)
    currentCartTotal += (1*clickMultiplier)
 
}
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
  if (maxCartValue < currentCartTotal){
    alert("You must empty your cart to keep mining! Avoid this pop up by not letting your bucket reach the max fill.")
    currentCheeseMined --
    currentCartTotal --
  }
}


function startRoverTimer(){
    
  
   if(currentRoverTotal>4){
    setInterval(unloadCart,2000)
    document.getElementById("rover-price").innerText = '3600'
   }
   else if(currentRoverTotal>3){
    setInterval(unloadCart,5000)
    document.getElementById("rover-price").innerText = '3000'
   }
   else if(currentRoverTotal>2){
    setInterval(unloadCart,8000)
    document.getElementById("rover-price").innerText = '2400'

  } else if (currentRoverTotal >1){
    setInterval(unloadCart,15000)
    document.getElementById("rover-price").innerText = '1800'

  } else if (currentRoverTotal >0){
    setInterval(unloadCart,20000)
    document.getElementById("rover-price").innerText = '1200'
  }
  console.log("current rover total", currentRoverTotal)
}


