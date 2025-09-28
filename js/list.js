const searchInput = document.getElementById('search-input');
const productsList = document.getElementById('products');
const searchBody = document.querySelector('.box-cont');


const products = [
    {name:"Жазушылар", url:"writer.html" },
    {name:"Батырлар", url:"batyr.html" },
    { name: "Билеушілер", url: "han.html" },
    { name: "Өнерпаздар", url: "art.html" },
    { name: "Ғалымдар", url: "galym.html" },
    {name:"Абай", url:"abai.html" },
    { name: "Xiaomi Redmi Note 14 Pro", url: "https://example.com/xiaomi" },
    { name: "Samsung Galaxy S24", url: "https://example.com/samsung" },
    { name: "Huawei Pura 70", url: "https://example.com/huawei" }
];

searchInput.addEventListener('input', () => {
    const input = searchInput.value.toLowerCase();
    productsList.innerHTML = '';

    const filteredProducts = products.filter(item => item.name.toLowerCase().includes(input)); 

    filteredProducts.forEach(product => {
        const li = document.createElement('li');
        const link = document.createElement('a');

        link.textContent = product.name;
        link.href = product.url;
        link.target = "_blank";

       li.appendChild(link);
       productsList.appendChild(li);

    });

    if (input !== "" && filteredProducts.length > 0) {
        searchBody.classList.add('active-search');
    } else {
        searchBody.classList.remove('active-search');
    }

});


document.addEventListener('click', (event) => {
   if (!searchInput.contains(event.target) && !productsList.contains(event.target)) {
    searchBody.classList.remove('active-search');
   }
});
