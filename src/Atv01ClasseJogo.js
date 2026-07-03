/*
 * [ATV 01 - Jogo]
 *
 * Crie e exporte por padrão uma classe chamada "Jogo" que ao ser 
 * usada para criar um objeto, criará com as propriedades abaixo:
 * 
 * nomeDoJogo: texto,
 * tipo: texto,
 * qtdJogadores: numero inteiro,
 * dificuldade: numero de 1 a 5,
 * fases: numero inteiro,
 * fasesConcluidas: numero inteiro iniciado em zero,
 * zerado: booleano iniciado em false
 *
 * Lembre-se de exportar a classe "Jogo" no final do arquivo usando
 * "export default Jogo"
 */

class Jogo {
    constructor(nome, tipo, qtdJogadores, dificuldade, qtdFases) {
        this.nomeDoJogo = nome
        this.tipo = tipo
        this.qtdJogadores = qtdJogadores
        this.dificuldade = dificuldade
        this.fases = qtdFases

        this.fasesConcluidas = 0
        this.zerado = false
    }
}

const sonicCD = new Jogo("Sonic CD", "Plataforma", 100000, 2, 35)
console.table(sonicCD)

export default Jogo
