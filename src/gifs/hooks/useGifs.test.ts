import { describe, expect, test, vi } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useGifs } from "./useGifs";
import * as gifActions from "../actions/getGifsByQuery.action";

describe("useGifs", () => {
  test("should return default values and methods", () => {
    const { result } = renderHook(() => useGifs());

    expect(result.current.gifs.length).toBe(0);
    expect(result.current.previousTerms.length).toBe(0);
    expect(result.current.handleSearch).toBeDefined();
    expect(result.current.handleTermClicked).toBeDefined();
  });

  test("should return a list of gifs", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleSearch("goku");
    });

    expect(result.current.gifs.length).toBe(10);
  });

  test("should return a list of gifs from cache", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleTermClicked("goku");
    });

    expect(result.current.gifs.length).toBe(10);

    vi.spyOn(gifActions, "getGifsByQuery").mockRejectedValue(
      new Error("This is my custom error")
    );

    await act(async () => {
      await result.current.handleTermClicked("goku");
    });

    expect(result.current.gifs.length).toBe(10);
  });
});
