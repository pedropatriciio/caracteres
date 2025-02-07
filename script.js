function removerFormatacao() {
    const documentoInput = document.getElementById("documento");
    const documento = documentoInput.value;

    const documentoSemFormatacao = documento.replace(/[^\d]+/g, '');

    document.getElementById("resultado").textContent = "Resultado: " + documentoSemFormatacao;
}