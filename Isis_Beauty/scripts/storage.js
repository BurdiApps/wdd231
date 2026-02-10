// scripts/storage.js
// LocalStorage CRUD helpers

function saveList(section, list) {
    localStorage.setItem('bfhub_' + section, JSON.stringify(list));
}
function loadList(section) {
    return JSON.parse(localStorage.getItem('bfhub_' + section) || '[]');
}
function addListItem(section, elem) {
    const list = loadList(section);
    list.push(elem);
    saveList(section, list);
    renderList(section);
}
function removeListItem(section, idx) {
    const list = loadList(section);
    list.splice(idx, 1);
    saveList(section, list);
    renderList(section);
}
function markBought(section, idx) {
    const list = loadList(section);
    list[idx].bought = !list[idx].bought;
    saveList(section, list);
    renderList(section);
}
