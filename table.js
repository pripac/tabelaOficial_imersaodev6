var pri = {nome:"Pri", vitorias:0, empates:1, derrotas:1, pontos:0}
var hugo = {nome:"Hugo", vitorias:0, empates:1, derrotas:1, pontos:0}

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias *3) + jogador.empates;
    return pontos;
}

pri.pontos = calculaPontos(pri);
hugo.pontos = calculaPontos(hugo);

var jogadores = [pri, hugo];

function exibeJogadoresNaTela(jogadores){
var elemento = "";
for (var i = 0; i < jogadores.length; i++ ) {
elemento += "<tr><td>"+ jogadores[i].nome + "</td>";
elemento +="<td>"+ jogadores[i].vitorias + "</td>";
elemento +="<td>"+ jogadores[i].empates + "</td>";
elemento +="<td>"+ jogadores[i].derrotas + "</td>";
elemento +="<td>"+ jogadores[i].pontos +"</td>";
elemento +="<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>;
elemento +="<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>;
elemento +="<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>;
elemento += "</tr>";
}
var tabelaJogadores = document.getElementById("tabelaJogadores");
tabelaJogadores.innerHTML = elemento; }

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
var jogador = jogadores[i];
jogador.vitorias++;
jogador.pontos = calculaPontos(jogador);
exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
    }

function adicionarDerrotas(i) {
        var jogador = jogadores[i];
        jogador.derrotas++;
        jogador.pontos = calculaPontos(jogador);
        exibeJogadoresNaTela(jogadores);
        }