# javascript

## Intro

(ECMA-262 12th edition june 2021)

Install node with nvm (install script).

`nvm use 17`  
`nvm alias default N.N.N`  
`node --version`:
v18.4.0


&nbsp;&nbsp;&nbsp;&nbsp;  
```js
const arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
}
```
`"0", "1", "2", "foo"`

```js
for (let i of arr) {
   console.log(i);
}
```
`3, 5, 7`

```js
a = b
++c
```

is transformed by automatic semicolon insertion:

```js
a = b;
++c;
```

## Doc

**Properties** are containers that hold other objects, primitive values or
functions. Part of an object that associates a key (String or Symbol) and a
value.

Properties are accessed by name, using either the dot notation:

*MemberExpression* **.** IdentifierName  
*CallExpression* **.** *IdentifierName*

or the bracket notation:

*MemberExpression* **[** *Expression* **]**
*CallExpression* **[** *Expression* **]**

Every object created by a constructor has an implicit reference (called the
object's prototype) to the value of its constructor's "prototype" property.

Properties can be added to objects dynamically by assigning values to them.

A **primitive value** is a member of one of the following built-in types:
Undefined, Null, Boolean, Number, BigInt, Symbol, String.

An **object** is a member of the built-in type Object.
An object is a collection of zero or more properties each with attributes
that determine how each property can be used.
The prototype may be the null value.

A **function** is a callable object. A function that is associeded with an
object via a property is called a **method**.  When a function is called as a
method of an object, the object is passed to the function as its _this_ value.
In addition to its properties, a function contains executable code and state
that determine how it behaves when invoked.

Defined functions are not required to have their declaration appear textually
before calls to them.

Objects are created by using constructors in `new` expressions.
Alternatively, a new object may be created with an explicitly specified prototype using
the `Object.create` built-in function.

String  
Each integer value in the sequence usually represents a single 16-bit unit of UTF-16 text.

attribute  
Internal value that defines some characteristic of a property.

To specify an empty regular expression, use `/(?:)/`

The export keyword is used to export things. It may appear in front of a
function, class, or binding definition (let, const, or var).

## Expressions

identifers

Exponential: `**`

Multiplicative: `* / %`

Additive: `+ -`

Bitwise Shift: `<< >>`  
`>>>` performs a zero-filling bitwise right operation on the
left operand by the amount specified by the right operand.

Relational: `< > <= >= instanceof in`  

Equality: `== != === !==`

Binary Bitwise: `& ^ |`

Conditional: `? :`  
ShortCircuitExpression  
ShortCircuitExpression **?** AssignmentExpression **:** AssignmentExpression

Comma: `,`  
AssignmentExpression
Expression **,** AssignmentExpression

### Assignment Operators

ConditionalExpression  
YieldExpression  
ArrowFunction  
AsyncArrowFunction  
LeftHandSideExpression `=` AssignmentExpression  
LeftHandSideExpression AssignmentOperator AssignmentExpression  

AssignmentOperator: `*= /= %= += -= <<= >>>= &= ^= |= **= &&= ||= ??=`

### primary expression

**(** Expression **)**

CoverParenthesizedExpressionAndArrowParameterList

`this`

IdentifierReference
Literal
ArrayLiteral  
ObjectLiteral
RegularExpressionLiteral
TemplateLiteral

FunctionExpression  
GeneratorExpression  
ClassExpression  
AsyncFunctionExpression  
AsyncGeneratorExpression  

### Left-Hand-Side Expressions

NewExpression  
CallExpression  
MemberExpression OptionalChain
MemberExpression TemplateLiteral

Argument Lists  
The evaluation of an argument list produces a List of values.

Optional Chains  
An optional chain is a chain of one or more property accesses and funcion
calls, the first of which begins with the token **?.** .

Import Calls  

Tagged Templates  
is a function call where the arguments of the call are
derived from a TemplateLiteral.

Meta Properties  
`new . target`  
`import . meta`

#### `new`

`new` *NewExpression*  
`new` *MemberExpression* *Arguments*

#### Function Calls

CoverCallExpressionAndAsyncArrowHead  
CallExpression Arguments  

#### `super`

`super` **[** Expression **]**  
`super` **.** IdentifierName  
`super` Arguments

### Update Expressions

Postfix Increment  
Postfix Decrement
Prefix Increment  
Prefix Decrement  

### Unary Operators

UpdateExpression  
`delete` UnaryExpression  
`void` UnaryExpression  
`typeof` UnaryExpression  
`+` UnaryExpression  
`-` UnaryExpression  
`~` UnaryExpression  
`!` UnaryExpression  
AwaitExpression

## Statements and Declarations

`let`  
`const`  
`var`

Empty

Expression

If

`do` Statement `while (` Expression `);`

`while (` Expression `)` Statement

ForStatement  

ForInOfStatement

`continue`  
`break`  
`return`

`with (` Expression `)` Statement

`switch (` Expresssion `) {` CaseClauses and/or DefaultClause `}`

LabelIdentifier **:** Statement or FunctionDeclaration

`throw` Expression `;`  

`try` Block Catch  
`try` Block `finally` Block  
`try` Block Catch Finally

When a catch clause catches an expception, its CatchParameter is bound
to that exception.

`debugger ;`

Async Arrow Function Definitions

Tail Position Calls

### Block

**{** Statements and Declarations  **}**

## Functions and Classes

FunctionDeclaration or FunctionExpression:  
`function` BindingIdentifier$_{opt}$ `(` FormalParameters `) {` StatementList `}`

ArrowFunction:  
BindingIdentifier or CoverParenthesizedExpressionAndArrowParameterList `=>` ConciseBody

CoverParenthesizedExpressionAndArrowParameterList:  
`()`  
`(` Expression **,**$_{opt}$ `)`  
`(` Expression$_{opt}$  `...` BindingIdentifer or BindingPattern `)`

return the ArrowFormalParameter that is covered by
CoverParenthesizedExpressionAndArrowParameterList.

An ArrowFunction does not define local bindings for `arguments, super,this, new.target`.

### Generation Function Definition

GeneratorMethod:  
`*` PropertyName `(` UniqueFormalParameters `)` `{` FunctionBody `}`

GeneratorDeclaration of GeneratorExpression:  
`function *` BindingIdentifier$_{opt}$ `(` FormalParameters `) {` FunctionBody `}`

The BindingIdentifer in a GeneratorExpression can be referenced from inside the
GeneratorExpression's FunctionBody to allow the generator code to call itself recursively.

YieldExpression:  
`yield` `*`$_{opt}$ AsignmentExpression

AsyncGenertorMethod  
AsyncGeneratorDeclaration, AsyncGeneratorExpression

### Class Definition

ClassDeclaration or ClassExpression:  
`class` BindingIdentifier$_{opt}$ ClassHeritage$_{opt}$ `{` ClassBody `}`

ClassHeritage:  
`extends` LeftHandSideExpression

ClassElement:  
`static`$_{opt}$ MethodDefinition  
`;`

### Async Function Definition

AsyncFunctionDeclaration or AsyncFunctionExpression:  
`async` BindingIdentifier$_{opt}$ `(` FormalParameters `)` `{` FunctionBody `}`

AsyncMethod:  
`async` PropertyName `(` UniqueFormalParameters `)` `{` FunctionBody `}`

AwaitExpression:  
`await` UnaryEpression

## Scripts and Modules

Script:  
StatementList

Module:  
ImportDeclaration  
ExportDeclaration  
StatementListItem

`import` ImportClause `from` ModuleSpecifier  
`import` ModuleSpecifier;

`export *` FromClause `;`
`export * as` IdentifierName FromClause `;`  
`export {` IdentifierName$_{opt}$ `,`$_{opt}$ `}` FromClause `;`
`export {` IdentifierName `as` IdentifierName$ `,`$_{opt}$ `}` FromClause `;`

## Standard Built-in Objects

length property, number of required Arguments

Constructor Properties of the global object:

Array  
Map  
Number  
Promise  
Proxy  
Regexp  
String  
JSON  

and more

## Fundamental Objects

Object

Function

Boolean

Symbol

Error

## Numbers and Dates

BigInt

Math

Date

Date.now()

## Text Processing

### String

String( value )
String.fromCharCode(...codeUnits)
String.fromCodePoint(...codePoints)

String.prototype:

charAt
codePointAt
codePointAt
endsWith
indexOf
lastIndexOf
repeat
replace
replaceAll
search
slice
split
startsWith
substring
trimEnd
trimStart
valueOf

### RegExp Objects

`/a|ab/.exec("abc")`  
"a"

## Indexed Collections

Set

### Array

Array.of(...items)

prototypes:

filter
find
findIndex
flat(depth)
forEach
indexOf
join
keys
lastIndexOf
map
pop
push
reduce
reduceRight
reverse
shift
splice
sort
unshift

### Map

Map(iterable$_{opt}$)

prototypes:

clear
delete
forEach
get
has
set
keys

## Structured Data

ArrayBuffer

DataView

Atomics

### JSON

parse
stringify

## Managing Memory

## Control Abstraction

iteration

Promise

A Promise is an object that is used as a placeholder for the eventual result of
a deferred (and possibly asynchronous) computation.

fulfilled, rejected, pending

settled: not pending (either fulfilled or rejected)

GeneratorFunction

AsyncFunction

### Genereator

prototypes:

next
return
throw

## Reflection

Reflect

Proxy

## Memory Model

The memory model is defined as relational constraints on events introduced by
abstract operations on SharedArrayBuffer or by methods on the Atomics object
during an evaluaition.

An execution 'execution' is data race free if there are no two events in
SharedDataBlockEventSet(execution) that are in a data race.

A program is data race free if all its executions are data race free.

## Browser

CreateHTML(string, tag, attribute, value)

### String

prototypes

substr(start,length)
anchor(name)
big
blink
bold
fixed
fontcolor
fontsize
italics
link
small
strike
sub
sup
trimStart
trimEnd

### Date

prototypes:

getYear
setYear
toUTCString

### RegExp

prototypes:

compile(pattern, flags)

## typescript

`never` is a type of values that never occur. There are no possible values of
type never, not even null or undefined.

## ---

The rules for converting strings and numbers to Boolean values state that 0,
NaN, and the empty string ("") count as false, while all the other values count
as true.

# optimization

https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e

always instantiate your object properties in the same order

assign all of an object's properties in its constructor

code that executes the same methos repeatedly will run faster
than code that executes many different methods only once


