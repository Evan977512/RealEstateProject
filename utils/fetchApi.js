import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com/";

export const fetchApi = async (url) => {
  /**url-접근하고자 하는 URL
   * options - 선택 매개변수, mehtod나 header 등을 지정할 수 있다. */
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "fc3d96a7a1msh4fcc1f5bad42ba1p138011jsn3bb351b29d9a",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  return data;
};
