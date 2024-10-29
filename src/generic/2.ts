/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare<T>(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position"| "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

// const result = compare(
//   { name: "Item1", color: "red" },
//   { position: 10, weight: 5 }
// );
// console.log(result) // OK

// const result2 = compare(
//   { name: "Item1", color: "red" },
//   { position: 10, color: "red" } // fail
// );
// console.log(result2)

export {};