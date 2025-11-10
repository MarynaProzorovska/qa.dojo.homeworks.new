export function oddOrEvenNumber(number: number) {
  if (number === 0) {
    return "Це нуль";
  } else if (number % 2 === 0) {
    return "Число парне";
  } else if (number === 0) {
    return "Це нуль";
  } else {
    return "Число непарне";
  }
}

export function sayHelloByTime(hour: number) {
  if (hour < 0 || hour > 24) {
    return "Wrong time format. Please check again";
  } else if (hour < 12) {
    return "Доброго ранку!";
  } else if (hour >= 12 && hour <= 18) {
    return "Доброго дня!";
  } else if (hour > 18) {
    return "Доброго вечора!";
  }
}

export function testResult(mark: number) {
  if (mark >= 50) {
    console.log("Test is passed");
  } else if (mark < 50) {
    console.log("Test is not passed");
  } else if (mark < 0 || mark > 100) {
    console.log("Mark has unappropriated format");
  }
}

export function votePermission(age: number) {
  if (age >= 18) {
    console.log("You can vote");
  } else {
    console.log("You cannot vote");
  }
}

export function numberComparison(numberOne: number, numberTwo: number) {
  if (numberOne > numberTwo) {
    console.log("Number one is higher than number 2");
  } else if (numberTwo > numberOne) {
    console.log("Number two is higher than number one");
  } else if (numberOne === numberTwo) {
    console.log("Numbers are equal");
  } else if (typeof numberOne !== "number" || typeof numberTwo !== "number") {
    console.log("Wrong format");
  }
}

export function walkPermissionByColor(trafficLightColor: string) {
  if (trafficLightColor == "green") {
    console.log("You can go!");
  } else if (trafficLightColor == "yellow") {
    console.log("Be ready");
  } else if (trafficLightColor == "red") {
    console.log("Wait");
  } else {
    console.log("Sorry, traffic light is broken");
  }
}

export function positiveOrNegativeNumber(number: number) {
  if (number === 0) {
    console.log("Число дорівнює нулю.");
  } else if (number > 0) {
    console.log("Число додатнє.");
  } else if (number < 0) {
    console.log("Число від’ємне.");
  }
}
