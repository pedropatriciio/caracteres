function removerFormatacao() {
    const documentoInput = document.getElementById("documento");
    const documento = documentoInput.value;

    const documentoSemFormatacao = documento.replace(/[^\d]+/g, '');

    document.getElementById("resultado").textContent = "" + documentoSemFormatacao;
}

function copiar() {
    const textoFormatado = document.getElementById("resultado");
    const texto = textoFormatado.innerText;

    const textarea = document.createElement("textarea");
    textarea.value = texto;
    document.body.appendChild(textarea);

    textarea.select();
    textarea.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textarea.value);

    document.body.removeChild(textarea);

    alert("Texto copiado para a área de transferência!");
}
