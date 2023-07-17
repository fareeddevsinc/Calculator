import { breakData, } from "./calculator.js";
export const btn_values = document.getElementsByClassName("col");
export const inputElement = document.querySelector(".text-input-container .text-input");
export const calculateResult = document.getElementById("calculate-result");
export let A, B, C, D, E, F, X, Y;
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
