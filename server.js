// IMPORTANDO PACOTES
const express = require('express');
const session = require('express-session');
const path = require('path');
const cors = require('cors');
const res = require('express/lib/response');
// CRIANDO SERVIDOR
const app = express();
const PORT = 2828;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(session({
secret: 'secreto',
resave: false,
saveUninitialized: false,
cookie: { secure: false }
}));
app.use(express.static(path.join(__dirname, 'src')));
app.use(express.json());

// ENDPOINTS
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/html/index.html');
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'src/html/404.html'));
});

// Conectando ao site local
app.listen(PORT, () => {
  console.log(`Servidor conectado com sucesso na porta ${PORT}.`);
});