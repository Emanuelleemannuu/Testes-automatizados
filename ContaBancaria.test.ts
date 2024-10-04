import { beforeEach, describe, expect, test } from "bun:test";
import ContaBancaria from "./ContaBancaria.ts";


describe('Testando classe ContaBancaria', () => {
    let conta:ContaBancaria
    let contaDestino = new ContaBancaria()
    beforeEach(() => {
        conta = new ContaBancaria()
    })

    test('Testando depositar valor positivo', () => {
        conta.depositar(100)
        expect(conta.consultarSaldo()).toBe(120)
    })

    test('Testando depositar valor negativo', () => {
        conta.depositar(-30)
        expect(conta.consultarSaldo()).toBe(20)
    })

    test('Testando sacar valor válido', () => {
        conta.sacar(10)
        expect(conta.consultarSaldo()).toBe(10)
    })

    test('Testando sacar valor inválido', () => {
        conta.sacar(650)
        expect(conta.consultarSaldo()).toBe(20)
    })

    test('Testando transferir valor válido', () => {
        conta.transferir(15, contaDestino)
        expect(conta.consultarSaldo()).toBe(5)
    })

    test('Testando transferir valor inválido', () => {
        conta.transferir(100, contaDestino)
        expect(conta.consultarSaldo()).toBe(20)
    })
    
})

