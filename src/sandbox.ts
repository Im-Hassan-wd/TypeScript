type StringOrNum = string | number;
type obj = { name: string, uid: StringOrNum}

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`)
}

const greet = (user: obj) => {
  console.log(`${user.name} says hello`)
}