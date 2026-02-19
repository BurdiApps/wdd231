// ===== main.mjs – Home page: fetch products, filter, modal, wishlist =====
import { initNav } from './nav.mjs';

// DOM references
const productsGrid = document.getElementById('products-grid');
const filterBtnsContainer = document.querySelector('.filter-buttons');
let filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('product-modal');
const modalClose = document.getElementById('modal-close');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalCategory = document.getElementById('modal-category');
const modalNotes = document.getElementById('modal-notes');
const modalPrice = document.getElementById('modal-price');
const modalWishlistBtn = document.getElementById('modal-wishlist-btn');
const modalDeleteBtn = document.getElementById('modal-delete-btn');
const addProductForm = document.getElementById('add-product-form');

let allProducts = [];
let currentProduct = null;
let currentFilter = 'all';

// ===== Custom products (localStorage) =====
function getCustomProducts() {
    return JSON.parse(localStorage.getItem('gb-custom-products') || '[]');
}

function saveCustomProducts(list) {
    localStorage.setItem('gb-custom-products', JSON.stringify(list));
}

// ===== Fetch products from JSON + merge custom =====
async function loadProducts() {
    try {
        const response = await fetch('data/products.json');
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const data = await response.json();
        const custom = getCustomProducts();
        allProducts = [...data.products, ...custom];
        applyFilter();
    } catch (error) {
        productsGrid.innerHTML = `<p class="error-message">Sorry, products could not be loaded. ${error.message}</p>`;
    }
}

// ===== Render product cards =====
function renderProducts(products) {
    if (products.length === 0) {
        productsGrid.innerHTML = '<p class="empty-message">No products found in this category.</p>';
        return;
    }
    productsGrid.innerHTML = products.map(product => `
        <article class="gb-product-tile" data-id="${product.id}">
            <img src="${product.photo}" alt="${product.name}" width="300" height="300" loading="lazy">
            <h3>${product.name}</h3>
            <p class="product-category">${product.category}</p>
            <p class="product-price">${product.price === 'varies' ? 'Price Varies' : product.price > 0 ? `$${Number(product.price).toFixed(2)}` : 'Free / Inspiration'}</p>
            ${product.custom ? '<span class="gb-tag">Custom</span>' : ''}
        </article>
    `).join('');

    productsGrid.querySelectorAll('.gb-product-tile').forEach(card => {
        card.addEventListener('click', () => {
            const id = Number(card.dataset.id);
            openModal(id);
        });
    });
}

// ===== Apply current filter =====
function applyFilter() {
    const filtered = currentFilter === 'all'
        ? allProducts
        : allProducts.filter(p => p.category === currentFilter);
    renderProducts(filtered);
}

// ===== Filter logic =====
filterBtnsContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    filterBtnsContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    applyFilter();
});

// ===== Modal logic =====
function openModal(productId) {
    currentProduct = allProducts.find(p => p.id === productId);
    if (!currentProduct) return;

    modalImg.src = currentProduct.photo;
    modalImg.alt = currentProduct.name;
    modalName.textContent = currentProduct.name;
    modalCategory.textContent = currentProduct.category.charAt(0).toUpperCase() + currentProduct.category.slice(1);
    modalNotes.textContent = currentProduct.notes;
    modalPrice.textContent = currentProduct.price === 'varies'
        ? 'Price Varies'
        : currentProduct.price > 0
            ? `$${Number(currentProduct.price).toFixed(2)}`
            : 'Free / Inspiration';

    // Update wishlist button text
    const wishlist = getWishlist();
    const alreadyAdded = wishlist.some(item => item.id === currentProduct.id);
    modalWishlistBtn.textContent = alreadyAdded ? '✓ On Wishlist' : 'Add to Wishlist';
    modalWishlistBtn.disabled = alreadyAdded;

    // Show delete button only for custom products
    modalDeleteBtn.hidden = !currentProduct.custom;

    modal.showModal();
}

modalClose.addEventListener('click', () => modal.close());
modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
});

// ===== Delete product from collection =====
modalDeleteBtn.addEventListener('click', () => {
    if (!currentProduct || !currentProduct.custom) return;
    const customList = getCustomProducts().filter(p => p.id !== currentProduct.id);
    saveCustomProducts(customList);
    allProducts = allProducts.filter(p => p.id !== currentProduct.id);
    applyFilter();
    modal.close();
});

// ===== Wishlist (localStorage) =====
function getWishlist() {
    return JSON.parse(localStorage.getItem('gb-wishlist') || '[]');
}

function saveWishlist(list) {
    localStorage.setItem('gb-wishlist', JSON.stringify(list));
}

modalWishlistBtn.addEventListener('click', () => {
    if (!currentProduct) return;
    const wishlist = getWishlist();
    if (wishlist.some(item => item.id === currentProduct.id)) return;

    wishlist.push({
        id: currentProduct.id,
        name: currentProduct.name,
        category: currentProduct.category,
        photo: currentProduct.photo,
        price: currentProduct.price,
        bought: false
    });
    saveWishlist(wishlist);
    modalWishlistBtn.textContent = '✓ On Wishlist';
    modalWishlistBtn.disabled = true;
});

// ===== Initialise =====
initNav();
loadProducts();

// ===== Add Product toggle =====
const addToggle = document.getElementById('add-product-toggle');
const addPanel = document.getElementById('add-product-panel');
const addCancel = document.getElementById('add-product-cancel');

addToggle.addEventListener('click', () => {
    addPanel.hidden = !addPanel.hidden;
    addToggle.textContent = addPanel.hidden ? '＋ Add to Collection' : '✕ Close';
});

addCancel.addEventListener('click', () => {
    addPanel.hidden = true;
    addToggle.textContent = '＋ Add to Collection';
    addProductForm.reset();
});

// ===== Add Product form =====
addProductForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('new-name').value.trim();
    const category = document.getElementById('new-category').value;
    const photo = document.getElementById('new-photo').value.trim() || 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=400';
    const rawPrice = document.getElementById('new-price').value.trim().toLowerCase();
    const price = rawPrice === 'varies' || rawPrice === 'vary' ? 'varies' : (parseFloat(rawPrice) || 0);
    const notes = document.getElementById('new-notes').value.trim();

    if (!name || !category) return;

    const newProduct = {
        id: Date.now(),
        name,
        category,
        photo,
        price,
        notes: notes || `Added on ${new Date().toLocaleDateString()}`,
        custom: true
    };

    const customList = getCustomProducts();
    customList.push(newProduct);
    saveCustomProducts(customList);

    allProducts.push(newProduct);
    applyFilter();
    addProductForm.reset();
    addPanel.hidden = true;
    addToggle.textContent = '＋ Add to Collection';
});

// ===== Inspiration Board (localStorage) =====
const inspoForm = document.getElementById('inspo-form');
const inspoBoard = document.getElementById('inspo-board');

function getInspo() {
    return JSON.parse(localStorage.getItem('gb-inspo') || '[]');
}

function saveInspo(list) {
    localStorage.setItem('gb-inspo', JSON.stringify(list));
}

function getPlatformIcon(url) {
    if (url.includes('instagram.com')) return '📸 Instagram';
    if (url.includes('tiktok.com')) return '🎵 TikTok';
    if (url.includes('pinterest.com') || url.includes('pin.it')) return '📌 Pinterest';
    if (url.includes('youtube.com') || url.includes('youtu.be')) return '▶️ YouTube';
    if (url.includes('twitter.com') || url.includes('x.com')) return '🐦 X/Twitter';
    return '🔗 Link';
}

function renderInspoBoard() {
    const pins = getInspo();

    if (pins.length === 0) {
        inspoBoard.innerHTML = '<p class="empty-message">No pins yet! Save your first inspo link above ✨</p>';
        return;
    }

    inspoBoard.innerHTML = pins.map((pin, index) => `
        <div class="inspo-pin">
            <span class="inspo-pin-platform">${getPlatformIcon(pin.url)}</span>
            <h4><a href="${pin.url}" target="_blank" rel="noopener">${pin.title}</a></h4>
            <span class="inspo-pin-tag">${pin.category}</span>
            <button class="btn-remove-pin" data-index="${index}" aria-label="Remove pin">✕</button>
        </div>
    `).join('');

    // Delete pin listeners
    inspoBoard.querySelectorAll('.btn-remove-pin').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = Number(btn.dataset.index);
            const list = getInspo();
            list.splice(idx, 1);
            saveInspo(list);
            renderInspoBoard();
        });
    });
}

inspoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = document.getElementById('inspo-url').value.trim();
    const title = document.getElementById('inspo-title').value.trim();
    const category = document.getElementById('inspo-category').value;

    if (!url || !title) return;

    const pins = getInspo();
    pins.unshift({ url, title, category, date: new Date().toISOString() });
    saveInspo(pins);
    inspoForm.reset();
    renderInspoBoard();
});

function initInspoBoard() {
    renderInspoBoard();
}

// ===== Start Inspo Board =====
initInspoBoard();
