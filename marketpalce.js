// Sample Data
const products = [
    { id: 1, title: "Bicycle", price: "$100", img: "images/jollof rice.jpeg" },
    { id: 2, title: "Smartphone", price: "$300", img: "https://via.placeholder.com/200" },
    { id: 3, title: "Laptop", price: "$500", img: "https://via.placeholder.com/200" },
    { id: 4, title: "Headphones", price: "$50", img: "https://via.placeholder.com/200" },
    { id: 5, title: "Camera", price: "$150", img: "https://via.placeholder.com/200" },
    { id: 6, title: "Watch", price: "$200", img: "https://via.placeholder.com/200" },
];
  
// Function to render products
function renderProducts(items) {
const productGrid = document.getElementById("productGrid");
productGrid.innerHTML = ""; // Clear grid
items.forEach((item) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");
    productItem.innerHTML = `
    <img src="${item.img}" alt="${item.title}">
    <h4>${item.title}</h4>
    <p>${item.price}</p>
    `;
    productItem.addEventListener("click", () => {
        window.location.href = `details.html?id= ${item.id}`;
    });
    productGrid.appendChild(productItem);
});
}

// Initial render of all products
renderProducts(products);

// Search function
function searchItems() {
const query = document.getElementById("search").value.toLowerCase();
const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(query)
);
renderProducts(filteredProducts);
}
  