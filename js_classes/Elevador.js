class Elevador {
    constructor(andarAtual, totalAndares, CapacidadeElevador, qtndPessoasAtual) {

        this.andarAtual = andarAtual;
        this.totalAndares = totalAndares;
        this.CapacidadeElevador = CapacidadeElevador;
        this.qtndPessoasAtual = qtndPessoasAtual;
    }

    entrar(quantidaDePessoa) {
        var calculaPessoas = quantidaDePessoa + this.qtndPessoasAtual;
        if (calculaPessoas > this.CapacidadeElevador) {
            var qntElevador = this.CapacidadeElevador - this.qtndPessoasAtual;
            quantidaDePessoa -= qntElevador;
            document.write(`Algumas pessoas entraram mas restaram ${quantidaDePessoa} por conta do elevador atingir seu limite maximo`);
            this.qtndPessoasAtual += qntElevador;
        } else {
            document.write(quantidaDePessoa +" pessoas entraram!");
            this.qtndPessoasAtual += quantidaDePessoa;
        }
        document.write(`<br/><br/> Numero de pessoas no elevador: ${this.qtndPessoasAtual}`)
    }
    sair(quantidaDePessoa) {
        if (this.qtndPessoasAtual == 0) {
            document.write("<br/><br/> Não existe 0 pessoas mano")
        }else if(quantidaDePessoa > this.qtndPessoasAtual){
            document.write("<br/><br/> Isso é muito mais doque tem no elevador, escreva uma quantidade válida");
        } 
        else {
            this.qtndPessoasAtual -= quantidaDePessoa;
            document.write("<br/><br/>" + quantidaDePessoa + " pessoas sairam!");
        }
        document.write(`<br/><br/> Numero de pessoas no elevador: ${this.qtndPessoasAtual}`)
    }
    subir(subirAndar) {
        var andar = this.totalAndares - this.andarAtual;
        if (subirAndar > andar) {
            document.write(`<br/><br/> Especifique um numero menor que ${andar} para subir andares`);
        } else {
            document.write(`<br/><br/> O andar atual é ${this.andarAtual}, você subiu ${subirAndar} `)
            this.andarAtual += subirAndar;
            
        }
        document.write(`<br/><br/> O andar atual é ${this.andarAtual}`)
        
    }
    descer(descerAndar) {
        var andar = this.andarAtual;
        if (descerAndar > andar) {
            document.write(`<br/><br/> Especifique um numero menor que ${andar} para descer andares`)
        }else{
        document.write(`<br/><br/> O andar atual é ${this.andarAtual}, você desceu ${descerAndar} andares.`)
        this.andarAtual -= descerAndar;
        }
        document.write(`<br/><br/> O andar atual é ${this.andarAtual}`)
    }
}