import "dotenv/config";

import express, { json } from "express";

import cors from "cors";
import { purchasesRouter } from "./src/routes/purchases.js";

const app = express();
app.use(json());
app.use(cors());
app.disable("x-powered-by");

app.use("/purchases", purchasesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
