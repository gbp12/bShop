import axios from "axios";
import { API_URL } from "../config";
export default async function getBShopsByName(name) {
  try {
    const response = await axios.get(`${API_URL}/barberShops/byName/${name}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
