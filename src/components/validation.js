// we take value entered and rules like isEmail, minLength and equalTo
const validate = (val, rules, connectedValue) => {
    // we want to store the result of the "emailValidator" functions so,
    // we set isValid to true coz if we have another rule executed before
    // it shouldn't affect this.
    let isValid = true
    // here we r using for-in loop to loop through rules objects
    for(let rule in rules){
        switch(rule){
            case 'isEmail':
                isValid = isValid && emailValidator(val)
                break
            case 'minLength':
                // rules[rule] gives the minlength mentioned in the state i.e '6'
                // coz we need to check if the pwd entered by user is valid/not
                isValid = isValid && minLengthValidator(val, rules[rule])
                break
            case 'equalTo':
                isValid = isValid && equalToValidator(val, connectedValue[rule])
                break
            default:
                isValid = true
        }
    }
    return isValid
}

const emailValidator = (val) => {
    // test() is a JS method which test wrt a string
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
}

const minLengthValidator = (val, minLength) => {
    return val >= minLength
}

const equalToValidator = (val, checkValue) => {
    return val === checkValue
}

export default validate