"use strict";
const btn_values = document.getElementsByClassName("col");
const inputElement = document.querySelector(".text-input-container .text-input");
const calculateResult = document.getElementById("calculate-result");
const startBtn = document.getElementById("start-btn");
let isOn = false;
// startBtn.addEventListener("click", () => {
//   if (startBtn.textContent && startBtn.textContent.trim() === "ON") {
//     console.log(startBtn.textContent);
//     isOn = true;
//     console.log(isOn);
//     startBtn.textContent = "OFF";
//     inputElement.value = "ON";
//     setTimeout(() => {
//       inputElement.value = "";
//     }, 2000);
//   } else if (startBtn.textContent && startBtn.textContent.trim() === "OFF") {
//     startBtn.textContent = "ON";
//     inputElement.value = "OFF";
//     setTimeout(() => {
//       inputElement.value = "";
//     }, 2000);
//     isOn = false;
//   }
// });
for (let i = 0; i < btn_values.length; i++) {
    btn_values[i].addEventListener("click", function () {
        if (this.textContent !== null) {
            if (this.textContent.trim() === "AC") {
                inputElement.value = "";
                if (calculateResult !== null) {
                    calculateResult.textContent = "";
                }
            }
            else if (this.textContent.trim() === "DEL") {
                let value = inputElement.value.split("");
                value.pop();
                inputElement.value = value.join("");
            }
            else if (this.textContent.trim() === "=") {
                if (inputElement.value.indexOf("(") !== -1) {
                    let temp = inputElement.value.indexOf("(");
                    let newString = inputElement.value.slice(0, temp) +
                        "*" +
                        inputElement.value.slice(temp);
                    inputElement.value = newString;
                }
                breakData(inputElement.value);
            }
            else {
                inputElement.value += this.textContent.trim();
            }
        }
    }),
        false;
}
const breakData = (text) => {
    try {
        text = text.trim();
        if (text === "") {
            if (calculateResult !== null) {
                calculateResult.textContent = "";
            }
        }
        else if (text === "π") {
            if (calculateResult !== null) {
                calculateResult.textContent = String(Math.PI.toFixed(4));
            }
        }
        else if (text === "e") {
            if (calculateResult !== null) {
                calculateResult.textContent = String(Math.E.toFixed(4));
            }
        }
        else {
            let result = 0;
            if (text.includes("sin") ||
                text.includes("cos") ||
                text.includes("tan") ||
                text.includes("e") ||
                text.includes("√") ||
                text.includes("^") ||
                text.includes("π")) {
                let analyzedText = analyzeMethod(text);
                if (analyzedText !== undefined) {
                    result = eval(analyzedText);
                }
            }
            else {
                result = eval(text);
            }
            if (calculateResult !== null) {
                calculateResult.textContent = Number.isInteger(result)
                    ? result.toString()
                    : result.toFixed(4);
            }
        }
    }
    catch (error) {
        if (calculateResult !== null) {
            calculateResult.textContent = "Error";
        }
    }
};
const analyzeMethod = (text) => {
    try {
        text = addMultiplySign(text);
        return text;
    }
    catch (error) {
        // handle error here
    }
    return text;
};
const addMultiplySign = (text) => {
    while (text.includes("sin") ||
        text.includes("cos") ||
        text.includes("tan") ||
        text.includes("π") ||
        text.includes("e") ||
        text.includes("^") ||
        text.includes("√")) {
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
            while (numberEndIndex < text.length &&
                /[\d.]/.test(text[numberEndIndex])) {
                numberEndIndex++;
            }
            let number = Number(text.slice(numberStartIndex, numberEndIndex));
            let squareRoot = Math.sqrt(number);
            let squareRootText = text.slice(index, numberEndIndex);
            text = text.replace(squareRootText, String(squareRoot.toFixed(4)));
        }
    }
    console.log(`This is what I get: ${text}`);
    return text;
};
function replaceTrigFunction(text, functionName, mathFunction) {
    let index = text.indexOf(functionName);
    let numberStartIndex = index + functionName.length;
    let numberEndIndex = numberStartIndex;
    while (numberEndIndex < text.length && /[\d.]/.test(text[numberEndIndex])) {
        numberEndIndex++;
    }
    let numberInDegrees = Number(text.slice(numberStartIndex, numberEndIndex));
    let numberInRadians = numberInDegrees * (Math.PI / 180);
    let result;
    if (functionName === "tan" &&
        Math.abs((numberInRadians % Math.PI) - Math.PI / 2) < 1e-10) {
        result = "Infinity";
    }
    else {
        result = String(mathFunction(numberInRadians));
    }
    let functionText = text.slice(index, numberEndIndex);
    return text.replace(functionText, result);
}
