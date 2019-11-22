export const handleForm = async user => {
    const handleError = checkForm(user)

    if(handleError.indexOf(true) === -1) {
        const date  = user.birthday.split('-')
        const birthdayFormat = ((`${date[2]}/${date[1]}/${date[0]}`))
        
        const newUser = {
            name: user.name, 
            stack: user.stack, 
            birthday: birthdayFormat, 
            email: user.email
        }

        return [newUser]
    }

    return handleError
}

const checkForm = user => {
    let isErrorName = false
    let isErrorStack = false
    let isErrorBirthday = false
    let isErrorEmail = false

    if(user.name.trim() === '') {
        isErrorName = true
    } 
    else {
        isErrorName = false
    }

    if(user.stack.trim() === '') {
        isErrorStack = true
    }
    else {
        isErrorStack = false
    }

    if(user.birthday.trim() === '') {
        isErrorBirthday = true
    }
    else {
        isErrorBirthday = false
    }

    if(user.email.trim() === '' || user.email.indexOf('@') === -1 || user.email.indexOf('.com') === -1) {
        isErrorEmail = true
    }
    else {
        isErrorEmail = false
    }

    return [isErrorName, isErrorStack, isErrorBirthday, isErrorEmail]
}