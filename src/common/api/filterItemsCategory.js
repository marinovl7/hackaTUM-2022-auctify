import { BACKEND_URL, getFilteredProducts } from './config';

export default async function getFilteredItems(query) {
  const response = await fetch(`${BACKEND_URL}${getFilteredProducts}${query}`);
  const res = await response.json();
  return res;
}
