const url = "http://68.183.140.187/api-rest/productos.php?desde=0&hasta=100//allow-cors"
export const Fetchcodigos = async() => {
  console.log("entrando a Fetch")
  fetch(url,{
    mode:'no-cors',
    headers: {
         "Accept": "application/json"
 }})
    .then(res => {
      console.log(res)
      return res.json();
    })
    .then((data)=>{
      console.log(data)
    })
}

