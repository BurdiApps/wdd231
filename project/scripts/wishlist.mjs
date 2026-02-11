// ===== wishlist.mjs – Display wishlist from localStorage, filter, mark bought =====
import { initNav } from './nav.mjs';

const wishlistItems = document.getElementById('wishlist-items');
const wishlistEmpty = document.getElementById('wishlist-empty');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentFilter = 'all';

// ===== Wishlist localStorage =====
function getWishlist() {
    return JSON.parse(localStorage.getItem('gb-wishlist') || '[]');
}

function saveWishlist(list) {
    localStorage.setItem('gb-wishlist', JSON.stringify(list));
}

// ===== Render wishlist items =====
function renderWishlist() {
    const wishlist = getWishlist();

    // Apply filter
    const filtered = currentFilter === 'all'
        ? wishlist
        : currentFilter === 'bought'
            ? wishlist.filter(item => item.bought)
            : wishlist.filter(item => !item.bought);

    if (filtered.length === 0) {
        wishlistItems.innerHTML = '';
        wishlistEmpty.hidden = false;
        return;
    }

    wishlistEmpty.hidden = true;

    wishlistItems.innerHTML = filtered.map(item => `
        <li class="wishlist-item${item.bought ? ' wishlist-bought' : ''}">
            <img src="${item.photo}" alt="${item.name}" width="60" height="60" loading="lazy">
            <div class="wishlist-info">
                <strong>${item.name}</strong>
                <span class="mini">${item.category} ${item.price === 'varies' ? '• Price Varies' : item.price > 0 ? `• $${Number(item.price).toFixed(2)}` : ''}</span>
            </div>
            <div class="wishlist-actions">
                ${item.bought
            ? '<span class="wishlisted-label">Bought ✓</span>'
            : `<button class="btn-bought" data-id="${item.id}">Mark Bought</button>`
        }
                <button class="btn-remove" data-id="${item.id}" aria-label="Remove from wishlist">✕</button>
            </div>
        </li>
    `).join('');

    // Mark bought listeners
    wishlistItems.querySelectorAll('.btn-bought').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id);
            const list = getWishlist();
            const item = list.find(i => i.id === id);
            if (item) item.bought = true;
            saveWishlist(list);
            renderWishlist();
        });
    });

    // Remove listeners
    wishlistItems.querySelectorAll('.btn-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id);
            const list = getWishlist().filter(i => i.id !== id);
            saveWishlist(list);
            renderWishlist();
        });
    });
}

// ===== Filter buttons =====
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderWishlist();
    });
});

// ===== Add Wishlist Item toggle =====
const addWishToggle = document.getElementById('add-wish-toggle');
const addWishPanel = document.getElementById('add-wish-panel');
const addWishCancel = document.getElementById('add-wish-cancel');
const addWishForm = document.getElementById('add-wish-form');

addWishToggle.addEventListener('click', () => {
    addWishPanel.hidden = !addWishPanel.hidden;
    addWishToggle.textContent = addWishPanel.hidden ? '＋ Add an Item' : '✕ Close';
});

addWishCancel.addEventListener('click', () => {
    addWishPanel.hidden = true;
    addWishToggle.textContent = '＋ Add an Item';
    addWishForm.reset();
});

addWishForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('wish-name').value.trim();
    const category = document.getElementById('wish-category').value;
    const rawPrice = document.getElementById('wish-price').value.trim().toLowerCase();
    const price = rawPrice === 'varies' || rawPrice === 'vary' ? 'varies' : (parseFloat(rawPrice) || 0);
    const photo = document.getElementById('wish-photo').value.trim() || 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=400';

    if (!name) return;

    const wishlist = getWishlist();
    wishlist.push({
        id: Date.now(),
        name,
        category,
        photo,
        price,
        bought: false
    });
    saveWishlist(wishlist);
    addWishForm.reset();
    addWishPanel.hidden = true;
    addWishToggle.textContent = '＋ Add an Item';
    renderWishlist();
});

// ===== Initialise =====
initNav();
renderWishlist();
