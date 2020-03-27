document.onclick = function() {
    const activo = document.activeElement.tagName;	// .tagName retorna el nombre de etiqueta
    document.getElementById("mensaje").innerHTML = activo;
}
