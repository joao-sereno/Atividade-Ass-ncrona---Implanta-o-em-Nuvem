const express = require("express");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3000;
let visitas = 0;

app.get("/", (req, res) => {
  visitas++;
  res.send(`
    <h1>Minha aplicação na nuvem</h1>
    <p>Hora no servidor: ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}</p>
    <p>Visitas desde que o servidor iniciou: ${visitas}</p>
    <p>Servidor: ${os.hostname()}</p>
  `);
});

app.get("/api/status", (req, res) => {
  res.json({ ok: true, visitas, hora: new Date().toISOString() });
});

app.listen(PORT, "0.0.0.0", () => console.log("Rodando na porta " + PORT));
