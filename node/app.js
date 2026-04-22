const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

// 🍎 Database Simulation (The Grocery Catalog)
const products = [
    { id: 1, name: 'Organic Bananas', category: 'Fruits', price: 0.99, stock: 50, img: '🍌' },
    { id: 2, name: 'Whole Milk', category: 'Dairy', price: 3.49, stock: 20, img: '🥛' },
    { id: 3, name: 'Sourdough Bread', category: 'Bakery', price: 4.50, stock: 15, img: '🍞' },
    { id: 4, name: 'Fresh Spinach', category: 'Produce', price: 2.99, stock: 30, img: '🍃' },
    { id: 5, name: 'Greek Yogurt', category: 'Dairy', price: 1.50, stock: 40, img: '🍦' },
    { id: 6, name: 'Avocado', category: 'Produce', price: 1.25, stock: 100, img: '🥑' },
    { id: 7, name: 'Ribeye Steak', category: 'Meat', price: 15.99, stock: 10, img: '🥩' },
    { id: 8, name: 'Coffee Beans', category: 'Pantry', price: 12.00, stock: 25, img: '☕' }
];

let cart = [];

// API: Get all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// API: Add to cart
app.post('/api/cart', (req, res) => {
    const { productId } = req.body;
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        return res.status(200).json({ message: 'Added to cart', cart });
    }
    res.status(404).send('Product not found');
});

// API: Checkout
app.post('/api/checkout', (req, res) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cart = []; // Clear cart
    res.json({ message: 'Order successful!', total: total.toFixed(2) });
});

app.listen(PORT, () => {
    console.log(`Grocery Store running at http://localhost:${PORT}`);
});
