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

const ads = new Curso("Análise e Desenvolvimento de Sistemas", "Caio Coneglian", "Exatas", "Superior", "3 anos", "R$ 600");
const bbc = new Curso("Ciência da Computação", "Caio Coneglian", "Exatas", "Superior", "4 anos", "R$ 800");
const psico = new Curso("Psicologia", "Fulana de Tal", "Saúde", "Superior", "5 anos", "R$ 1100");
const publi = new Curso("Publicidade", "Ciclana", "Humanas", "Superior", "5 anos", "R$ 1000");
const medi = new Curso("Medicina", "Breno Bernardo", "Saúde", "Superior", "6 anos", "R$ 15000");
const eng = new Curso("Engenharia", "Tercilho", "Exatas", "Superior", "5 anos", "R$ 1000");

const cursos = [ads, bbc, psico, publi, medi, eng];