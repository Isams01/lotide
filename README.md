# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @isamuito/lotide`

**Require it:**

`const _ = require('@isamuito/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: Takes in a single array and returns the 0th element. ex. head([1,2,3]) => 1
* `tail()`: Takes in a single array and removes the first element (non-destructive), returning the rest of the array.
* `middle()`: description