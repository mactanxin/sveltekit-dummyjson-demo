export const load = async ({ fetch, url }) => {
  const limit = Number(url.searchParams.get('limit')) || 10;
  const skip = Number(url.searchParams.get('skip')) || 0;
  const prodRes = await fetch(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`);
  const products = await prodRes.json()

  return {
    products,
  }
}
