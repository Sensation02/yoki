const emailErrors = {
  required: 'Email is required',
  invalid: 'Email is invalid',
  latin: 'Email must contain only latin letters',
}

const passwordErrors = {
  required: 'Password is required',
  isShort: 'Password must be at least 8 characters',
  containUppercase: 'Password must contain at least one uppercase letter',
  containSpecial: 'Password must contain at least one special character',
  containDigit: 'Password must contain at least one digit',
  latin: 'Password must contain only latin letters',
}

export const validateEmail = {
  required: emailErrors.required,
  validate: (value) => {
    if (!value.match(/^[A-Za-z0-9@.]+$/)) {
      return emailErrors.latin
    }
    if (!value.match(/^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/)) {
      return emailErrors.invalid
    }
    return true
  },
}
export const validatePassword = {
  required: passwordErrors.required,
  minLength: {
    value: 8,
    message: passwordErrors.isShort,
  },
  validate: (value) => {
    if (!value.match(/^[A-Za-z0-9!@#$%^&*()]+$/)) {
      return passwordErrors.latin
    }
    if (!value.match(/^(?=.*[A-Z])/)) {
      return passwordErrors.containUppercase
    }
    if (!value.match(/^(?=.*[!@#$%^&*()])/)) {
      return passwordErrors.containSpecial
    }
    if (!value.match(/^(?=.*[0-9])/)) {
      return passwordErrors.containDigit
    }
    return true
  },
}
