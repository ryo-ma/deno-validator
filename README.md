# deno-validator

🦕A simple string validation like [validator.js](https://github.com/validatorjs/validator.js) for deno

# Example

```typescript
import * as validator from "https://deno.land/x/validator/mod.ts";

const strEmpty: string = "";
validator.isEmpty(strEmpty); // true

const strBoolean: string = "true";
validator.isBoolean(strBoolean); // true

const strNumeric: string = "100";
validator.isNumeric(strNumeric); // true
```
