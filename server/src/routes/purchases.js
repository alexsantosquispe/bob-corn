import { PurchaseController } from "../controllers/purchases.controller.js";
import { Router } from "express";

export const purchasesRouter = Router();

purchasesRouter.get("/", PurchaseController.getAllPurchases);
