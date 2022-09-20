const flatArray = (array) => {
  let temp = [];
  array.forEach((element) => {
    Array.isArray(element)
      ? temp.push(...flatArray(element))
      : temp.push(element);
  });
  return temp;
};

console.log(flatArray([1, 2, [3, 4, [5]]]));
