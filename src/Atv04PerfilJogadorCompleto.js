/*
 * [ATV 04 - Perfil Jogador Completo]
 * 
 * Copie a classe PerfilJgador e a modifique com os métodos abaixo:
 * 
 * tempoJogado: função que retorna um número inteiro: soma do tempo usado 
 *              nas fases concluídas de todos os jogos cadastrados na 
 *              propriedade "jogos",
 * zerados: função que retorna um número inteiro: Quantidade de jogos
 *          marcados como "zerado" dentre os jogos na lista de jogos
 *          deste jogador
 *
 * Lembre-se de exportar a classe "PerfilJogador" no final do arquivo usando
 * "export default PerfilJogador"
 */

import Jogo from "./Atv01ClasseJogo";

class PerfilJogador {
    constructor(jogador, email, jogos = [], amigos = []) {
        this.jogador = jogador;
        this.email = email;
        this.jogos = jogos;
        this.amigos = amigos;
    }

    adicionarAmigo(novoAmigo) {
        this.amigos.push(novoAmigo);
    }

    tempoJogado() {
        let tempoTotal = 0;

        for (const jogo of this.jogos) {
            tempoTotal += jogo.fasesConcluidas * jogo.dificuldade * 10;
        }

        return Math.floor(tempoTotal);
    }

    zerados() {
        let quantidadeZerados = 0;

        for (const jogo of this.jogos) {
            if (jogo.zerado === true) {
                quantidadeZerados++;
            }
        }

        return quantidadeZerados;
    }
}

// Instâncias de teste
const seaBin = new Jogo("SeaBin", "Aventura", 1, 8, 1);
const kingMedieval = new Jogo("kingMedieval", "Aventura", 3, 6, 5);

const Juliano = new PerfilJogador("Juliano", "JulianoPablinho@gmail.com", [seaBin, kingMedieval]);

const outroAmigo = new PerfilJogador("Pablo", "pabloDamasco@gmail.com", [kingMedieval]);
Juliano.adicionarAmigo(outroAmigo);

console.log(Juliano);

export default PerfilJogador;