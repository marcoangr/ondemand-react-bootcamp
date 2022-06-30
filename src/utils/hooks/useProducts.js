import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";

export function useProducts(page, pageSize) {
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
        const url = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
          '[[at(document.type, "product")]]'
        )}&lang=en-us&page=${page}&pageSize=${pageSize}`;
        const response = await fetch(url, {
          signal: controller.signal,
        });
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
  }, [apiRef, isApiMetadataLoading, page, pageSize]);

  return products;
}
