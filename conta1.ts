import ContaBancaria from "./ContaBancaria"

let conta1 = new ContaBancaria()
let conta2 = new ContaBancaria()

conta1.depositar(40)
conta1.sacar(20)
conta1.transferir(10, conta2)
conta1.exibirExtrato()
