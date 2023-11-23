const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const txnRoutes = require("./routes/transactionRoutes");
const goalRoutes = require("./routes/goalRoutes")

const app = express();
const PORT = 2000;

const connectToDb = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to DB");
    }
    catch (error) {
        console.log(error);
    }
};
connectToDb();

app.use(express.json());
express.json()
app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true,
    })
);

app.use(bodyParser.json());
app.use("/auth", userRoutes);
app.use("/transaction", txnRoutes);
app.use("/goal", goalRoutes);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));