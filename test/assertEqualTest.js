const assertEqual = require('../assertEqual');

// ####### Assert Equal tests ##############
assertEqual(1,2); // false
assertEqual(1,1); // true
assertEqual('hello', 'hello') // true
assertEqual('hello', 'HeLlo') // false


