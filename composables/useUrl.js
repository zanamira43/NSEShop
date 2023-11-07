export const useURl = () => {
  const config = useRuntimeConfig()
  const apiURL = config.public.api_url

  return {
    apiURL
  }
}