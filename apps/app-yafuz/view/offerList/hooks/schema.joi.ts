import Joi from 'joi';

const messages = {
  'any.required': 'global.validations.required',
  'any.empty': 'global.validations.required'
};

export const salesSchema = Joi.object({
  quantity: Joi.required().messages(messages),
  salesId: Joi.required().messages(messages),
  toPay: Joi.required().messages(messages)
});
