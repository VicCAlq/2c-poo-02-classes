/*
 * [ATV 03 - Perfil Jogador]
 *
 * Crie e exporte por padrão uma classe chamada "PerfilJogador" que 
 * ao ser usada para criar um objeto, criará com as propriedades abaixo:
 * 
 * jogador: texto,
 * email: texto,
 * jogos: lista de jogos feitos com a classe "Jogo" do exercício anterior,
 * amigos: outros objetos criados pela classe "PerfilJogador",
 *
 * Lembre-se de exportar a classe "PerfilJogador" no final do arquivo usando
 * "export default PerfilJogador"
 */

import Jogo from "./Atv01ClasseJogo";

class PerfilJogador {
    constructor(jogador, email, jogos=[], amigos=[]){
        this.jogador = jogador;
        this.email = email;
        this.jogos = jogos;
        this.amigos = amigos;
    }

    adicionarAmigo(novoAmigo){
        this.amigos.push(novoAmigo);
    }
}

const seaBin = new Jogo ("SeaBin", "Aventura", 1, 8, 1);
const kingMedieval = new Jogo ("kingMedieval", "Aventura", 3, 6, 5);

const Juliano = new PerfilJogador("Juliano", "JulianoPablinho@gmail.com", [seaBin, kingMedieval])

const outroAmigo = new PerfilJogador ("Pablo", "pabloDamasco@gmail.com", [kingMedieval])
Juliano.adicionarAmigo(outroAmigo)

console.log(Juliano)

export default PerfilJogador;