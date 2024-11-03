// normal function
function hello() {
  console.log("Hello world");
  // return undefined
}

//function expression
const hey = function () {
  console.log("Hello world");
};

//named function expression
const hi = function hello() {
  console.log("Hello world");
};

//arrow function
const ello = () => {
  return {
    a: 5,
    b: 6,
  };
};
console.log(ello());
