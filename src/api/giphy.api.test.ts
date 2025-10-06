import { describe, expect, test } from "vitest";
import { giphyAPi } from "./giphy.api";

describe("giphtApi", () => {
  test("should be configured correctly", () => {
    const params = giphyAPi.defaults.params;

    expect(giphyAPi.defaults.baseURL).toBe("https://api.giphy.com/v1/gifs");
    expect(params.lang).toBe("es");
    expect(params.api_key).toBe(import.meta.env.VITE_GIPHY_API_KEY);

    expect(params).toStrictEqual({
      lang: "es",
      api_key: import.meta.env.VITE_GIPHY_API_KEY,
    });
  });
});
