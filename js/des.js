async function loadFile(file) {
    let text = await file.text();
    document.getElementById('archivo').textContent = texto;
}
