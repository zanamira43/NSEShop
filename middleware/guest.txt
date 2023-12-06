export default defineNuxtRouteMiddleware((to) => {
  const {cookie} = useAuth()

  if(cookie && cookie.value){
    return navigateTo("/")
  }
 
  })