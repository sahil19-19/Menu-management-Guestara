const express = require("express");
const db = require("./config/mongo");

const categoryRouter = require("./routes/category_router");
const subcatRouter = require("./routes/subcategory_router");
const itemRouter = require("./routes/item_router");
require("dotenv").config();

const app = express();
app.use(express.json());
db();

app.use("/api/category", categoryRouter);
app.use("/api/subcategory", subcatRouter);
app.use("/api/item", itemRouter);

const PORT = process.env.PORT | 3000;

app.listen(PORT, () => {
    console.log(`app running on http://localhost:${PORT}`);
});
