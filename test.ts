import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
import * as validator from "./mod.ts";

Deno.test("Check the isEmpty", function (): void {
  const str: string = "";
  assertEquals(validator.isEmpty(str), true);
});

Deno.test("Check the isBoolean", function (): void {
  const strTrue: string = "true";
  const strFalse: string = "false";
  const strZero: string = "0";
  const strOne: string = "1";
  assertEquals(validator.isBoolean(strTrue), true);
  assertEquals(validator.isBoolean(strFalse), true);
  assertEquals(validator.isBoolean(strZero), true);
  assertEquals(validator.isBoolean(strOne), true);
});

Deno.test("Check the isNumeric", function (): void {
  const str: string = "1000";
  assertEquals(validator.isNumeric(str), true);
});
