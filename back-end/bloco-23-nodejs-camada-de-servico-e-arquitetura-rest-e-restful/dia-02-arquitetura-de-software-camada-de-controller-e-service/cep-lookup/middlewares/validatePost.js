const Joi = require('joi');

const cepRegex = /^\d{5}-\d{3}$/;
const ufRegex = /^[a-zA-Z]{2}$/;

const schema = Joi.object({
  cep: Joi.string().pattern(cepRegex).required(),
  logradouro: Joi.string().alphanum().max(50).required(),
  bairro: Joi.string().alphanum().max(20).required(),
  localidade: Joi.string().alphanum().max(20).required(),
  uf: Joi.string().pattern(ufRegex).required(),
});

const validatePost = (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const { error } = schema.validate({ cep, logradouro, bairro, localidade, uf });

  if (error) {
    const { message } = error.details[0];
    return res.status(400).json({ error: { code: 'invalidData', message } });
  }

  next();
};

module.exports = validatePost;
