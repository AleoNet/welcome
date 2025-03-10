---
id: leo_best_practices
title: Leo Best Practices
sidebar_label: Best Practices
---
## Style Guide

This guide is provided to point developers in the right direction when writing Leo code.
There are many conventions that are unique to Leo language and the circuits it generates.

This guide is a living document.
As new Leo programming conventions arise and old ones become obsolete this guide should reflect the changes.
Feel free to add your comments and recommendations [here](https://github.com/ProvableHQ/leo-docs-source).

## Code Layout

### Indentation
4 spaces per indentation level.

### Blank lines

A single blank line should separate the top-level declarations in a `program` scope,
namely `transition`, `function`, `struct`, `record`, and `mapping` declarations.
Multiple imports can be optionally separated by a single blank line;
the last import at the top of the file should be followed by a blank line.

```leo title="Yes:"
import std.io.Write;
import std.math.Add;

program prog.aleo {

    struct A {
        // ...
    }

    function foo() {
        // ...
    }

}
```

```leo title="No:"
import std.io.Write;


import std.math.Add;
program prog.aleo {
    struct A {
        // ...
    }
    function foo() {
        // ...
    }
}
```

### Naming Conventions

| Item                      | Convention                          |
|---------------------------|-------------------------------------|
| Packages                  | snake_case (but prefer single word) |
| Structs and Records       | CamelCase                           |
| Struct and Record Members | snake_case                          |
| Functions                 | snake_case                          |
| Function Parameters       | snake_case                          |
| Variables                 | snake_case                          |
| Inputs                    | snake_case                          |
```

### Layout
Leo file elements should be ordered:
1. Imports
2. Program declaration
3. Mappings
4. Records + Structs
5. Functions + Transitions

### Braces
Opening braces always go on the same line.
```leo
struct A {
    // ...
}

transition main() {
    // ...
}

let a: A = A { };
```

### Semicolons
Every statement including the `return` statement should end in a semicolon.
```leo
let a: u32 = 1u32;
let b: u32 = a + 5u32;
b *= 2u32;

return b
```

### Commas
Trailing commas should be included whenever the closing delimiter appears on a separate line.
```leo
let a: A = A { x: 0, y: 1 };

let a: A = A {
    x: 0,
    y: 1,
};
```

## Common Patterns

Building off of the style guide, here is a list of common patterns that a Leo developer may encounter
as well as the recommended code solution.

### Conditional Branches

The Leo compiler rewrites if-else statements inside `transitions` into a sequence of ternary expressions.
This is because the underlying circuit construction does not support branching.
For precise control over the circuit size, it is recommended to use ternary expressions directly.

```leo title="Example:"
if (condition) {
    return a
} else {
    return b
} 
```

```leo title="Alternative:"
return condition ? a : b
```

#### Why?
Ternary expressions are the cheapest form of conditional.
We can resolve the *first expression* and *second expression* values before evaluating the *condition*.
This is very easy to convert into a circuit because we know that each expression does not depend on information in later statements.

In the original `Example`,
We cannot resolve the return statements before evaluating the condition.
As a solution, Leo creates branches in the circuit so both paths can be evaluated.

```leo title="branch 1, condition = true"
return a
```

```leo title="branch 2, condition = false"
return b
```
When the input value `condition` is fetched at proving time, we select a branch of the circuit to evaluate.
Observe that the statement `return a` is repeated in both branches.
The cost of every computation within the conditional will be doubled.
This greatly increases the constraint numbers and slows down the circuit.
