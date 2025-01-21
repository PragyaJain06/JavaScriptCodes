const num = 1;
let result = [];

for (let i = 2; result.length < num; i++) {
  let temp = 0;
  if (i === 2 || i === 3) {
    result.push(i);
  } else {
    for (let j = 2; j < i / 2; j++) {
      if (i % j === 0) {
        temp = 0;
        break;
      } else {
        temp = 1;
      }
    }
  }
  if (temp === 1) {
    result.push(i);
  }
}

console.log(result);