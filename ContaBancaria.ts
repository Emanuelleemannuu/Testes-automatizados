export default class ContaBancaria {
    private saldo = 20;
    private numeroConta = 123;
    private agencia = 89;
    private extrato: { descricao: string, data: Date }[]
    private descricao: string

    constructor() {
        this.extrato = []
        this.descricao = ''
    }

    public depositar(valor: number) {
        if (valor > 0) {
            this.saldo += valor
            this.registrarOperacao(`Depósito de R$${valor},00`)
        }
    }

    public sacar(valor: number) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor
            this.registrarOperacao(`Saque de R$${valor},00`)

        } else {
            console.log('Valor inválido!')
        }
    }

    public consultarSaldo() {
        return this.saldo
    }

    public transferir(valor: number, contaDestino: ContaBancaria) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor
            contaDestino.saldo += valor
            this.registrarOperacao(`Transferência de R$${valor},00`)

        } else {
            console.log('Valor inválido!')
        }
    }


    public exibirExtrato() {
        console.log(`--- Transações --- `)
        for (const extrato of this.extrato) {
            console.log(`
                Descrição: ${extrato.descricao}
                Data: ${extrato.data}`)
        }
    }


    private registrarOperacao(descricao: string) {
        let data = new Date()
        this.extrato.push({
            descricao: descricao,
            data: data
        })

    }



}
