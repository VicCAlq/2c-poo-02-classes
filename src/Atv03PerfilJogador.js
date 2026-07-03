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
class Jogo {
    constructor(
        nomeDoJogo, tipo, qtdJogadores, dificuldade, fases){
        this.nomeDoJogo = nomeDoJogo
        this.tipo = tipo
        this.qtdJogadores = qtdJogadores
        this.dificuldade = dificuldade
        this.fases = fases
        this.fasesConcluidas = 0
        this.zerado = false
    }

    jogar(minutos) {
        this.fasesConcluidas += Math.floor(minutos / 10) * (1 / this.dificuldade)
        if (this.fasesConcluidas >= this.fases) {
            this.fasesConcluidas = this.fases
            this.zerado = true
        }
    }   
}

const newGame =  new Jogo(
    "Hollonaiti", "Metroidvania", 1, 3, 1
)

newGame.jogar(100)

console.table(newGame)

class PerfilJogador {
    constructor(
        jogador, email, jogos, amigos){
        this.jogador = jogador
        this.email = email
        this.jogos = jogos
        this.amigos = amigos
}
}
const newPerfil =  new PerfilJogador(
    "ManoCoxas", "manocoxas7416@gmail.com", "bfvjbvh", "fbuhefb"
)

export default PerfilJogador

console.table(newPerfil)
