import express from 'express';
import dotenv from 'dotenv';
import {createClient} from '@supabase/supabase-js';
import cors from 'cors';
import eventosRoutes from './routes/eventos.js';

dotenv.config();

const app = express();
app.use(cors());    
const port = 3000;

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.use(express.json());   
app.use('/eventos', eventosRoutes(supabase));
app.get('/', (req, res) => {
  res.send('API de eventos com Express e Supabase!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});