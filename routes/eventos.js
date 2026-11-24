import express from 'express';
const router = express.Router();

export default (supabase) => {

// Listar eventos
router.get('/', async (req, res) => {
    const { data, error } = await supabase.from('eventos').select('*');
    if (error) return res.status(500).json({ error: error.message });
    return res.json(data);
  });

// Cadastrar eventos
router.post('/', async (req, res) => {
    const { titulo, descricao, data_evento, local } = req.body;
    const { data, error } = await supabase.from('eventos').insert([{ titulo, descricao, data_evento, local }]);
    if (error) return res.status(400).json({ error: error.message });
    return res.status(201).json({mensagem: "Evento cadastrado com sucesso!"});
  });

    return router;
};