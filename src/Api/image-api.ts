import axios from "axios";
import { UnsplashResponse } from "../Types/types";

async function getImages(
  query: string,
  page: number
): Promise<UnsplashResponse> {
  const Base_Url: string = "https://api.unsplash.com/";
  const End_Point: string = "search/photos";
  const url: string = Base_Url + End_Point;
  const params = {
    client_id: "FUB-a8-0LjUWoPGw2m8AhdOKLrfed8RR2vc8ngk164A",
    query: query,
    page: page,
    per_page: 20,
  };
  const { data } = await axios.get<UnsplashResponse>(url, { params });
  return data;
}

export default getImages;
