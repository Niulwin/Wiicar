import { NamespaceCountryCode, phoneValidation } from 'core';
import Joi from 'joi';

const messages = {
  'string.base': 'global.validations.string',
  'string.empty': `global.validations.required`,
  'string.required': `global.validations.required`,
  'string.min': 'global.validations.min%min%{#limit}',
  'string.max': 'global.validations.max%max%{#limit}',
  'string.email': 'global.validations.email',
  'string.ref': 'global.validations.phone_number'
};

export const userSchema = (countryCode: NamespaceCountryCode) =>
  Joi.object({
    password: Joi.string().required().min(5).max(16).messages(messages),
    confirmPassword: Joi.string()
      .valid(Joi.ref('password'))
      .required()
      .messages({ 'any.only': 'global.validations.password_confirm' }),
    nombre: Joi.string().required().messages(messages),
    apellidos: Joi.string().required().messages(messages),
    address_wallet: Joi.string().messages(messages),
    celular: Joi.string()
      .required()
      .custom((value, helper) =>
        !phoneValidation(value, countryCode)
          ? helper.error('string.ref')
          : value
      )
      .messages(messages),
    country: Joi.string().required().messages(messages),
    username: Joi.string().required().messages(messages),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .messages(messages)
  });
