let greet: Function;

// greet = 'hello';

greet = () => {
  console.log('hello, again');
}

const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b)
  console.log(c)
}

add(5, 10, '20')