import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";

export function useCategories() {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [categories, setCategories] = useState(() => ({
    dataCategories: {},
    isLoadingCategories: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getFeaturedBanners() {
      try {
        setCategories({ dataCategories: {}, isLoadingCategories: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "category")]]'
          )}&lang=en-us&pageSize=30`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setCategories({ dataCategories: data, isLoadingCategories: false });
      } catch (err) {
        setCategories({ dataCategories: {}, isLoadingCategories: false });
        console.error(err);
      }
    }

    getFeaturedBanners();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return categories;
}
