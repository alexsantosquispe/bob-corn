import { Router } from "express";
import { supabaseClient } from "../config/supabaseClient.js";

export const purchasesRouter = Router();

purchasesRouter.get("/", async (req, res) => {
  try {
    const { data, error } = await supabaseClient.from("purchases").select("*");
    if (error) return res.status(400).json({ error: error.message });
    return res.json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
