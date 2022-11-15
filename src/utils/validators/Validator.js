const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
import validateDate from 'validate-date'

function checkClass(classes) {
    return isNaN(classes) || classes > 2 || classes < 1
}

function checkPhNumber(phone) {
    var regex = /^\+(?:[0-9] ?){6,14}[0-9]$/
    return !regex.test(phone)
}

function checkDefault(cDefault) {
    return isNaN(cDefault) || cDefault > 1 || cDefault < 0

}


function checkStatus(status) {
    return isNaN(status) || status > 3 || status < 1
}

function checkName(name) {
    return !regName.test(name)
}

function checkCountryCode(countryCode) {
    return !isNaN(countryCode)
}

function checkSource(source) {
    return isNaN(source) || source > 3 || source < 1
}

function checkFavorite(favorite) {
    return isNaN(favorite) || favorite > 1 || favorite < 0
}

export {
    checkClass,
    checkDefault,
    checkPhNumber,
    checkStatus,
    validateDate,
    checkName,
    checkCountryCode,
    checkFavorite,
    checkSource
}