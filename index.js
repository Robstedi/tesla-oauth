const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Tesla OAuth działa!");
});

app.listen(3000, () => console.log("Serwer działa na porcie 3000"));
