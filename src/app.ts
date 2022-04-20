// classes
class Invoice {
//   readonly client: string;
//   private details: string;
//   public amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

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