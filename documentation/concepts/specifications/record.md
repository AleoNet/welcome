---
id: records
title: Record Format
sidebar_label: Records
---

## Record
| Parameter |          Type          |                                                      Example                                                       |
|:---------:|:----------------------:|:----------------------------------------------------------------------------------------------------------------------:|
|  `owner`  |        address         |                               The address of the record's owner                              |
|  `data`   | Map\<Identifier, Entry\> | A key-value storage containing arbitrary application-dependent information. Each entry has it's own visibility modifier |
|  `nonce`  |         group          |  `586159291143381969269735819109479494044234898090369670064655group.public`,  |
|  `version`|         u8             |                                     The record's version                                                |


#### Example
```bash
{
  owner: aleo13ssze66adjjkt795z9u5wpq8h6kn0y2657726h4h3e3wfnez4vqsm3008q.private,
  amount: 100u8.private,
  _nonce: 5861592911433819692697358191094794940442348980903696700646555355124091569429group.public,
  version: 1u8.public
}
```