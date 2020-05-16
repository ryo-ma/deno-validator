# deno-validator

🦕A simple string validation for deno

# Example

```
import * as validator from "./mod.ts";

const strEmpty: string = ""
validator.isEmpty(strEmpty) // true

const strBoolean: string = "true"
validator.isBoolean(strBoolean) // true

const strNumeric: string = "100"
validator.isNumeric(strNumeric) // true
```