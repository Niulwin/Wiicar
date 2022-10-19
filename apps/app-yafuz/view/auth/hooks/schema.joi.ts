import { NamespaceCountryCode, phoneValidation } from 'core';
import Joi from 'joi';

const messages = {
  'string.base': 'global.validations.string',
  'string.empty': `global.validations.required`,
  'string.min': 'global.validations.min%min%{#limit}',
  'string.max': 'global.validations.max%max%{#limit}',
  'email.base': 'global.validations.max%max%{#limit}',
  'any.required': `global.validations.required`
};

export const userSchema = (countryCode: NamespaceCountryCode) =>
  Joi.object({
    nombre: Joi.string().required().messages(messages),
    apellidos: Joi.string().required().messages(messages),
    address_wallet: Joi.string().required().messages(messages),
    celular: Joi.required()
      .messages(messages)
      .custom((value, helper) =>
        !phoneValidation(value, countryCode)
          ? helper.error('Phone is invalid')
          : value
      )
      .message('Phone is invalid'),
    country: Joi.string().required().messages(messages),
    username: Joi.string().required().messages(messages),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .messages(messages),
    password: Joi.string().required().min(5).max(12).messages(messages)
  });
