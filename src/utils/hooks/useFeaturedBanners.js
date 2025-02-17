import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";

export function useFeaturedBanners() {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [featuredBanners, setFeaturedBanners] = useState(() => ({
    dataBanners: {},
    isLoadingBanners: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getFeaturedBanners() {
      try {
        setFeaturedBanners({ data: {}, isLoadingBanners: true });
        const url = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
          '[[at(document.type, "banner")]]'
        )}&lang=en-us&pageSize=5`;

        const response = await fetch(url, {
          signal: controller.signal,
        });
        const data = await response.json();

        setFeaturedBanners({ dataBanners: data, isLoadingBanners: false });
      } catch (err) {
        setFeaturedBanners({ dataBanners: {}, isLoadingBanners: false });
        console.error(err);
      }
    }

    getFeaturedBanners();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return featuredBanners;
}
