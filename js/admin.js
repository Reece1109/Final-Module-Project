let products = JSON.parse(localStorage.getItem("MyTable"))?
JSON.parse(localStorage.getItem("MyTable"))
: [
    {
        id: 1,
        productName: "Lisbon Portrait",
        imageUrl:"https://i.postimg.cc/JzkS5HkW/Cities-in-Portugal-Lisbon.webp",
        price: "R2500",
        description:"In 1139, Alfonso Henriques declared himself King of Portugal. Since then, the country has grown into a gorgeous land of history and culture. Portugal covers 800 kilometers along the coast of the Atlantic Ocean and boasts some of the best beaches in the world as well as a great mix of rugged and scenic landscapes.",
    },

    {
        id: 2,
        productName: "Porto Portrait",
        imageUrl: "https://i.postimg.cc/X7wwKVYz/Cities-in-Portugal-Porto.webp",
        price: "R3400",
        description:"No list of the best cities in Portugal would be complete without including the largest city in Portugal, Lisbon. If you don't mind the crowds, then you should know that there's a reason why Lisbon is quickly making its way to becoming one of the most popular tourist destinations in all of Europe. It's a beautiful city with phenomenal weather. ",
    },

    {
        id: 3,
        productName: "Sintra Portrait",
        imageUrl:"https://i.postimg.cc/FRBx6GMC/Cities-in-Portugal-Sintra.webp",
        price: "R2250",
        description:"Sintra is the former favored summer residence of the Portuguese royal family and much of their nobility. For this reason, there are many gorgeous estates and castles to explore around this city",
    },
    {
        id: 4,
        productName: "Alcobaça And Batalha Portrait",
        imageUrl:"https://i.postimg.cc/nLwR8H71/Cities-in-Portugal-alcobacajpg.webp",
        price: "R1750",
        description:"Sintra is the former favored summer residence of the Portuguese royal family and much of their nobility. For this reason, there are many gorgeous estates and castles to explore around this city",
    },

    {
        id: 5,
        productName: "Leiria Portrait",
        imageUrl:"https://i.postimg.cc/Kzwtp2NV/Cities-in-Portugal-Leiria.webp",
        price: "R3200",
        description:"Alobaça and Batalha are both homes to monasteries that are UNESCO World Heritage Sites. Both of the monasteries are some of the oldest in Portugal and are rich in history. Alcobaça monastery was founded in 1153 and completed in the mid 13 century making it the oldest example of gothic architecture in Portugal.",
    },
    {
        id: 6,
        productName: "Cascais Portrait",
        imageUrl:"https://i.postimg.cc/c4tCs3cV/Cities-in-Portugal-cascais.webp",
        price: "R",
        description:"Alobaça and Batalha are both homes to monasteries that are UNESCO World Heritage Sites. Both of the monasteries are some of the oldest in Portugal and are rich in history. Alcobaça monastery was founded in 1153 and completed in the mid 13 century making it the oldest example of gothic architecture in Portugal.",
    },
    {
        id: 7,
        productName: "Costa Nova Portrait",
        imageUrl:"https://i.postimg.cc/vZCb08xf/Cities-in-Portugal-Costa-Nova.webp",
        price: "R",
        description:"Alobaça and Batalha are both homes to monasteries that are UNESCO World Heritage Sites. Both of the monasteries are some of the oldest in Portugal and are rich in history. Alcobaça monastery was founded in 1153 and completed in the mid 13 century making it the oldest example of gothic architecture in Portugal.",
    },
    {
        id: 8,
        productName: "Tomar Portrait",
        imageUrl: "https://i.postimg.cc/jS2yzcyC/Cities-in-Portugal-tomar.webp",
        price: "R",
        description:"Alobaça and Batalha are both homes to monasteries that are UNESCO World Heritage Sites. Both of the monasteries are some of the oldest in Portugal and are rich in history. Alcobaça monastery was founded in 1153 and completed in the mid 13 century making it the oldest example of gothic architecture in Portugal.",
    },
    {
        id: 9,
        productName: "Èvora Portrait",
        imageUrl: "https://i.postimg.cc/fbKZDcgj/Cities-in-Portugal-evora.webp",
        price: "R",
        description:"Alobaça and Batalha are both homes to monasteries that are UNESCO World Heritage Sites. Both of the monasteries are some of the oldest in Portugal and are rich in history. Alcobaça monastery was founded in 1153 and completed in the mid 13 century making it the oldest example of gothic architecture in Portugal.",
    },
    {
        id: 10,
        productName: "Braga Portrait",
        imageUrl: "https://i.postimg.cc/k4W7LrPG/Cities-in-Portugal-braga.webp",
        price: "R",
        description:"Alobaça and Batalha are both homes to monasteries that are UNESCO World Heritage Sites. Both of the monasteries are some of the oldest in Portugal and are rich in history. Alcobaça monastery was founded in 1153 and completed in the mid 13 century making it the oldest example of gothic architecture in Portugal.",
    },
    ];
function display() {
Object.keys(products).forEach((item) => {
    document.querySelector(".MyTable").innerHTML += `<tr>
        <th scope="row">${products[item].id}</th>
        <td>${products[item].productName}</td>
        <td>${products[item].description}</td>
        <td>${products[item].price}</td>

        </tr>`;});
}
display();
localStorage.setItem("MyTable", JSON.stringify(products));

let addButton = document.querySelector("addButton");
addButton.addEventListener("click", (e) => {
e.preventDefault();
let imageName = document.querySelector("#imageName").value;
let description = document.querySelector("#description").value;
let price = document.querySelector("#inputPrice").value;
});

products.push({
productName,
description,
price,
});
localStorage.setItem("products", JSON.stringify(products));

function remove(id) {
localStorage.setItem("products", JSON.stringify(products));
products.pop(id);
document.querySelector("#delete");
products.splice(id, 1 - 1);
localStorage.setItem("products", stringify(products));
}
