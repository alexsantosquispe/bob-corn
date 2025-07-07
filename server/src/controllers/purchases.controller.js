import { PurchaseModel } from "../models/purchase.model.js";

export class PurchaseController {
  static async getAllPurchases(_, res) {
    try {
      const { data, error } = await PurchaseModel.getAllPurchases();
      if (error) return res.status(400).json({ error: error.message });
      return res.json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
