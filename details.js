// Sample Data (should match with main page for simplicity)
const products = [
    { id: 1, title: "Bicycle", price: "$100", img: "images/jollof rice.jpeg", description: "A well-maintained bicycle for daily commute." },
    { id: 2, title: "Smartphone", price: "$300", img: "https://via.placeholder.com/200", description: "Latest smartphone with all the modern features." },
    { id: 3, title: "Laptop", price: "$500", img: "https://via.placeholder.com/200", description: "High-performance laptop for work and gaming." },
    { id: 4, title: "Headphones", price: "$50", img: "https://via.placeholder.com/200", description: "Noise-cancelling headphones for immersive sound." },
    { id: 5, title: "Camera", price: "$150", img: "https://via.placeholder.com/200", description: "Digital camera with high-quality image capture." },
];

// Function to get query parameter from URL
function getQueryParam(param) {
const urlParams = new URLSearchParams(window.location.search);
return urlParams.get(param);
}

// Render product details
function renderProductDetails() {
const productId = getQueryParam("id");
const product = products.find(item => item.id == productId);

if (product) {
    const detailsContainer = document.getElementById("detailsContainer");
    detailsContainer.innerHTML = `
    <img src="${product.img}" alt="${product.title}">
    <h2>${product.title}</h2>
    <p><strong>Price:</strong> ${product.price}</p>
    <p>${product.description}</p>
    `;
} else {
    detailsContainer.innerHTML = "<p>Product not found.</p>";
}
}

// Display product details when the page loads
window.onload = renderProductDetails;
  