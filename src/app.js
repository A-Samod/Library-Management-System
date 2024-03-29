import express from "express";
import cors from "cors";
import logger from "./utils/logger";
import "dotenv/config";
import { connect } from "./utils/database.connection";

const app = express();
const PORT = process.env.PORT || "8090";

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.get("/", (req, res, next) => {
  res.send("<h2> 📚 Library Management System API</h2>");
  next();
});

app.listen(PORT, () => {
  logger.info(`Server is up and running on PORT ${PORT}`);
  connect();
});
