import axios from 'axios';

/**
 * Fetches data from a given URL/end-point
 * @param url
 * @example
 * const result = doFetch();
 */
export function doFetch(url: string) {
  const response: any = axios(url);
  return response;
}
