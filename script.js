async function loadComponent(id, file) {
    const response = await fetch(file);
    const content = await response.text();
    document.getElementById(id).innerHTML = content;
}

window.onload = () => {
    loadComponent("header", "header.html");
    loadComponent("footer", "footer.html");
};