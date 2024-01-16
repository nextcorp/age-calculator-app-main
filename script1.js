const submit_btn = document.querySelector(".submit-btn")
const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById("year")

function clear(day, month, year) {
    day.value = null
    month.value = null
    year.value = null
}

function reset(day, month, year) {
    const hide = (what) => {
        const errOutput = document.querySelector(`#${what.id} ~ .err-message`)
        errOutput.classList.add("hidden")
    }

    day.classList.remove("invalid-input")
    month.classList.remove("invalid-input")
    year.classList.remove("invalid-input")

    hide(day)
    hide(month)
    hide(year)
}

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

    reset(day, month, year)
    checkEmpty(day, month, year)
}

clear(day, month, year)

submit_btn.addEventListener("click", submitButtonHandler)