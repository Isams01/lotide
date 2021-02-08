const tail = require('../tail');
const assertEqual = require('../assertEqual');

assertEqual(tail([1,2,3])[0],2)
assertEqual(tail([1,2,3])[1],3)
