export default async (slug) => {
  const {apiURL} = useURl()
  const {data, refresh} = await useFetch(`${apiURL}/api/products/${slug}`)

  return {
    data
  }
}