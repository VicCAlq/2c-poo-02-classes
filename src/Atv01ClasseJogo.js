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
    constructor(nomeDoJogo, tipo, qtdJogadores, dificuldade, fases) {
        this.zerado = false;
        this.qtdJogadores = qtdJogadores;
        this.fases = fases;
        this.fasesConcluidas = 0;
         this.dificuldade = dificuldade;
       this.tipo = tipo;
        this.nomeDoJogo = nomeDoJogo;
    }
}

export default Jogo;
