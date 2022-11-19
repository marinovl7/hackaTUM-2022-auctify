import { BACKEND_URL, getAllProducts } from './config';

export default async function getAllItems() {
  const response = await fetch(`${BACKEND_URL}${getAllProducts}`);
  const res = await response.json();
  return res;
}
