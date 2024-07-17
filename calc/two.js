const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const result = document.getElementById("result")

const plus = e => {
    num1Value = Number(num1.value)
    num2Value = Number(num2.value)
    resultValue = num1Value + num2Value
    result.textContent = resultValue
}  

const plusBtn = document.getElementById("plus") 
plusBtn.addEventListener("click", plus)
