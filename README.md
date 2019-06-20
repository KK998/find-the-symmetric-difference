## Algorithms: Find the Symmetric Difference

Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). The resulting array must contain only unique values (no duplicates).

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

## Requirements

Install assignment dependencies:

```bash
$ npm install
```

## Making the test suite pass

Execute the tests with:

```bash
$ npm test
```

In the test suites all tests but the first have been skipped.

Once you get a test passing, you can enable the next one by changing `xtest` to
`test`.

## Problem Explanation:

Symmetric difference (commonly denoted by Δ) of two sets is the set of elements which are in either of the two sets, but not in both.

For example, sym([1, 2, 3], [5, 2, 1, 4]) should yield [3, 4, 5].

Following above definition, symmetric difference of three sets A, B, and C can be expressed as (A &Delta; B) &Delta; C.
Relevant Links:

    Symmetric difference - Wikipedia (https://en.wikipedia.org/wiki/Symmetric_difference)
    Symmetric difference - YouTube (https://www.youtube.com/watch?v=PxffSUQRkG4)
    JavaScript Array.prototype.reduce() (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

## Hint: 1

The arguments object is Array-like object that only inherits Array.length property. Hence consider converting it to an actual Array.

    try to solve the problem now

## Hint: 2

Deem writing a helper function that returns the symmetric difference of two arrays on each call instead of attempting to difference all sets simultaneously.

    try to solve the problem now

## Hint: 3

Apply helper function against the created arguments array reducing its elements pairwise recursively to form the expected output.

Note In the event of odd number of sets the symmetric difference will include identical elements present in all given sets. For instance;

A = {1, 2, 3}
B = {2, 3, 4}
C = {3, 4, 5}

(A &Intersection; B) &Intersection; C = {1, 4} &Intersection {3, 4, 5}
A &Intersection; B = {1, 3, 5}

    try to solve the problem now
