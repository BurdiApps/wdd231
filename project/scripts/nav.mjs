// ===== nav.mjs – Shared hamburger navigation module =====

export function initNav() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('main-nav');

    if (!hamburger || !nav) return;

    hamburger.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen);
        hamburger.textContent = isOpen ? '✕' : '☰';
    });
}
