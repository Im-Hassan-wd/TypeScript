// interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'warwick',
  age: 21,
  speak(text: string): void{
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent', amount);
    return amount
  }
};

const greetPerson = (person: IsPerson) => {
  console.log('hello', person.name)
}

greetPerson(me)


import { Invoice } from "./classes/invoice.js";

const invOne = new Invoice('patrick', 'work in the mario website', 250);
const invTwo = new Invoice('gary', 'work in the gary website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo)


invoices.forEach(inv => {
  console.log(inv.client, inv.amount, inv.format())
})



const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    details.value,
    toFrom.value,
    amount.valueAsNumber
  );
})