//atv1

class livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
    }

    mostrarDetalhes() {
        console.log(`O nome do livro é ${this.titulo}, possui${this.paginas} páginas e foi escrito por ${this.autor}`)
    }
}
const livro = new livro("Alice no País das Maravilhas", "Lewis Carroll", 320);
livro.mostrarDetalhes()


//atv2

class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo = this.saldo + valor
        console.log(`Depósito de R$${valor} realizado`)
    }

    sacar(valor) {
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente. Saldo atual: R$${this.saldo}`)
        } else {
            this.saldo = this.saldo - valor
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`)
        }
    }

    verSaldo() {
        console.log(`Saldo atual de ${this.titular}: R$${this.saldo}`)
    }
}
const conta = new ContaBancaria("Lucas", 500);
conta.depositar(200)
conta.sacar(100)
conta.verSaldo()


//atv3

class Pet {
    constructor(nome, especie, idade, som) {
        this.nome = nome
        this.especie = especie
        this.idade = idade
        this.som = som
    }

    apresentar() {
        console.log(` ${this.nome} ela é um ${this.especie} tem ${this.idade} anos e faz ${this.som} `)
    }
}

    const cachorro = new Pet("suzi", "golden", 5, "Au Au")
     cachorro.apresentar()

     class Pet2 {
        constructor(nome, especie, idade, som) {
            this.nome = nome
            this.especie = especie
            this.idade = idade
            this.som = som
        }
    
        apresentar() {
            console.log(` ${this.nome} ela é ${this.especie} tem ${this.idade} anos e faz ${this.som} `)
        }
    }
    
        const gato = new Pet2("lua", "persa", 2, "miau")
         gato.apresentar()


//atv4

class Filme {
    constructor(titulo, genero, duracao) {
        this.titulo = titulo;
        this.genero = genero;
        this.duracao = duracao;
    }

    exibirInfo() {
        console.log(`Você está assistindo "${this.titulo}", um filme de ${this.genero} que dura ${this.duracao} minutos.`)
    }
}
const filme = new Filme("O Espetacular Homem-Aranha", "Ação, Aventura, Ficção Científica", 136);
filme.assistir()
filme.exibirInfo()


//atv5

class musica {
    constructor(nome, artista, tempo) {
        this.titulo = nome
        this.autor = artista
        this.paginas = tempo
    }

    tocar() {
        console.log(`Tocando ${this.titulo} de ${this.autor}`)
    }
}
const musica = criarMusica("Tempo Perdido", "Legião Urbana", 4.23);
musica.tocar()