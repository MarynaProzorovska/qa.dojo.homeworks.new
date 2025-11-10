import { expect, test } from "playwright/test";
import {
  oddOrEvenNumber,
  sayHelloByTime,
  testResult,
  votePermission,
  numberComparison,
  walkPermissionByColor,
  positiveOrNegativeNumber,
} from "../functions/ifElseFunctions";

test("'oddOrEvenNumber' - zero value", () => {
  const result = oddOrEvenNumber(0);
  expect(result).toBe("Це нуль");
});

test("'oddOrEvenNumber' - odd value", () => {
  const result = oddOrEvenNumber(2);
  expect(result).toBe("Число парне");
});

test("'oddOrEvenNumber' - even value", () => {
  const result = oddOrEvenNumber(1);
  expect(result).toBe("Число непарне");
});

test("'sayHelloByTime' - morning", () => {
  const time = sayHelloByTime(9);
  expect(time).toBe("Доброго ранку!");
});

test("'sayHelloByTime' - day - 1", () => {
  const time = sayHelloByTime(12);
  expect(time).toBe("Доброго дня!");
});

test("'sayHelloByTime' - day - 2", () => {
  const time = sayHelloByTime(18);
  expect(time).toBe("Доброго дня!");
});

test("'sayHelloByTime' - evening", () => {
  const time = sayHelloByTime(19);
  expect(time).toBe("Доброго вечора!");
});

test("'sayHelloByTime' - wrong hour", () => {
  const time = sayHelloByTime(27);
  expect(time).toBe("Wrong time format. Please check again");
});
