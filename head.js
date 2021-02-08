const assertEqual = require('./assertEqual');


const head = function(arg){
  return arg[0]
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]),undefined);
assertEqual(head([1]),1);

module.exports = head;