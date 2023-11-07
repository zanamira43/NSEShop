export default async (slug) => {
  const {apiURL} = useURl()
  const {data, refresh} = await useFetch(`${apiURL}/api/categories/${slug}`)

  return {
    data
  }
}