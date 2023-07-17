"use strict";
const btn_values = document.getElementsByClassName("col");
const inputElement = document.querySelector(".text-input-container .text-input");
const calculateResult = document.getElementById("calculate-result");
const startBtn = document.getElementById("start-btn");
let isOn = false;
let A, B, C, D, E, F, X, Y;
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
                console.log(`this.TextContent: ${this.textContent}`);
                //show variable data
                if (inputElement.value === "A") {
                    if (calculateResult !== null) {
                        calculateResult.textContent = A;
                        return;
                    }
                }
                else if (inputElement.value === "B") {
                    if (calculateResult !== null) {
                        calculateResult.textContent = B;
                        return;
                    }
                }
                else if (inputElement.value === "C") {
                    if (calculateResult !== null) {
                        calculateResult.textContent = C;
                        return;
                    }
                }
                else if (inputElement.value === "D") {
                    if (calculateResult !== null) {
                        calculateResult.textContent = D;
                        return;
                    }
                }
                else if (inputElement.value === "E") {
                    if (calculateResult !== null) {
                        calculateResult.textContent = E;
                        return;
                    }
                }
                else if (inputElement.value === "F") {
                    if (calculateResult !== null) {
                        calculateResult.textContent = F;
                        return;
                    }
                }
                else if (inputElement.value === "X") {
                    if (calculateResult !== null) {
                        calculateResult.textContent = X;
                        return;
                    }
                }
                else if (inputElement.value === "Y") {
                    if (calculateResult !== null) {
                        calculateResult.textContent = Y;
                        return;
                    }
                }
                //here ->variable is removed and value is assigned to the respective variable
                else if (inputElement.value.includes("A") ||
                    inputElement.value.includes("B") ||
                    inputElement.value.includes("C") ||
                    inputElement.value.includes("D") ||
                    inputElement.value.includes("E") ||
                    inputElement.value.includes("F") ||
                    inputElement.value.includes("X") ||
                    inputElement.value.includes("Y")) {
                    // Create an array of characters to remove if -> is present
                    if (inputElement.value.includes("->")) {
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
                                }
                                else if (B === undefined && char === "B") {
                                    B = eval(inputElement.value.trim());
                                }
                                else if (C === undefined && char === "C") {
                                    C = eval(inputElement.value.trim());
                                }
                                else if (D === undefined && char === "D") {
                                    D = eval(inputElement.value.trim());
                                }
                                else if (E === undefined && char === "E") {
                                    E = eval(inputElement.value.trim());
                                }
                                else if (F === undefined && char === "F") {
                                    F = eval(inputElement.value.trim());
                                }
                                else if (X === undefined && char === "X") {
                                    X = eval(inputElement.value.trim());
                                }
                                else if (Y === undefined && char === "Y") {
                                    Y = eval(inputElement.value.trim());
                                }
                            }
                        });
                    }
                }
                if (inputElement.value.indexOf("(") !== -1) {
                    let temp = inputElement.value.indexOf("(");
                    if (inputElement.value[temp - 1] !== "*") {
                        let newString = inputElement.value.slice(0, temp) +
                            "*" +
                            inputElement.value.slice(temp);
                        inputElement.value = newString;
                    }
                }
                console.log(`value before breakData${inputElement.value}`);
                breakData(inputElement.value);
            }
            // When A variable is pressed
            else {
                if (this.textContent.trim() === "A" ||
                    this.textContent.trim() === "B" ||
                    this.textContent.trim() === "C" ||
                    this.textContent.trim() === "D" ||
                    this.textContent.trim() === "E" ||
                    this.textContent.trim() === "F" ||
                    this.textContent.trim() === "X" ||
                    this.textContent.trim() === "Y") {
                    let variable;
                    if ((this.textContent.trim() === "A" && A === undefined) ||
                        (this.textContent.trim() === "B" && B === undefined) ||
                        (this.textContent.trim() === "C" && C === undefined) ||
                        (this.textContent.trim() === "D" && D === undefined) ||
                        (this.textContent.trim() === "E" && E === undefined) ||
                        (this.textContent.trim() === "F" && F === undefined) ||
                        (this.textContent.trim() === "X" && X === undefined) ||
                        (this.textContent.trim() === "Y" && Y === undefined)) {
                        variable = `->${this.textContent.trim()}`;
                    }
                    else {
                        variable = this.textContent.trim();
                    }
                    if (inputElement.value === "") {
                        variable = `${this.textContent.trim()}`;
                    }
                    inputElement.value += variable;
                }
                else {
                    inputElement.value += this.textContent.trim();
                }
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
            console.log("RIght Direction");
            console.log(`This is the text ${text}`);
            let result = 0;
            if (text.includes("sin") ||
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
                text.includes("Y")) {
                let analyzedText = addMultiplySign(text);
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
const addMultiplySign = (text) => {
    while (text.includes("sin") ||
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
        text.includes("Y")) {
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
            if (text[index - 1] !== "*" &&
                text[index - 1] !== "+" &&
                text[index - 1] !== "-" &&
                text[index - 1] !== "/") {
                newString = text.slice(0, index) + "*" + num + text.slice(index + 1);
            }
            else {
                newString = text.slice(0, index) + num + text.slice(index + 1);
            }
            text = newString.replace("π", "");
        }
        if (text.includes("e")) {
            let index = text.indexOf("e");
            let num = String(Math.E.toFixed(4));
            let newString = "";
            if (text[index - 1] !== "*" &&
                text[index - 1] !== "+" &&
                text[index - 1] !== "-" &&
                text[index - 1] !== "/") {
                newString = text.slice(0, index) + "*" + num + text.slice(index + 1);
            }
            else {
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
            while (numberEndIndex < text.length &&
                /[\d.]/.test(text[numberEndIndex])) {
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
const variableMultiplyAdder = (variable, text) => {
    let variableValue = "";
    if (variable === "A") {
        variableValue = A;
    }
    else if (variable === "B") {
        variableValue = B;
    }
    else if (variable === "C") {
        variableValue = C;
    }
    else if (variable === "D") {
        variableValue = D;
    }
    else if (variable === "E") {
        variableValue = E;
    }
    else if (variable === "F") {
        variableValue = F;
    }
    else if (variable === "X") {
        variableValue = X;
    }
    else if (variable === "Y") {
        variableValue = Y;
    }
    let regex = new RegExp(variable, "g");
    text = text.replace(regex, variableValue);
    // Add multiplication sign between adjacent variables
    text = text.replace(/([A-FXY])(?=[A-FXY])/g, "$1*");
    return text;
};
