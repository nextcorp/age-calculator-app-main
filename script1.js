const submit_btn = document.querySelector(".submit-btn")

function checkDate(day, month, year) {
    
}

function checkEmpty(day, month, year) {
    const display = (where) => {
        const errOutput = document.querySelector(`#${where.id} ~ .err-message`)
        errOutput.classList.remove("hidden")
        errOutput.textContent = "This field is required"
        where.classList.add("invalid-input")
    }

    if (day.value.length === 0) display(day)
    if (month.value.length === 0) display(month)
    if (year.value.length === 0) display(year)
}

function submitButtonHandler(e) {
    e.preventDefault()

    const day = document.getElementById("day")
    const month = document.getElementById("month")
    const year = document.getElementById("year")

    checkEmpty(day, month, year)
}

function reset() {

}

submit_btn.addEventListener("click", submitButtonHandler)