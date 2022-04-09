require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(require("./routes/comm.route"));
app.use(require("./routes/user.route"));
app.use(require("./routes/news.route"));
app.use(require("./routes/cats.route"));

mongoose.connect(process.env.MONGO_SERV);

app.listen(process.env.PORT, () => console.log("SERVER_IS_ON"));
