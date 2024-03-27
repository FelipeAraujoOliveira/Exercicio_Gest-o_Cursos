//Declaração de classes
let deletar = document.getElementsByClassName('deletar');
let editar = document.getElementsByClassName('editar');
let lista = document.getElementsByClassName('lista');
let nome_curso = document.getElementsByClassName('nome');
let cordenador_curso = document.getElementsByClassName('cordenador');
let mensalidade_curso = document.getElementsByClassName('mensalidade');
let tempo_curso = document.getElementsByClassName('tempo');
let nivel_curso = document.getElementsByClassName('nivel');
let area_curso = document.getElementsByClassName('area');

//Declarações ID
let teste = document.getElementById('teste');

function atualizarLista() {
    for (let i = 0; i < cursos.length; i++) {
        lista[i].innerHTML = `
            <td class="nome">${cursos[i].nome}</td>
            <td class="cordenador">${cursos[i].cordenador}</td>
            <td class="area">${cursos[i].area}</td>
            <td class="nivel">${cursos[i].nivel}</td>
            <td class="tempo">${cursos[i].tempo}</td>
            <td class="mensalidade">${cursos[i].mensalidade}</td>
            <td class="deletar"><button class="btn btn-danger" type="button" data-bs-toggle="modal" data-bs-target="#modalDelete">Deletar</button></td>
            <td class="editar"><button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#modalEditar">Editar</button></td>
        `;
    }
}

function preencherLista() {
    for (let i = 0; i < cursos.length; i++) {
        nome_curso[i].innerHTML = cursos[i].nome;
        cordenador_curso[i].innerHTML = cursos[i].cordenador;
        area_curso[i].innerHTML = cursos[i].area;
        nivel_curso[i].innerHTML = cursos[i].nivel;
        tempo_curso[i].innerHTML = cursos[i].tempo;
        mensalidade_curso[i].innerHTML = cursos[i].mensalidade;
    }
}

atualizarLista();
preencherLista();

function irParaEditar() {
    window.location.href = 'editar.html';
}