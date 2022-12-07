let products = JSON.parse(localStorage.getItem('products ')) ?
JSON.parse(localStorage.getItem('products ')) : [
    {
        id: 1,
        productName: "Lisbon Portrait",
        imageUrl: "https://i.postimg.cc/JzkS5HkW/Cities-in-Portugal-Lisbon.webp",
        price: "R2500",
        description:"In 1139, Alfonso Henriques declared himself King of Portugal. Since then, the country has grown into a gorgeous land of history and culture. Portugal covers 800 kilometers along the coast of the Atlantic Ocean and boasts some of the best beaches in the world as well as a great mix of rugged and scenic landscapes."
    },

    {
        id: 2,
        productName: "Porto Portrait",
        imageUrl: "https://i.postimg.cc/X7wwKVYz/Cities-in-Portugal-Porto.webp",
        price: "R3400",
        description:"No list of the best cities in Portugal would be complete without including the largest city in Portugal, Lisbon. If you don't mind the crowds, then you should know that there's a reason why Lisbon is quickly making its way to becoming one of the most popular tourist destinations in all of Europe. It's a beautiful city with phenomenal weather. "
    },

    {
        id: 3,
        productName: "Sintra Portrait",
        imageUrl: "https://i.postimg.cc/FRBx6GMC/Cities-in-Portugal-Sintra.webp",
        rice: "R1750",
        description:"Sintra is the former favored summer residence of the Portuguese royal family and much of their nobility. For this reason, there are many gorgeous estates and castles to explore around this city"
    },

    {
        id: 4,
        productName: "Alcobaça And Batalha Portrait",
        imageUrl: "https://i.postimg.cc/nLwR8H71/Cities-in-Portugal-alcobacajpg.webp",
        price: "R1400",
        description:"Alobaça and Batalha are both homes to monasteries that are UNESCO World Heritage Sites. Both of the monasteries are some of the oldest in Portugal and are rich in history. Alcobaça monastery was founded in 1153 and completed in the mid 13 century making it the oldest example of gothic architecture in Portugal."
    }
];

let images = document.querySelector('#tbody')

function display(){
    products.forEach((item)=>{
        images.innerHTML += `       <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@md</td>
      </tr>`})
    }