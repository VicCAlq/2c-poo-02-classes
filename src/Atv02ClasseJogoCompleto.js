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

    jogar(minutos) {
        this.fasesConcluidas += parseInt(minutos / (this.dificuldade * 10))

        if (this.fasesConcluidas >= this.fases) {
            this.fasesConcluidas = this.fases
            this.zerado = true
        }
    }
}

const megaMan = new Jogo("Mega Man", "Plataforma/Atirador", 50000, 3, 10)
console.table(megaMan)
megaMan.jogar(40)
console.log(
    `Fases concluídas: ${megaMan.fasesConcluidas} \n`,
    `Zerado? ${megaMan.zerado}`
)

export default Jogo
