const submit_btn = document.querySelector(".submit-btn")
const day_field = document.querySelector(".entry .field:nth-child(1)")
const month_field = document.querySelector(".entry .field:nth-child(2)")
const year_field = document.querySelector(".entry .field:nth-child(3)")

function clear(field) {
    const input_element = field.querySelector("input")
    input_element.value = null
}

function reset(field) {
    const input_element = field.querySelector("input")
    const error_element = field.querySelector(".err-message")

    input_element.classList.remove("invalid-input")
    error_element.classList.add("hidden")
}

function showInvalidInput(field) {
    const input_element = field.querySelector("input")
    input_element.classList.add("invalid-input")
}

function showMessage(field, message) {
    const error_element = field.querySelector(".err-message")

    error_element.classList.remove("hidden")
    error_element.textContent = message
}

function getFieldValue(field) {
    return field.querySelector("input").value
}

function checkDateValidity() {
    const invalidDateMessage = "Must be a valid date"
    const futureDateMessage = "Must be in the past"

    let all_ok = true

    const inputDate = new Date(`${getFieldValue(year_field)}-${getFieldValue(month_field)}-${getFieldValue(day_field)}`)
    /*
    console.log(inputDate)
    console.log(inputDate.getDate())
    console.log(inputDate.getMonth() + 1)
    console.log(inputDate.getFullYear())
    */
   
    // not working!!
    // todo: fix this

    if (
        (inputDate.getDate() !== Number(getFieldValue(day_field))) &&
    (inputDate.getMonth() + 1 !== Number(getFieldValue(month_field))) &&
    (inputDate.getFullYear() !== Number(getFieldValue(year_field)))
    ) {
        console.log("date not valid")
        all_ok = false
        showInvalidInput(day_field)
        showInvalidInput(month_field)
        showInvalidInput(year_field)
        showMessage(day_field, invalidDateMessage)
    }
}

function checkEmptyFields(e) {
    e.preventDefault()

    reset(day_field)
    reset(month_field)
    reset(year_field)

    const requiredMessage = "This field is required"
    const invalidDayMessage = "Must be a valid day"
    const invalidMonthMessage = "Must be a valid month"
    const invalidYearMessage = "Must be in the past"

    const currentYear = (new Date(Date.now())).getFullYear()

    // before checking date and calculating age, we need to make sure that all input field are correct and not empty
    let all_ok = true

    if (getFieldValue(day_field).length === 0) {
        showInvalidInput(day_field)
        showMessage(day_field, requiredMessage)
        all_ok = false
    } else if ((getFieldValue(day_field) < 1) || (getFieldValue(day_field) > 31)) {
        showInvalidInput(day_field)
        showMessage(day_field, invalidDayMessage)
        all_ok = false
    }

    if (getFieldValue(month_field).length === 0) {
        showInvalidInput(month_field)
        showMessage(month_field, requiredMessage)
        all_ok = false
    } else if ((getFieldValue(month_field) < 1) || (getFieldValue(month_field) > 12)) {
        showInvalidInput(month_field)
        showMessage(month_field, invalidMonthMessage)
        all_ok = false
    }

    if (getFieldValue(year_field).length === 0) {
        showInvalidInput(year_field)
        showMessage(year_field, requiredMessage)
        all_ok = false
    } else if (getFieldValue(year_field) > currentYear) {
        showInvalidInput(year_field)
        showMessage(year_field, invalidYearMessage)
        all_ok = false
    }

    if (all_ok) {
        checkDateValidity()
    }
}

clear(day_field)
clear(month_field)
clear(year_field)

submit_btn.addEventListener("click", checkEmptyFields)