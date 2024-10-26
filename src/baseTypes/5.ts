/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let union: string | number;
let literal: "enable" | "disable";

union = 1;
union = "One";
// union = true // failed

literal = "enable";
literal = "disable";
// literal = "disable&&enable"; // failed
