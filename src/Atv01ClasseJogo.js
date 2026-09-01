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
//vscode ta dando na conta de isaac por algum motivo rs S2 tmj ai
class Jogo {
    constructor(nomeDoJogo, tipo, qtdJogadores, dificuldade, fases) {
        this.nomeDoJogo = nomeDoJogo;
        this.tipo = tipo;
        this.qtdJogadores = qtdJogadores;
        this.dificuldade = dificuldade;
        this.fases = fases;
        this.fasesConcluidas = 0;
        this.zerado = false;
    }
}

export default Jogo;
