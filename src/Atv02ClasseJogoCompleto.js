/*
 * [ATV 02 - Jogo Completo]
 *
 * Copie a classe da atividade anterior e a modifique com o método abaixo:
 * jogar: método que recebe um argumento "minutos" (número inteiro). 
 * Cada 10 minutos jogados aumenta o valor das fasesConcluidas 
 * em 1 / dificuldade. Quando fasesConcluidas for igual a 
 * fases, zerado muda de false para true.
 *
 * Lembre-se de exportar a classe "Jogo" no final do arquivo usando
 * "export default Jogo"
 */

class Jogo{
    constructor(
        nomeDoJogo,
        tipo,
        qtdJogadores,
        dificuldade,
        fases,
        fasesConcluidas,
    ){
         if(
            typeof(nomeDoJogo) !== "string"
            ||typeof(tipo) !== "string"
            ||typeof(qtdJogadores) !== "number"
            ||typeof(dificuldade) !== "number"
            ||typeof(fases) !== "number"
            ||typeof(fasesConcluidas) !== "number"
         )
         console.log(
            "nomeDoJogo: texto, tipo: texto, qtdJogadores: numero, dificuldade: numero, fases: numero, fasesConcluidas: numero"
         )
           return
         
    this.nomeDoJogo = nomeDoJogo
    this.tipo = tipo
    this.qtdJogadores = qtdJogadores
    this.dificuldade = dificuldade
    this.fases = fases
    this.fasesConcluidas = 0
    this.zerado = false

     jogar (minutos);{
        this.minutos  = minutos
        this.fasesConcluidas = minutos / 10 / dificuldade
        this.fasesConcluidas = Math.floor(this.fasesConcluidas)
        if(this.fasesConcluidas == fases){
            this.zerado = true
        }
     }
 
    }

 }