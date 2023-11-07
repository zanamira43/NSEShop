import axios from 'axios'

export default () => {
  const {apiURL} = useURl()

  // upload image for categories
  const categoryImage = async (image) => await axios.post(`${apiURL}/api/upload/categories`, 
  {
    "image": image
  }, 
  {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })


  // upload image for products
  const productImage = async (image) => await axios.post(`${apiURL}/api/upload/products`,
    {
      "image": image
    },
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  )
  return {
    categoryImage,
    productImage
  }
}