import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";

export function useProductDetails(productId) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [products, setProducts] = useState(() => ({
    productDetails: {},
    areLoadingDetails: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getFeaturedBanners() {
      try {
        setProducts({ productDetails: {}, areLoadingDetails: true });
        let api_parameters = `[[at(document.id, "${productId}")]]`;
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            api_parameters
          )}`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setProducts({ productDetails: data.results, areLoadingDetails: false });
      } catch (err) {
        setProducts({ productDetails: {}, areLoadingDetails: false });
        console.error(err);
      }
    }

    getFeaturedBanners();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, productId]);
  return products;
}
