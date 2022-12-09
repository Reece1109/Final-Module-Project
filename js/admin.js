// localStorage.removeItem("MyTable");

let products = JSON.parse(localStorage.getItem("MyTable"))?
JSON.parse(localStorage.getItem("MyTable"))
: [
    {
        id: 1,
        productName: "Lisbon Portrait",
        imageUrl:"https://i.postimg.cc/JzkS5HkW/Cities-in-Portugal-Lisbon.webp",
        price: "2550",
        description:"In 1139, Alfonso Henriques declared himself King of Portugal. Since then, the country has grown into a gorgeous land of history and culture. Portugal covers 800 kilometers along the coast of the Atlantic Ocean and boasts some of the best beaches in the world as well as a great mix of rugged and scenic landscapes.",
    },

    {
        id: 2,
        productName: "Porto Portrait",
        imageUrl:"https://i.postimg.cc/X7wwKVYz/Cities-in-Portugal-Porto.webp",
        price: "2890",
        description:"No list of the best cities in Portugal would be complete without including the largest city in Portugal, Lisbon. If you don't mind the crowds, then you should know that there's a reason why Lisbon is quickly making its way to becoming one of the most popular tourist destinations in all of Europe. It's a beautiful city with phenomenal weather. ",
    },

    {
        id: 3,
        productName: "Sintra Portrait",
        imageUrl:"https://i.postimg.cc/FRBx6GMC/Cities-in-Portugal-Sintra.webp",
        price: "1750",
        description:"Sintra is the former favored summer residence of the Portuguese royal family and much of their nobility. For this reason, there are many gorgeous estates and castles to explore around this city",
    },
    {
        id: 4,
        productName: "Alcobaça And Batalha Portrait",
        imageUrl:"https://i.postimg.cc/nLwR8H71/Cities-in-Portugal-alcobacajpg.webp",
        price: "1400",
        description:"Sintra is the former favored summer residence of the Portuguese royal family and much of their nobility. For this reason, there are many gorgeous estates and castles to explore around this city",
    },

    {
        id: 5,
        productName: "Leiria Portrait",
        imageUrl:"https://i.postimg.cc/Kzwtp2NV/Cities-in-Portugal-Leiria.webp",
        price: "3200",
        description:"Those who like to explore castles should make time to visit Leira. It sits between Porto and Lisbon. So if you're planning a road trip across the country, this is a great spot to stop, stretch your legs, and get something to eat.",
    },
    {
        id: 6,
        productName: "Cascais Portrait",
        imageUrl:"https://i.postimg.cc/c4tCs3cV/Cities-in-Portugal-cascais.webp",
        price: "3290",
        description:"If you're looking for more relaxed cities in Portugal, Cascais might just be the place for you. This quiet town has some of the most beautiful beaches in the country, making it the perfect place to sit back in the sun with a drink and a good book. Not to mention there's delicious seafood you can get around town as well.",
    },
    {
        id: 7,
        productName: "Costa Nova Portrait",
        imageUrl:"https://i.postimg.cc/vZCb08xf/Cities-in-Portugal-Costa-Nova.webp",
        price: "4200",
        description:"Costa Nova is a popular summer vacation destination for both Portuguese residents and international tourists. It's an adorable town with colorful striped houses lining vast promenades to explore and just enjoy the town's atmosphere. ",
    },
    {
        id: 8,
        productName: "Tomar Portrait",
        imageUrl:"https://i.postimg.cc/jS2yzcyC/Cities-in-Portugal-tomar.webp",
        price: "4000",
        description:"Tomar is the former seat of the Order of the Knights Templar. It sits in central Portugal and is a popular tourist destination for a good reason.",
    },
    {
        id: 9,
        productName: "Èvora Portrait",
        imageUrl:"https://i.postimg.cc/fbKZDcgj/Cities-in-Portugal-evora.webp",
        price: "1200",
        description:"Èvora is a less popular Portuguese town for tourists to visit, which means it'll be so much easier for you to explore and enjoy. It's a good choice for a quieter day trip, but there's also enough to do here to justify spending the night in this small city. There's the Chapel of Bones, Roman Temple ruins, the town square, and the gorgeous Cathedral to enjoy here.",
    },
    {
        id: 10,
        productName: "Braga Portrait",
        imageUrl:"https://i.postimg.cc/k4W7LrPG/Cities-in-Portugal-braga.webp",
        price: "2600",
        description:"Braga is one of the oldest cities in Portugal, making it a noteworthy historical destination. It’s also one of the most important religious destinations in the country. There are over thirty churches in this city alone. It is no wonder it is considered the religious center of Portugal.",

    },
    ];

localStorage.setItem("MyTable", JSON.stringify(products));

function display() {
    document.querySelector(".MyTable").innerHTML = ``
Object.keys(products).forEach((item) => {
    document.querySelector(".MyTable").innerHTML += `<tr>
        <th scope="row">${products[item].id}</th>
        <td>${products[item].productName}</td>
        <td>${products[item].description}</td>
        <td>R${products[item].price}</td>
        <td><button  type="button" class="btn btn-dark" onclick="remove()">Del</button></td>
        </tr>`;});
}
display();

// Add Button
let prophotos = document.querySelector('.prophotos')
console.log(prophotos.outerHTML)
prophotos.addEventListener('click', (e)=>{
    e.preventDefault();
    let id = document.querySelector('#ID').value;
    let productName = document.querySelector('#Name').value;
    let price = document.querySelector('#Price').value;
    let description = document.querySelector('#Description').value;

    products.push(
        {
            id,
            productName,
            price,
            description
        })
        localStorage.setItem('MyTable', JSON.stringify(products));
        console.table(JSON.parse(localStorage.MyTable))
        display();
    });


    // Check-out //
    let checkout = [];
localStorage.setItem('myCheckout', JSON.stringify(checkout))
//parse into localStorage
products = JSON.parse(localStorage.getItem('image'));
Object.keys(MyTable).forEach((item) => {

    console.log(allCars[key].type);
    myCar.innerHTML +=
                `
                    <div class="col-md-4">
                        <div class="card" style="width: 18rem;">
                            <img src=${item.id} class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class=" ">${item.name}</p>
                                    <p class=" ">${item.price}</p>
                                    <p class=" ">${item.description}</p>
                                    <button class="addToCart"  id='${item.purchase}'href="#">Purchase</button>
                                </div>
                        </div>
                    </div>
                `
})
let addBtn = document.querySelectorAll('.addToCart');
Object.keys(addBtn).forEach((item) => {
        addBtn[item].addEventListener('click', (e) => {
            console.log('clicked', addBtn[item])
            console.log(MyTable[item])
            checkout.push(MyTable[item]);
            console.log(checkout)
            localStorage.setItem('myCheckout', JSON.stringify(checkout));
        })
    }
)

let Check-out = [];
localStorage.setItem('myCheckout', JSON.stringify(checkout))
//parse into localStorage
let images = JSON.parse(localStorage.getItem('cars'));
Object.keys(allCars).forEach((carKey)) => {
//show names of cars in console
    let w = [];
    let  = document.querySelector("#myCars");
    console.log([car].type);
    myCar.innerHTML +=

`
                    <div class="col-md-4">
                        <div class="card" style="width: 18rem;">
                            <img src=${w.image} class="card-img-top" alt="...">
                                <div class="images">
                                    <p class="image">${w.name}</p>
                                    <p class="">${w.price}</p>
                                    <button class="addToCart" href="#">Purchase</button>
                                </div>
                        </div>
                    </div>
`
};
//go to array
// filte array by id
// retieved obj to cart
// store