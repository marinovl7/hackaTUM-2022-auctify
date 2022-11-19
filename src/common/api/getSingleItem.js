import { BACKEND_URL, getSingleProduct } from './config';

export default async function getSignleItem(id) {
  const response = await fetch(`${BACKEND_URL}${getSingleProduct}${id}`);
  const res = await response.json();
  return res;
}
