export default defineNuxtRouteMiddleware((to) => {

  const cookie = useCookie("jwt")

  if(!cookie || !cookie.value && to.path === '/products'){
    return navigateTo('/login')

  }
})