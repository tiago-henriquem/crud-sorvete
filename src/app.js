import express from "express";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Home da aplicacao');
})

const sabores = [
  {
    id: 1,
    nome: 'Morango',
    disponivel: true
  },
  {
    id: 2,
    nome: 'Chocolate',
    disponivel: true
  },
  {
    id: 3,
    nome: 'Maracuja',
    disponivel: true
  }
]

app.get('/sabores', (req, res) => {
  res.status(200).send(sabores);
})

app.get('/saborEspecifico/:id', (req, res) => {
  
})

app.post('/sabores', (req, res) => {
  sabores.push(req.body);
  res.status(200).send('Sabor criado');
})

app.put('/sabores/:id', (req, res) => {
  const index = buscaSabor(req.params.id);
  sabores[index].nome = req.body.nome;
  res.status(200).send(sabores);
})

app.delete('/sabores/:id', function(req, res) {
  const { id } = req.params;
  const index = buscaSabor(id);
  sabores.splice(index, 1);
  res.status(200).send('Sabor apagado!');
})

function buscaSabor(id) {
  return sabores.findIndex(sabor => sabor.id == id);
}

export default app;