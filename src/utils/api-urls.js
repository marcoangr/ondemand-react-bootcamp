import { API_BASE_URL } from "./constants";

export const API_FEATUREDBANNERS_URL = `${API_BASE_URL}/documents/search?ref={apiRef}&q=${encodeURIComponent(
  '[[at(document.type, "product")]]'
)}&q=${encodeURIComponent(
  '[[at(document.tags, ["Featured"])]]'
)}&lang=en-us&pageSize=16`;

export const API_CATEGORIES_URL = `${API_BASE_URL}/documents/search?ref={apiRef}&q=${encodeURIComponent(
  '[[at(document.type, "category")]]'
)}&lang=en-us&pageSize=30`;

export const API_PRODUCTS_URL = `${API_BASE_URL}/documents/search?ref={apiRef}&q=${encodeURIComponent(
  '[[at(document.type, "product")]]'
)}&lang=en-us`;

export const API_PRODUCTDETAILS_URL = `${API_BASE_URL}/documents/search?ref={apiRef}&q=${encodeURIComponent(
  '[[at(document.id, "{searchP}")]]'
)}`;

export const API_SEARCHPRODUCTS_URL = `${API_BASE_URL}/documents/search?ref={apiRef}&q=${encodeURIComponent(
  '[[at(document.type, "product")]]'
)}&q=${encodeURIComponent('[[fulltext(document, "{searchP}")]]')}&lang=en-us`;
export function urlHandlingPagination(url, page, pageSize) {
  if (page !== undefined) {
    url = url + `&page=${page}&pageSize=${pageSize}`;
  }

  return url;
}

export function urlHandlingSearch(url, searchParam) {
  if (searchParam !== undefined) {
    url.replace("searchP", searchParam);
  }

  return url;
}
