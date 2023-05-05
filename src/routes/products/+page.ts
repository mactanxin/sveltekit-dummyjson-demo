export const load = async ({ fetch }) => {
  const prodRes = await fetch('https://dummyjson.com/products')
  const products = await prodRes.json()

  return {
    products,
  }
}
