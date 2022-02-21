const Cep = require('../services/Cep');

const getByCep = async (req, res) => {
  const { cep } = req.params;
  const cepInfo = await Cep.getByCep(cep);

  if (!cepInfo) {
    return res.status(404).json({ error: { code: 'notFound', message: 'CEP não encontrado' } });
  }

  return res.status(200).json(cepInfo);
};

module.exports = { getByCep };
