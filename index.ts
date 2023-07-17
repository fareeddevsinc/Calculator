const btn_values = document.getElementsByClassName("col");
const inputElement = document.querySelector(
  ".text-input-container .text-input"
) as HTMLInputElement;
const calculateResult = document.getElementById("calculate-result");
const startBtn = document.getElementById("start-btn") as HTMLElement;
let isOn: boolean = false;
let A: string,
  B: string,
  C: string,
  D: string,
  E: string,
  F: string,
  X: string,
  Y: string;
for (let i = 0; i < btn_values.length; i++) {
  btn_values[i].addEventListener("click", function (this: HTMLElement) {
    if (this.textContent !== null) {
      if (this.textContent.trim() === "AC") {
        inputElement.value = "";
        if (calculateResult !== null) {
          calculateResult.textContent = "";
        }
      } else if (this.textContent.trim() === "DEL") {
        let value = inputElement.value.split("");
        value.pop();
        inputElement.value = value.join("");
      } else if (this.textContent.trim() === "=") {
        console.log(`this.TextContent: ${this.textContent}`);
        if (inputElement.value === "A") {
          if (calculateResult !== null) {
            calculateResult.textContent = A;
            console.log(`This is A: ${A}`);
            return;
          }
        } else if (inputElement.value === "B") {
          if (calculateResult !== null) {
            calculateResult.textContent = B;
            return;
          }
        } else if (inputElement.value === "C") {
          if (calculateResult !== null) {
            calculateResult.textContent = C;
            return;
          }
        } else if (inputElement.value === "D") {
          if (calculateResult !== null) {
            calculateResult.textContent = D;
            return;
          }
        } else if (inputElement.value === "E") {
          if (calculateResult !== null) {
            calculateResult.textContent = E;
            return;
          }
        } else if (inputElement.value === "F") {
          if (calculateResult !== null) {
            calculateResult.textContent = F;
            return;
          }
        } else if (inputElement.value === "X") {
          if (calculateResult !== null) {
            calculateResult.textContent = X;
            return;
          }
        } else if (inputElement.value === "Y") {
          if (calculateResult !== null) {
            calculateResult.textContent = Y;
            return;
          }
        } else if (
          inputElement.value.includes("A") ||
          inputElement.value.includes("B") ||
          inputElement.value.includes("C") ||
          inputElement.value.includes("D") ||
          inputElement.value.includes("E") ||
          inputElement.value.includes("F") ||
          inputElement.value.includes("X") ||
          inputElement.value.includes("Y")
        ) {
          // Create an array of characters to remove
          let charsToRemove = ["A", "B", "C", "D", "E", "F", "X", "Y"];

          // Loop through the array and remove each character from the input value
          charsToRemove.forEach((char) => {
            let index = inputElement.value.indexOf(char);
            if (index !== -1) {
              // Find the value before the arrow
              let value = "";
              let parts = inputElement.value.slice(0, index).split("->");
              let lastPart = parts.join("");
              if (lastPart !== undefined) {
                value = lastPart.trim();
              }

              // Remove the value and arrow from the input value
              inputElement.value = value;
              // Assign the value to its respective variable if it's not already defined
              if (A === undefined && char === "A") {
                A = eval(inputElement.value.trim());
              } else if (B === undefined && char === "B") {
                B = eval(inputElement.value.trim());
              } else if (C === undefined && char === "C") {
                C = eval(inputElement.value.trim());
              } else if (D === undefined && char === "D") {
                D = eval(inputElement.value.trim());
              } else if (E === undefined && char === "E") {
                E = eval(inputElement.value.trim());
              } else if (F === undefined && char === "F") {
                F = eval(inputElement.value.trim());
              } else if (X === undefined && char === "X") {
                X = eval(inputElement.value.trim());
              } else if (Y === undefined && char === "Y") {
                Y = eval(inputElement.value.trim());
              }
            }
          });

          // Store the remaining value in the found variable
        }

        if (inputElement.value.indexOf("(") !== -1) {
          let temp: number = inputElement.value.indexOf("(");
          let newString =
            inputElement.value.slice(0, temp) +
            "*" +
            inputElement.value.slice(temp);
          inputElement.value = newString;
        }
        breakData(inputElement.value);
      }
      // When A variable is pressed
      else {
        if (
          this.textContent.trim() === "A" ||
          this.textContent.trim() === "B" ||
          this.textContent.trim() === "C" ||
          this.textContent.trim() === "D" ||
          this.textContent.trim() === "E" ||
          this.textContent.trim() === "F" ||
          this.textContent.trim() === "X" ||
          this.textContent.trim() === "Y"
        ) {
          let variable;
          if (
            (this.textContent.trim() === "A" && A === undefined) ||
            (this.textContent.trim() === "B" && B === undefined) ||
            (this.textContent.trim() === "C" && C === undefined) ||
            (this.textContent.trim() === "D" && D === undefined) ||
            (this.textContent.trim() === "E" && E === undefined) ||
            (this.textContent.trim() === "F" && F === undefined) ||
            (this.textContent.trim() === "X" && X === undefined) ||
            (this.textContent.trim() === "Y" && Y === undefined)
          ) {
            variable = `->${this.textContent.trim()}`;
          } else {
            variable = this.textContent.trim();
          }
          console.log(`This is A: ${A}`);
          console.log(this.textContent.trim());
          if (inputElement.value === "") {
            variable = `${this.textContent.trim()}`;
          }
          inputElement.value += variable;
        } else {
          inputElement.value += this.textContent.trim();
        }
      }
    }
  }),
    false;
}
const breakData = (text: string): void => {
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
const addMultiplySign = (text: string): string => {
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
      let newString = text.slice(0, index) + num + text.slice(index + 1);
      text = newString.replace("π", "");
    }
    if (text.includes("e")) {
      let index = text.indexOf("e");
      let num = String(Math.E.toFixed(4));
      let newString = text.slice(0, index) + num + text.slice(index + 1);
      text = newString.replace("e", "");
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

function replaceTrigFunction(
  text: string,
  functionName: string,
  mathFunction: MathFunction
): string {
  let index = text.indexOf(functionName);
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
const variableMultiplyAdder = (variable: string, text: string) => {
  let temp: number = text.indexOf(variable);
  let newString = text.slice(0, temp) + "*" + text.slice(temp);
  text = newString;
  return text;
};
