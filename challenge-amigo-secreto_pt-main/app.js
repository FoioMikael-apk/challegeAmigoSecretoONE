let amigos = [];
let amigosRestantes = [];

// Adiciona amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        input.value = "";
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";

    // Atualiza lista de sorteio também
    amigosRestantes = [...amigos];
}

// Atualiza visualmente a lista de nomes
function atualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

// Sorteia um amigo secreto aleatoriamente
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    if (amigosRestantes.length === 0) {
        resultado.innerHTML = "<li>Todos os amigos já foram sorteados.</li>";
        return;
    }

    const index = Math.floor(Math.random() * amigosRestantes.length);
    const sorteado = amigosRestantes.splice(index, 1)[0];

    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}
