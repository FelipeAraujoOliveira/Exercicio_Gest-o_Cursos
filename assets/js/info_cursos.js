let info_cursos = document.getElementsByClassName('info_curso');
let id_curso = parseInt(document.getElementById("id_curso").innerHTML);

function selecionar() {
    info_cursos[0].innerHTML = "Nome: " + cursos[id_curso].nome;
    info_cursos[1].innerHTML = "Cordenador: " + cursos[id_curso].cordenador;
    info_cursos[2].innerHTML = "Área: " + cursos[id_curso].area;
    info_cursos[3].innerHTML = "Nível: " + cursos[id_curso].nivel;
    info_cursos[4].innerHTML = "Tempo de Conclusão: " + cursos[id_curso].tempo;
    info_cursos[5].innerHTML = "Mensalidade: " + cursos[id_curso].mensalidade;
}

selecionar();