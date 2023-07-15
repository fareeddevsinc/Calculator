const btn_values = document.getElementsByClassName("col");
const inputElement = document.querySelector(
  ".text-input-container .text-input"
) as HTMLInputElement;

const calculateResult = document.getElementById("calculate-result");

for (let i = 0; i < btn_values.length; i++) {
  btn_values[i].addEventListener(
    "click",
    function (this: HTMLElement) {
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
        // else if (this.textContent.trim() === "&pi;") {
        //   if (calculateResult !== null) {
        //     calculateResult.textContent = "3.1416";
        //   }
        // } else if (this.textContent.trim() === "e") {
        //   if (calculateResult !== null) {
        //     calculateResult.textContent = "2.1718";
        //   }
        // }
        else {
          inputElement.value += this.textContent.trim();
        }
      }
    },
    false
  );
}
const breakData = (text: string) => {
  try {
    let result = eval(text);
    if (calculateResult !== null) {
      calculateResult.textContent = Number.isInteger(result)
        ? result
        : result.toFixed(4);
    }
  } catch (error) {
    if (calculateResult !== null) {
      calculateResult.textContent = "Error";
    }
  }
};
