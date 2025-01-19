type Falsy = false | 0 | "" | null | undefined | "NaN";

type FalsyString = `${Falsy}` | "null" | "undefined";

type ValidData = any[] | object | string;
type VerifyDataValidation = boolean | null;

export type {
  Falsy,
  ValidData,
  FalsyString,
  VerifyDataValidation
}