---
title: Program
sidebar_label: Program
---

<a name="Program"></a>

## Overview

<p>WebAssembly representation of an Aleo program. The Program class provides methods for parsing, inspecting, and analyzing Aleo programs including their functions, records, structs, and mappings.</p>



## Methods

<a name="Program.fromString"></a>

### fromString

<p>Create a program from a program string</p>

```javascript
fromString(program) ► Program
```



| Param | Type | Description |
| --- | --- | --- |
| program | <code>string</code> | Aleo program source code |
| *return* | <code>Program</code> | Program object |

---

<a name="Program+toString"></a>

### toString

<p>Get a string representation of the program</p>

```javascript
toString() ► string
```



| Param | Type |
| --- | --- |
| *return* | <code>string</code> |

---

<a name="Program+hasFunction"></a>

### hasFunction

<p>Determine if a function is present in the program</p>

```javascript
hasFunction(functionName) ► boolean
```



| Param | Type | Description |
| --- | --- | --- |
| functionName | <code>string</code> | Name of the function to check for |
| *return* | <code>boolean</code> | True if the program has the function, false otherwise |

---

<a name="Program+getFunctions"></a>

### getFunctions

<p>Get javascript array of function names in the program</p>

```javascript
getFunctions() ► Array
```



| Param | Type |
| --- | --- |
| *return* | <code>Array</code> |

**Example**

```javascript
const expected_functions = [
  "mint",
  "transfer_private",
  "transfer_private_to_public",
  "transfer_public",
  "transfer_public_to_private",
  "join",
  "split",
  "fee"
];

const credits_program = aleo_wasm.Program.getCreditsProgram();
const credits_functions = credits_program.getFunctions();
console.log(credits_functions === expected_functions); // Output should be "true"
```

---

<a name="Program+getFunctionInputs"></a>

### getFunctionInputs

<p>Get a javascript object representation of the function inputs and types. This can be used to generate a web form to capture user inputs for an execution of a function.</p>

```javascript
getFunctionInputs(function_name) ► Array
```



| Param | Type | Description |
| --- | --- | --- |
| function_name | <code>string</code> | Name of the function to get inputs for |
| *return* | <code>Array</code> | Array of function inputs |

**Example**

```javascript
const expected_inputs = [
    {
      type:"record",
      visibility:"private",
      record:"credits",
      members:[
        {
          name:"microcredits",
          type:"u64",
          visibility:"private"
        }
      ],
      register:"r0"
    },
    {
      type:"address",
      visibility:"private",
      register:"r1"
    },
    {
      type:"u64",
      visibility:"private",
      register:"r2"
    }
];

const credits_program = aleo_wasm.Program.getCreditsProgram();
const transfer_function_inputs = credits_program.getFunctionInputs("transfer_private");
console.log(transfer_function_inputs === expected_inputs); // Output should be "true"
```

---

<a name="Program+getMappings"></a>

### getMappings

<p>Get a list of a program's mappings and the names/types of their keys and values.</p>

```javascript
getMappings() ► Array
```



| Param | Type |
| --- | --- |
| *return* | <code>Array</code> |

**Example**

```javascript
const expected_mappings = [
   {
      name: "account",
      key_name: "owner",
      key_type: "address",
      value_name: "microcredits",
      value_type: "u64"
   }
];

const credits_program = aleo_wasm.Program.getCreditsProgram();
const credits_mappings = credits_program.getMappings();
console.log(credits_mappings === expected_mappings); // Output should be "true"
```

---

<a name="Program+getRecordMembers"></a>

### getRecordMembers

<p>Get a javascript object representation of a program record and its types</p>

```javascript
getRecordMembers(record_name) ► Object
```



| Param | Type | Description |
| --- | --- | --- |
| record_name | <code>string</code> | Name of the record to get members for |
| *return* | <code>Object</code> | Object containing the record name, type, and members |

**Example**

```javascript
const expected_record = {
    type: "record",
    record: "Credits",
    members: [
      {
        name: "owner",
        type: "address",
        visibility: "private"
      },
      {
        name: "microcredits",
        type: "u64",
        visibility: "private"
      }
    ]
};

const credits_program = aleo_wasm.Program.getCreditsProgram();
const credits_record = credits_program.getRecordMembers("Credits");
console.log(credits_record === expected_record); // Output should be "true"
```

---

<a name="Program+getStructMembers"></a>

### getStructMembers

<p>Get a javascript object representation of a program struct and its types</p>

```javascript
getStructMembers(struct_name) ► Array
```



| Param | Type | Description |
| --- | --- | --- |
| struct_name | <code>string</code> | Name of the struct to get members for |
| *return* | <code>Array</code> | Array containing the struct members |

**Example**

```javascript
const STRUCT_PROGRAM = `program token_issue.aleo;

struct token_metadata:
    network as u32;
    version as u32;

struct token:
    token_id as u32;
    metadata as token_metadata;

function no_op:
   input r0 as u64;
   output r0 as u64;`;

const expected_struct_members = [
   {
     name: "token_id",
     type: "u32",
   },
   {
     name: "metadata",
     type: "struct",
     struct_id: "token_metadata",
     members: [
      {
        name: "network",
        type: "u32",
      },
      {
        name: "version",
        type: "u32",
      }
    ]
  }
];

const program = aleo_wasm.Program.fromString(STRUCT_PROGRAM);
const struct_members = program.getStructMembers("token");
console.log(struct_members === expected_struct_members); // Output should be "true"
```

---

<a name="Program.getCreditsProgram"></a>

### getCreditsProgram

<p>Get the credits.aleo program</p>

```javascript
getCreditsProgram() ► Program
```



| Param | Type |
| --- | --- |
| *return* | <code>Program</code> |

---

<a name="Program+id"></a>

### id

<p>Get the id of the program</p>

```javascript
id() ► string
```



| Param | Type |
| --- | --- |
| *return* | <code>string</code> |

---

<a name="Program+address"></a>

### address

<p>Get a unique address of the program</p>

```javascript
address() ► Address
```



| Param | Type |
| --- | --- |
| *return* | <code>Address</code> |

---

<a name="Program+isEqual"></a>

### isEqual

<p>Determine equality with another program</p>

```javascript
isEqual(other) ► boolean
```



| Param | Type | Description |
| --- | --- | --- |
| other | <code>Program</code> | The other program to compare |
| *return* | <code>boolean</code> | True if the programs are equal, false otherwise |

---

<a name="Program+getImports"></a>

### getImports

<p>Get program imports</p>

```javascript
getImports() ► Array
```



| Param | Type |
| --- | --- |
| *return* | <code>Array</code> |

**Example**

```javascript
const DOUBLE_TEST = `import multiply_test.aleo;

program double_test.aleo;

function double_it:
    input r0 as u32.private;
    call multiply_test.aleo/multiply 2u32 r0 into r1;
    output r1 as u32.private;`;

const expected_imports = [
   "multiply_test.aleo"
];

const program = aleo_wasm.Program.fromString(DOUBLE_TEST);
const imports = program.getImports();
console.log(imports === expected_imports); // Output should be "true"
```

---
