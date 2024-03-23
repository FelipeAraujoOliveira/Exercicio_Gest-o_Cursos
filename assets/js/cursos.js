
let curso1 = document.getElementsByClassName('curso1');
let curso2 = document.getElementsByClassName('curso2');
let curso3 = document.getElementsByClassName('curso3');
let deletar = document.getElementsByClassName('deletar');
let editar = document.getElementsByClassName('editar');
let teste = document.getElementById('teste');

let lista = document.getElementsByClassName('lista');

let nome_curso = document.getElementsByClassName('nome');
let cordenador_curso = document.getElementsByClassName('cordenador');
let mensalidade_curso = document.getElementsByClassName('mensalidade');
let tempo_curso = document.getElementsByClassName('tempo');
let nivel_curso = document.getElementsByClassName('nivel');
let area_curso = document.getElementsByClassName('area');


class Curso {
    constructor(nome, cordenador, area, nivel, tempo, mensalidade) {
        this.nome = nome;
        this.cordenador = cordenador;
        this.area = area;
        this.nivel = nivel;
        this.tempo = tempo;
        this.mensalidade = mensalidade;
    }
}

const ads = new Curso("Análise e Desenvolvimento de Sistemas", "Caio Coneglian", "Exatas", "Superior", "3", "600");
const bbc = new Curso("Ciência da computação", "Caio Coneglian", "Exatas", "Superior", "4", "800");
const psico = new Curso("Psicologia", "Fulana de Tal", "Sáude", "Superior", "5", "1100");
const publi = new Curso("Publicidade", "Ciclana", "Humanas", "Superior", "5", "1000");
const medi = new Curso("Medicina", "Drausio Varela", "Saúde", "Superior", "6", "15000");
const eng = new Curso("Engenharia", "Tercilho", "Exatas", "Superior", "5", "1010");

const cursos = [ads, bbc, psico, publi, medi, eng];

function criarLista() {
    for (let i = 0; i < cursos.length; i++) {
        lista[i].innerHTML = `
        <td class="nome"></td>
        <td class="cordenador"></td>
        <td class="area"></td>
        <td class="nivel"></td>
        <td class="tempo"></td>
        <td class="mensalidade"></td>
        <td class="deletar"><button class="btn btn-danger" type="button" data-bs-toggle="modal" data-bs-target="#modalDelete">Deletar</button></td>
        <td class="editar"><button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#modalEditar">Editar</button></td>
    `
    }
}

criarLista();
function preencher() {
    for (let i = 0; i < (cursos.length); i++) {
        nome_curso[i].innerHTML = cursos[i].nome;
        cordenador_curso[i].innerHTML = cursos[i].cordenador;
        area_curso[i].innerHTML = cursos[i].area;
        nivel_curso[i].innerHTML = cursos[i].nivel;
        tempo_curso[i].innerHTML = cursos[i].tempo;
        mensalidade_curso[i].innerHTML = cursos[i].mensalidade;
    }
}



preencher()
function irParaEditar() {
    window.location.href = 'editar.html';
}