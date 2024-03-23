let info_cursos = document.getElementsByClassName('info_curso');
let id_curso = parseInt(document.getElementById("id_curso").innerHTML);

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
const medi = new Curso("Medicina", "Breno Bernardo", "Saúde", "Superior", "6", "15000");
const eng = new Curso("Engenharia", "Tercilho", "Exatas", "Superior", "5", "1000 e pouco");
const cursos = [ads, bbc, psico, publi, medi, eng];


function selecionar() {
    info_cursos[0].innerHTML = "Nome: " + cursos[id_curso].nome;
    info_cursos[1].innerHTML = "Cordenador: " + cursos[id_curso].cordenador;
    info_cursos[2].innerHTML = "Área: " + cursos[id_curso].area;
    info_cursos[3].innerHTML = "Nível: " + cursos[id_curso].nivel;
    info_cursos[4].innerHTML = "Tempo de Conclusão: " + cursos[id_curso].tempo;
    info_cursos[5].innerHTML = "Mensalidade: " + cursos[id_curso].mensalidade;
}
selecionar();