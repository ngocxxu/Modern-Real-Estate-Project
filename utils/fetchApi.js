import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const {data} = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "0f02c57d82msh01855291bc96120p16711fjsn1e4cdd354eee",
    }, 
  });
  return data;
};
