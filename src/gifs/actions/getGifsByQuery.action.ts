import type { GiphyReponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";

import { giphyAPi } from "../../api/giphy.api";

export const getGifsByQuery = async( query: string ): Promise<Gif[]> => {

  const response = await giphyAPi.get<GiphyReponse>('/search', {
    params: {
      q: query,
      limit: 10,
    }
  });

  return response.data.data.map( (gif) => (
    {
      id: gif.id,
      title: gif.title,
      url: gif.images.original.url,
      width: Number(gif.images.original.width),
      height: Number(gif.images.original.height),
    }
  ))
};
