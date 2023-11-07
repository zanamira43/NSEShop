export default async () => {
  const {apiURL} = useURl()

  const {data, refresh} = await useFetch(`${apiURL}/api/categories`)

  return {
    data,
    refresh,
  }
}