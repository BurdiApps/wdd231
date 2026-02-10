// scripts/inspo.js
// Demo inspiration data and gallery rendering

const demoInspo = {
    makeup: [
        { name: 'Peach Glow', photo: 'https://images.pexels.com/photos/462084/pexels-photo-462084.jpeg', notes: 'Soft peach-coral w/ gentle shimmer.' },
        { name: 'Emerald Eye', photo: 'https://images.pexels.com/photos/792737/pexels-photo-792737.jpeg', notes: 'Smokey green for a bold look.' }
    ],
    clothes: [
        { name: 'Breezy Cotton Dress', photo: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg', notes: '100% cotton, summer ready.' },
        { name: 'Classic Tees', photo: '', notes: 'Perfect cotton basics for every closet.' }
    ],
    bags: [
        { name: 'Coach Tabby', photo: 'https://assets.coach.com/content/dam/cw/products/CA/101/3479/ca1013479_d8dqb_a1.jpg', notes: 'Modern icon for every outfit.' },
        { name: 'Coach Mini Belt Bag', photo: 'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1699541277/739738_1AABP_1000_001_100_0000_Light-Gucci-Mini-belt-bag.jpg', notes: 'Tiny, chic, grab and go.' }
    ],
    hairstyles: [
        { name: 'Soft Waves', photo: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg', notes: 'Effortless beachy vibe.' },
        { name: 'Elegant Bun', photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg', notes: 'Chic for day or night.' }
    ],
    botox: [
        { name: 'Forehead Smoothing', photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg', notes: 'Botox for forehead lines.' },
        { name: 'Lip Flip', photo: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg', notes: 'Subtle enhancement for upper lip.' }
    ]
};

function renderDemoInspo() {
    for (let key of Object.keys(demoInspo)) {
        let galleryId =
            key === 'clothes' ? 'cotton-inspo'
                : key === 'hairstyles' ? 'hair-inspo'
                    : key === 'botox' ? 'botox-inspo'
                        : key + '-inspo';
        const gal = document.getElementById(galleryId);
        if (gal) gal.innerHTML = demoInspo[key].map(item => {
            // Escape single quotes in name for JS string
            const safeName = item.name.replace(/'/g, "\\'");
            const safePhoto = encodeURIComponent(item.photo);
            const safeNotes = encodeURIComponent(item.notes);
            return (
                `<div class="inspo-card">
                    <img class="demo-inspo" src="${item.photo}" alt="insp" width="99%">
                    <div><b>${item.name}</b></div>
                    <div class="mini">${item.notes}</div>
                    <button onclick="addWishlistFromInspo('${key}','${safeName}','${safePhoto}','${safeNotes}')">Add to Wishlist</button>
                </div>`
            );
        }).join('');
    }
}

document.addEventListener('DOMContentLoaded', renderDemoInspo);
