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

class PerfilJogador {
    constructor(nome, email, jogos, amigos) {
        this.jogador = nome
        this.email = email
        this.jogos = jogos
        this.amigos = amigos
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

export default PerfilJogador
