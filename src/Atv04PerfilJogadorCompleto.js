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

class PerfilJogador {
    constructor(nome, email, jogos, amigos) {
        this.jogador = nome
        this.email = email
        this.jogos = jogos
        this.amigos = amigos
    }

    jogar(nomeJogo, minutos) {
        const jogoAJogar = this.jogos.find(function(jogo) {return jogo.nomeDoJogo == nomeJogo})
        jogoAJogar.jogar(minutos)
    }

    tempoJogado() {
        let tempoTotal = 0
        for (let jogo of this.jogos)
            tempoTotal += jogo.fasesConcluidas * 10 * jogo.dificuldade

        return tempoTotal
    }

    zerados() {
        let qtdZerados = 0
        for (let jogo of this.jogos)
            qtdZerados += parseInt(+jogo.zerado)

        return qtdZerados
    }
}

import Jogo from './Atv02ClasseJogoCompleto.js'

const gamexpert = new PerfilJogador("gamexpert112", "game.expert@fake.com", [
    new Jogo("Roblox", "Tudo", 1000000, 1, 200), new Jogo("Terraria", "Ação/Aventura/Sandbox", 70000, 4, 20), 
    new Jogo("Brawl Stars", "Battle Royale", 60000, 2, 100)
], [])
const gameesperto = new PerfilJogador("Gameesperto", "game.esperto@fake.com", [
    new Jogo("Rockman World V", "Plataforma/Atirador", 1000, 2, 12), new Jogo("Super Mario World", "Plataforma", 10000, 2, 97),
    new Jogo("Sonic Wings", "Shoot 'em up", 5000, 4, 7)
], [gamexpert])

console.table(gameesperto)

gameesperto.jogar("Rockman World V", 240)
console.log(
    `Tempo total jogando: ${gameesperto.tempoJogado()}\n`,
    `Quantidade de jogos zerados: ${gameesperto.zerados()}`
)

export default PerfilJogador
