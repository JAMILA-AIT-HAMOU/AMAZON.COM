import { renderPayementSummary } from "./checkout/payementSummary.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/backend-practice.js';
//import "../data/cart-class.js";

async function loadpage() {
  try {
    //throw 'error1'

    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
      //throw 'error2'
      loadCart(() => {
        //reject('error3')
        resolve("value3");
      });
    });
  } catch (error) {
    console.log("unexpected error, please try again leter");
  }

  renderOrderSummary();
  renderPayementSummary();
}
loadpage();
/*

Promise.all([
  loadProductsFetch(),
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  })

]).then((values)=>{
  console.log(values)
  renderOrderSummary();
  renderPayementSummary();
});*/

/*
new Promise((resolve) => {
  loadProducts(()=>{
    resolve('value1')
  })



}).then((value)=>{
  console.log(value)
  return new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  })


  
}).then(()=>{
  renderOrderSummary();
  renderPayementSummary();
})
  */

/*
loadProducts(() => {
  loadCart(()=>{
    renderOrderSummary();
    renderPayementSummary();
  
  })
});*/
