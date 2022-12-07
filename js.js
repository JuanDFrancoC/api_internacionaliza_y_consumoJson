const url = "https://platzi-avo.vercel.app/api/avo";
const urlbase = "https://platzi-avo.vercel.app";
const containerapp = document.querySelector("#app");



//Usando la API de internacionalización del browser:es una api
//del navegador que podemos usar para fechas, precios y mas
//se usa de la siguiente manera:
const formatPrice = (price) => {
  
  const newPrice = new window.Intl.NumberFormat("en-EN",{ //numberformat es decirle que vamos a usar monedas
    style: "currency",//se le manda como parametro un estylo.
    currency: "USD",//se le mada como parametro el tipo de moneda.
  }).format(price);

  return newPrice;

};


//uso de asimc await que funciona como una promesa pero es mas moderno
async function fetchData() {
  const response = await fetch(url); //uso de fetch
  const respuestaJoson = await response.json(); //convierto a json
  const arrayNodos = []; //creo un array

  respuestaJoson.data.forEach((item) => { //resivo la respuesta en parametro llamado item
    console.log(item.name);
    // create image
    const image = document.createElement("img");
    image.src = urlbase+item.image;
    // create title
    const title = document.createElement("h2");
    title.textContent = item.name;
    // create price
    const price = document.createElement("div");
    price.textContent = formatPrice(item.price);

    const container = document.createElement("div");
    container.className = "card"
    container.append(image, title, price);

    arrayNodos.push(container); //con push agregamos un nuevo elemento al final de nuestro array
  });

  containerapp.append(...arrayNodos) //agregamos al body los elementos: estos tres puntos 
  //quieren decir agregame todos los resultados que contenga el array
}

fetchData();
