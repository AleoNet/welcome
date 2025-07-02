---
id: async 
title: Async Programming Model
sidebar_label: Async Programming Model
---
The `finalize` model was introduced to naturally enable a novel hybrid programming model, where the first part of a program is executed off-chain and the second part is executed on-chain. However, this model had its shortcomings, mainly that it was not possible define the ordering in which code was finalized.

For example, suppose we have a function `A` first calls `B` and then calls `C`. The finalization order would be the order in which the off-chain components of the function finished, e.g `B`, `C`, `A`.

To enable more expressive programs, the `finalize` model was deprecated in favor of the `async/await` model. This model borrows heavily from asynchronous programming models in other programming languages, but has some restrictions that are specific to the Aleo blockchain. Users familiar with asynchronous programming should find its instantiation in Leo familiar.

More information about `async/await` model can be found [here](https://docs.leo-lang.org/guides/async).

At a high-level, on-chain code is asynchronous code that does not return a value. Instead it returns a `Future`. Futures can be composed to execute simply one after another or through complex control flow.

The rules in the `async/await` model are:
- Async functions can only be called from an `async transition`.
- Async functions cannot return values.
- Async transitions cannot be called inside a conditional block.
- An async function call, returns a `Future`, which is code to be executed later.
- An async transition call, returns an optional value, and must return a single `Future`, which is code to be executed later.
- A `Future` produced by an async transition call cannot be returned.
- A `Future` can be passed into an async function call and must be `await`ed.
- All `Future`s must either be consumed by an async function call or returned as an output.
