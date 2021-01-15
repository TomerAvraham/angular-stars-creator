const express = require("express");
const cors = require("cors");
const ConnectToMongo = require("./config/mongo");

const app = express();

app.use(cors());
app.use(express.json());
ConnectToMongo();

app.use("/galaxy", require("./routes/galaxy.routes"));
app.use("/star", require("./routes/star.routes"));

const PORT = 5000;
app.listen(PORT, console.log(`Server running on port${PORT}`));
