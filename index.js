const express = require("express");
const app = express();
require("dotenv").config();
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const doctorRoute = require("./routes/doctorsRoute");
const port = 5000;
const cors = require("cors");
const dbConfig = require("./config/dbConfig");

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/doctor", doctorRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
