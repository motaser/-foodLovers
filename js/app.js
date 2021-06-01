'use strict'

let myForm = document.getElementById('myForm');
let selectEl = document.getElementById('foodType')
let contEl =document.getElementById('container')
let foodType =['burger', 'pizza', 'shawarma'];
let orders =[];


function Food (customerName, foodType, price, image ){

this.customerName = customerName;
this.foodType = foodType;
this.price= price;
this.image= image;

orders.push(this)


}
console.log(orders);
for (let index = 0; index <foodType.length; index++) {
 let optionEL= document.createElement('option')
 selectEl.appendChild(optionEL)
 optionEL.textContent= foodType[index]
    
}


function sittingItems() {

    let data =JSON.stringify(orders)
    localStorage.setItem('food', orders  )
}


function gettingItems(){

    let stringObj =localStorage.getItem('food')
    let normalObj =JSON.parse( stringObj)
    if(normalObj !== null ){

        orders=normalObj
    }

    rende();
}




let tableEl =document.createElement('table');
contEl.appendChild(tableEl);
let trhead = document.createElement('tr');
tableEl.appendChild(trhead);
let thhead = document.createElement('th');
trhead.appendChild(thhead);
thhead.textContent = 'Order Image';
let th2head = document.createElement('th')
trhead.appendChild(th2head);
th2head.textContent= 'Order Details'




function rende(){

for (let i = 0; i <orders.length; i++) {
    let trhead2 = document.createElement('tr');
    tableEl.appendChild(trhead2);
    trhead2.textContent= orders[i].customerName;

 
    
}

}
gettingItems();

myForm.addEventListener('submit', handelSubmit)

function handelSubmit(event){
     event.preventdefault();


let customerName = event.target.customerName.value;
let foodType = event.target.foodType.value;
let price = Math.floor((Math.random() * 100) + 1);


new Food (customerName, foodType, price, image  );
sittingItems();
rende();

}

