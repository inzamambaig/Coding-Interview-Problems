### Falsy Values in J.S.

| Value     |
| --------- |
| false     |
| 0         |
| ""        |
| null      |
| undefined |
| NaN       |

### Comparing 0, "", []

```Javascript
false == 0
// true
0 == ""
// true
"" == false
// true
[] == false
// true
```

### null and undefined

**When comparing null and undefined, they are only equal to themselves and each other**

```Javascript
NaN == null
// false
NaN == undefined
// false
null == false
// false
undefined == false
// false
NaN == false
```

** Even NaN is not equal to itself**

```Javascript
NaN == NaN
// false
```
