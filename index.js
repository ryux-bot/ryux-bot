const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
res.send("RYUX BOT aktif! Server berhasil berjalan.");
});

app.get("/status", (req, res) => {
res.json({
bot: "RYUX BOT",
status: "online",
whatsapp: "belum terhubung"
});
});

app.listen(PORT, "0.0.0.0", () => {
console.log("RYUX BOT berjalan di port ${PORT}");
});
