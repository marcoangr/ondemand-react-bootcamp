import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";

export function useSearch(searchterm) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [products, setProducts] = useState(() => ({
    dataProducts: {},
    isLoadingProducts: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getFeaturedBanners() {
      try {
        setProducts({ dataProducts: {}, isLoadingProducts: true });
        const url_spec = `[[fulltext(document, "${searchterm}")]]`;
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]'
          )}&q=${encodeURIComponent(url_spec)}&lang=en-us`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setProducts({ dataProducts: data, isLoadingProducts: false });
      } catch (err) {
        setProducts({ dataProducts: {}, isLoadingProducts: false });
        console.error(err);
      }
    }

    getFeaturedBanners();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, searchterm]);

  return products;
}
