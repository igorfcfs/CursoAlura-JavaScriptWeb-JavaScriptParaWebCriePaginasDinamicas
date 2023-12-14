function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

// document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla').onclick;

listaDeTeclas[1].onclick = tocaSomPom;
// listaDeTeclas[2].onclick = tocaSomPom;
// listaDeTeclas[3].onclick = tocaSomPom;
// listaDeTeclas[4].onclick = tocaSomPom;
// listaDeTeclas[5].onclick = tocaSomPom;
// listaDeTeclas[6].onclick = tocaSomPom;
// listaDeTeclas[7].onclick = tocaSomPom;
// listaDeTeclas[8].onclick = tocaSomPom;
// listaDeTeclas[9].onclick = tocaSomPom;