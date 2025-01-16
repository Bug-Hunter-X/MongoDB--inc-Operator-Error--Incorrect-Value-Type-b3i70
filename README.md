# MongoDB $inc Operator Error: Incorrect Value Type

This repository demonstrates a common error when using the `$inc` operator in MongoDB: providing a string value instead of a number.  The `$inc` operator is designed to increment a numerical field, and supplying a string will result in an error.

## Bug Description
The bug lies in the incorrect usage of the `$inc` operator. A string value ('1') is used instead of a number (1). This leads to an error because MongoDB expects a numerical value for increment operations.

## Solution
The solution involves correcting the value passed to the `$inc` operator.  Using the correct numerical value ensures that the operation executes successfully.

## How to Reproduce
1. Set up a MongoDB instance.
2. Create a collection.
3. Insert a document with a numerical field.
4. Run the provided buggy code to observe the error.
5. Run the solution code to see the correct execution.