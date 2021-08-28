// variables

let currentCheeseMined = 0;
let 



// functions
function helloWorld(){
  currentCheeseMined +=1
  console.log(currentCheeseMined)

  updateInventory()

}

function updateInventory(){
  document.getElementById('current-cheese-total').innerHTML = currentCheeseMined;
}