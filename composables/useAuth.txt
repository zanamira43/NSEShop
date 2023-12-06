// import auth from "~~/middleware/auth";

export default () => {
  // get cookie value from cookie
  const cookie = useCookie('jwt')

  //login function
  const login = async (form, url) => {
    
    try{
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      })
        .then((response) => {
          useRouter().push("/");
        })
        .then((err) => {
          return err.message
        });

    }catch(e){
      console.log(e.toString())
    }

  }



  // user function get user form backend
  const getUser = async () => {
      const url = "http://localhost:3002/api/user";

      return await useFetch(url, {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

  }

  // logout the user
  const logout = async () => {
    const url = "http://localhost:3002/api/logout";
    await useFetch(url, {
      method:"POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
    
    window.location.reload(true)
  }

  return {
    cookie,
    getUser,
    login,
    logout
  }
  
}

