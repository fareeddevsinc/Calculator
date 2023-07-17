import {
  btn_values,
  inputElement,
  calculateResult,
  A,
  B,
  C,
  D,
  E,
  F,
  X,
  Y,
} from "./main.js";
export const breakData = (text: string): void => {
  try {
    text = text.trim();
    if (text === "") {
      if (calculateResult !== null) {
        calculateResult.textContent = "";
      }
    } else if (text === "π") {
      if (calculateResult !== null) {
        calculateResult.textContent = String(Math.PI.toFixed(4));
      }
    } else if (text === "e") {
      if (calculateResult !== null) {
        calculateResult.textContent = String(Math.E.toFixed(4));
      }
    } else {
      let result: number = 0;
      if (
        text.includes("sin") ||
        text.includes("cos") ||
        text.includes("tan") ||
        text.includes("e") ||
        text.includes("√") ||
        text.includes("^") ||
        text.includes("π") ||
        text.includes("A") ||
        text.includes("B") ||
        text.includes("C") ||
        text.includes("D") ||
        text.includes("E") ||
        text.includes("F") ||
        text.includes("X") ||
        text.includes("Y")
      ) {
        let analyzedText = addMultiplySign(text);
        if (analyzedText !== undefined) {
          result = eval(analyzedText) as number;
        }
      } else {
        result = eval(text) as number;
      }
      if (calculateResult !== null) {
        calculateResult.textContent = Number.isInteger(result)
          ? result.toString()
          : result.toFixed(4);
      }
    }
  } catch (error) {
    if (calculateResult !== null) {
      calculateResult.textContent = "Error";
    }
  }
};
export const addMultiplySign = (text: string): string => {
  while (
    text.includes("sin") ||
    text.includes("cos") ||
    text.includes("tan") ||
    text.includes("π") ||
    text.includes("e") ||
    text.includes("^") ||
    text.includes("√") ||
    text.includes("A") ||
    text.includes("B") ||
    text.includes("C") ||
    text.includes("D") ||
    text.includes("E") ||
    text.includes("F") ||
    text.includes("X") ||
    text.includes("Y")
  ) {
    if (text.includes("sin")) {
      text = replaceTrigFunction(text, "sin", Math.sin);
    }
    if (text.includes("cos")) {
      text = replaceTrigFunction(text, "cos", Math.cos);
    }
    if (text.includes("tan")) {
      text = replaceTrigFunction(text, "tan", Math.tan);
    }
    if (text.includes("π")) {
      let index = text.indexOf("π");
      let num = String(Math.PI.toFixed(4));
      let newString = "";
      if (
        text[index - 1] !== "*" &&
        text[index - 1] !== "+" &&
        text[index - 1] !== "-" &&
        text[index - 1] !== "/"
      ) {
        newString = text.slice(0, index) + "*" + num + text.slice(index + 1);
      } else {
        newString = text.slice(0, index) + num + text.slice(index + 1);
      }
      text = newString.replace("π", "");
    }
    if (text.includes("e")) {
      let index = text.indexOf("e");
      let num = String(Math.E.toFixed(4));
      let newString = "";
      if (
        text[index - 1] !== "*" &&
        text[index - 1] !== "+" &&
        text[index - 1] !== "-" &&
        text[index - 1] !== "/"
      ) {
        newString = text.slice(0, index) + "*" + num + text.slice(index + 1);
      } else {
        newString = text.slice(0, index) + num + text.slice(index + 1);
      }
      text = newString.replace("π", "");
      console.log(`this is e: ${text}`);
    }
    if (text.includes("^")) {
      text = text.replace("^", "**");
    }
    if (text.includes("√")) {
      let index = text.indexOf("√");
      let numberStartIndex = index + 1;
      let numberEndIndex = numberStartIndex;
      while (
        numberEndIndex < text.length &&
        /[\d.]/.test(text[numberEndIndex])
      ) {
        numberEndIndex++;
      }
      let number = Number(text.slice(numberStartIndex, numberEndIndex));
      let squareRoot = Math.sqrt(number);

      let squareRootText = text.slice(index, numberEndIndex);
      text = text.replace(squareRootText, String(squareRoot.toFixed(4)));
    }
    if (text.includes("A")) {
      console.log("Yup Everything Good!");
      text = variableMultiplyAdder("A", text);
    }
    if (text.includes("B")) {
      text = variableMultiplyAdder("B", text);
    }
    if (text.includes("C")) {
      text = variableMultiplyAdder("C", text);
    }
    if (text.includes("D")) {
      text = variableMultiplyAdder("D", text);
    }
    if (text.includes("E")) {
      text = variableMultiplyAdder("E", text);
    }
    if (text.includes("F")) {
      text = variableMultiplyAdder("F", text);
    }
    if (text.includes("X")) {
      text = variableMultiplyAdder("X", text);
    }
    if (text.includes("Y")) {
      text = variableMultiplyAdder("Y", text);
    }
  }
  return text;
};

type MathFunction = (x: number) => number;

export function replaceTrigFunction(
  text: string,
  functionName: string,
  mathFunction: MathFunction
): string {
  let index = text.indexOf(functionName);

  // Add multiplication sign before functionName if there is no operator before it
  if (index > 0 && /[\dA-FXY)]/.test(text[index - 1])) {
    text = text.slice(0, index) + "*" + text.slice(index);
    index++;
  }

  let numberStartIndex = index + functionName.length;
  let numberEndIndex = numberStartIndex;
  while (numberEndIndex < text.length && /[\d.]/.test(text[numberEndIndex])) {
    numberEndIndex++;
  }
  let numberInDegrees = Number(text.slice(numberStartIndex, numberEndIndex));
  let numberInRadians = numberInDegrees * (Math.PI / 180);

  let result: string;
  if (
    functionName === "tan" &&
    Math.abs((numberInRadians % Math.PI) - Math.PI / 2) < 1e-10
  ) {
    result = "Infinity";
  } else {
    result = String(mathFunction(numberInRadians));
  }

  let functionText = text.slice(index, numberEndIndex);
  return text.replace(functionText, result);
}

export const variableMultiplyAdder = (variable: string, text: string) => {
  let variableValue = "";
  if (variable === "A") {
    variableValue = A;
  } else if (variable === "B") {
    variableValue = B;
  } else if (variable === "C") {
    variableValue = C;
  } else if (variable === "D") {
    variableValue = D;
  } else if (variable === "E") {
    variableValue = E;
  } else if (variable === "F") {
    variableValue = F;
  } else if (variable === "X") {
    variableValue = X;
  } else if (variable === "Y") {
    variableValue = Y;
  }

  let regex = new RegExp(variable, "g");
  text = text.replace(regex, variableValue);

  // Add multiplication sign between adjacent variables
  text = text.replace(/([A-FXY])(?=[A-FXY])/g, "$1*");

  return text;
};
