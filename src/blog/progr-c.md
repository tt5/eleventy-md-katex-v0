# C

A **C Program** is a sequence of text files that contain *declarations*. They
undergo translation to become an executable program, which is executed when the
OS calls its **main function** (unless it is itself the OS or another
freestanding program, in which case the entry point is implementation-defined.)
*These declarations declare functions and objects* with external linkage.
They are known as **external declarations** because they appear outside of any
function.

preprocessing translation unit:  
A source file together with all the headers
and source files included via `#include`.

**translation unit**  
Preprocessing translation unit after preprocessing.
*One or more external declaration.*
Translation units may be separately translated and then later linked to
produce an executable program.

A declaration that also causes storage to be reserved for an object or a function named
by the identifier is a **definition**.

declaration: file.h, definition: file.c.

**function prototype**  
*Declaration of a function* that declares the types of
its parameters.

The ellipsis notation in a function prototype declarator causes argument type
conversion to stop after the last declared parameter. The default argument
promotions are performed on trailing arguments.

A **definition** of an identifier is a declaration for that identifier that:  
— for an object, causes storage to be reserved for that object;  
— for a function, includes the function body;  
— for an enumeration constant, is the (only) declaration of the identifier;  
— for a typedef name, is the first (or only) declaration of the identifier.  

If the declaration of an identifier for an object has file scope and an
initializer, the declaration is an **external definition** for the identifier.

**function definition**  
declspec declor [ declaration ]? compoundstat

The **declaration specifiers** consist of a sequence of specifiers that indicate
the linkage, storage duration, and part of the type of the entities that the
declarators denote. The init-declarator-list is a comma-separated sequence of
declarators, each of which may have additional type information, or an
initializer, or both. The declarators contain the identifiers (if any) being
declared.

**declarator**  
Name of the function and the identifiers of its parameters.  A declarator with
a parametertypelist serves as a function prototype for later calls to the same
function in the same translation unit.  Each declarator declares one
identifier, and asserts that when an operand of the same form as the declarator
appears in an expression, it designates a function or object with the scope,
storage duration, and type indicated by the declaration specifiers.  A **full
declarator** is a declarator that is not part of another declarator.  A
declarator in parentheses is identical to the unparenthesized declarator, but
the binding of complicated declarators may be altered by parentheses.

**abstract declarator**  
Cast or argument to `size-of`.

A **punctuator** is a symbol that has independent syntactic and semantic
significance.  Depending on context, it may specify an operation to be
performed (which in turn may yield a value or a function designator, produce a
side effect, or some combination thereof) in which case it is known as an
operator (other forms of operator also exist in some contexts).

**object-like macro**  
`#define` identifier replacementlist newline

**function-like macro**  
`#define` identifier lparen [ idlist$_{opt}$ OR `...` OR idlist `,  ...` ] `)` replacementlist newline

**preprocessingfile**  
[ if-section OR control-line OR test-line OR `#` non-directive ]`*`

**storageclassspecifiers**  
[ extra OR static ]?

A *function declaration* can contain the storage class specifier `static` only if
it is at file scope

A **generic selection** is a primary expr:  
`_Generic` `(` conrolling-expr `,` [ generic-association `,` ]~nopt~ generic-association `)`

**generic-association** &nbsp;&nbsp;&nbsp;&nbsp; *def*  
type-name `:` aexpr  
default `:` aexpr

**controlling-expr**  
any expression (except for the comma operator) whose type must be compatible
with one of the type-names if the default association is not used

**type-name**  
complete object type other than a variably modified type.

**argument**  
expression in the comma-separated list
bounded by the parantheses in a function call expression,
or a sequence of preprocessing tokens in the comma-separated
list bounded by parantheses in a function-like macro invocation.

A postfix expression followed by parentheses `()` containing a possibly empty, comma-
separated list of expressions is a **function call**.

**parameter**  
object declared as part of a function declaration
or definition that acquires a value on entry
to the function, or an identifier from the comma-separated
list bounded by the parantheses immediately following the macro
name in a function-like macro definition.

**type qualifier**  
`const` &nbsp;&nbsp;&nbsp;&nbsp;
`restrict` &nbsp;&nbsp;&nbsp;&nbsp;
`volatile` &nbsp;&nbsp;&nbsp;&nbsp;
`_Atomic` &nbsp;&nbsp;&nbsp;&nbsp;

**function specifiers**  
`inline` &nbsp;&nbsp;&nbsp;&nbsp;
`_Noreturn` &nbsp;&nbsp;&nbsp;&nbsp;

**storage class specifier**  
`typedef` &nbsp;&nbsp;&nbsp;&nbsp;
`extern` &nbsp;&nbsp;&nbsp;&nbsp;
`static` &nbsp;&nbsp;&nbsp;&nbsp;
`_Thread_local` &nbsp;&nbsp;&nbsp;&nbsp;
`auto` &nbsp;&nbsp;&nbsp;&nbsp;
`register` &nbsp;&nbsp;&nbsp;&nbsp;

**storage duration**  
Static,
thread,
automatic,
allocated.

**extended character set** &nbsp;&nbsp;&nbsp;&nbsp; *def*  
basic character set  
extended characters (nopt)

**basic execution character set** &nbsp;&nbsp;&nbsp;&nbsp; *def*  
basic character set  
alert  
backspace  
CR  
NL  
NULL  

**statement** &nbsp;&nbsp;&nbsp;&nbsp; *def*  
block  
exprstat  
selectionstat  
jumpstat  
iterationstat  

**block (compound stat)** &nbsp;&nbsp;&nbsp;&nbsp; *def*  
`{` *[* decl *or* stat *]** `}`

**iterationstat** &nbsp;&nbsp;&nbsp;&nbsp; *def*  
`while ( expr ) stat`  
`do stat while ( expr ) ;`  
`for ( [ expr? ; or decl ] expr? ; expr? ) stat`

**typename**  
(name of a type) *def*  
spqul abstrdeclarator$_{\text{opt}}$

In several contexts, it is necessary to specify a type. This is accomplished
using a *type name*, which is syntactically a declaration for a function or
an object of that type that omits the identifier.

**ifgr** &nbsp;&nbsp;&nbsp;&nbsp; *def*  
`#`[  
`if` cexpr  
`ifdef` id  
`ifndef` id  
] nl [grp]$_{nopt}$  

**initialzer-list** &nbsp;&nbsp;&nbsp;&nbsp; *def*  
[ [ designator ]$\_n$
= ]$\_{opt}$
initializer [, <$\gets\bullet$>]$_{nopt}$

