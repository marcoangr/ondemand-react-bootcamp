import { useState, useEffect } from "react";
import { useLatestAPI } from "./useLatestAPI";

export function useGetData(url) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();

  const [data, setData] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getData() {
      try {
        setData({ data: {}, isLoading: true });

        const response = await fetch(url.replace("{apiRef}", apiRef), {
          signal: controller.signal,
        });
        const dataResponse = await response.json();

        setData({
          data: dataResponse,
          isLoading: false,
        });
      } catch (err) {
        setData({
          data: {},
          isLoading: false,
        });
        console.error(err);
      }
    }

    getData();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, url]);

  return data;
}
