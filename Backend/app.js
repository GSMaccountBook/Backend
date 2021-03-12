const express = require("express");
const app = express();

const indexRouter = require("./routes/index");

app.use(indexRouter);

const port = process.env.PORT || 3002;

app.listen(port, () => console.log(`listening on port ${port}`));