export type Infra = {
    
    mesas: boolean,
    preparo: boolean,
    balcaoLimpo: boolean,
    mesasLimpas: boolean,
    balcaoForrado: boolean,
    armazenamento: boolean,
    prazos: boolean,
    condicaoPreparo: boolean,
    balcaoPreparo: boolean,
    outroEquipamento: [{
        nome: string,
        qtd: number
    }]

}