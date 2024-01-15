import axios from "axios"

const BASE_URL = process.env.REACT_APP_BASE_URL ?? ""
export const getCountries = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/countriesArray`);
    return res.data;
  } catch (error) {
    console.log("getCountries error:", error)
  }
} 