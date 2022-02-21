const Joi = require('joi');

const cepRegex = /^\d{5}-?\d{3}$/;

const schema = Joi.string().pattern(cepRegex).required();

const validateCep = (req, res, next) => {
  const { cep } = req.params;
  const { error } = schema.validate(cep);

  if (error) {
    return res.status(400).json({ error: { code: 'invalidData', message: 'CEP inválido' } });
  }

  next();
};

module.exports = validateCep;
