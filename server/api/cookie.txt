import {getCookie} from 'h3'


export default defineEventHandler((event) => {
  let cookie = getCookie(event, 'jwt')

 
  if(cookie){
    console.log(cookie)
  }
})