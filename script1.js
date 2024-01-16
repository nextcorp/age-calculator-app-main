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

function displayMessage(where, message) {
    const errOutput = document.querySelector(`#${where.id} ~ .err-message`)
    errOutput.classList.remove("hidden")
    errOutput.textContent = message
    where.classList.add("invalid-input")
}

function checkDate(day, month, year) {
    const today = new Date(Date.now())

    if (year.value > today.getFullYear()) {
        displayMessage(year, "Must be in the past")
        return
    }

    if ((month.value < 1) || (month.value > 12)) {
        displayMessage(month, "Must be a valid month")
        return
    }

    if ((day.value < 1) || (day.value > 31)) {
        displayMessage(day, "Must be a valid day")
        return
    }

    const daysInMonth = new Date(today.getFullYear(), today.getMonth()-1, 0).getDate()

    if (day.value > daysInMonth) {
        reset(day, month, year)
        displayMessage(day, "Must be a valid date")
        month.classList.add("invalid-input")
        year.classList.add("invalid-input")
        return
    }

    if (new Date(year.value, month.value-1, day.value-1) > today) {
        displayMessage(year, "Must be in the past")
        return
    }
}

function checkEmpty(day, month, year) {
    const message = "This field is required"

    if (day.value.length === 0) displayMessage(day, message)
    if (month.value.length === 0) displayMessage(month, message)
    if (year.value.length === 0) displayMessage(year, message)
}

function submitButtonHandler(e) {
    e.preventDefault()

    reset(day, month, year)
    checkEmpty(day, month, year)
    checkDate(day, month, year)
}

clear(day, month, year)

submit_btn.addEventListener("click", submitButtonHandler)