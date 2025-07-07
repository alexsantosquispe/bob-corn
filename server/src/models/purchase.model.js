import { supabaseClient } from "../config/supabaseClient.js";

export class PurchaseModel {
  static async getAllPurchases() {
    return await supabaseClient.from("purchases").select();
  }
}
