export default () => {
  const {apiURL} = useURl()

  // get list of products by using category slug
  const getProductsBySlug = async (slug) => await useFetch(`${apiURL}/api/products?cslug=${slug}`)
  // get all products without any condition
  const getProducts = async () => await useFetch(`${apiURL}/api/products`)


  // // delete prdocts 
  // // you can pass product slug or product id
  // const deleteProudct = async (id) => await fetch(`${apiURL}/api/products/${id}`, {
  //   method: "Delete"
  // })



  return {
   getProductsBySlug,
   getProducts,
  //  deleteProudct
  }
}