import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice('yoshi', 'web work', 250);
docOne = new Payment('mario', 'plumbing work', 250);
const invOne = new Invoice('patrick', 'work in the mario website', 250);
const invTwo = new Invoice('gary', 'work in the gary website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, details.value, toFrom.value, amount.valueAsNumber);
});
