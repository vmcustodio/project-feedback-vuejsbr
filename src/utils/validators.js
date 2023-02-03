// eslint-disable-next-line space-before-function-paren
export function validateEmptyAndLenght3(value) {
  // password not empty and > 3
  if (!value) {
    return '*Este campo é obrigatório'
  }

  if (value.length < 3) {
    return '*Este campo precisa de no mínimo 3 caracteres'
  }

  return true
}

// eslint-disable-next-line space-before-function-paren
export function validateEmptyAndEmail(value) {
  if (!value) {
    return '*Este campo é obrigatório'
  }

  const isValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value)

  if (!isValid) {
    return '*Este campo precisa ser um e-mail'
  }

  return true
}
