const obj={
  user: {
    name: "John",
    address: {
      city: "Pune"
    }
  }
}

// output
// {
//   "user.name": "John",
//   "user.address.city": "Pune"
// }

const dotObj = (obj, prefix = "") => {
  let result = {};

  for (let [key, value] of Object.entries(obj)) {
    let fullKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      let nestedResult = dotObj(value, fullKey);
      Object.assign(result, nestedResult);
    } else {
      result[fullKey] = value;
    }
  }

  return result;
};

console.log(dotObj(obj))
