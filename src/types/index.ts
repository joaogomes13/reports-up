export type Infraestrutura = {
    mesasCadeirasInternas: boolean,
    areaPreparoIsolada: boolean,
    balcaoLimpo: boolean,
    mesasCadeirasLimpas: boolean,
    balcaoForrado: boolean
}

export type Alimentos = {
    armazenamentoAdequado: boolean,
    validade: boolean,
    condicaoPreparo: boolean,
    balcaoAdequado: boolean
}

export type Preparo = {
    toucas: boolean,
    alcoolGel: boolean,
    mascaras: boolean
}

export type Atendimento = {
    trajeAdequado: boolean,
    duraveis: boolean,
    descartaveis: boolean
}

export type Residuos = {
    organicoSecoSeparado: boolean,
    oleoSeparado: boolean,
    lixeirasTampadas: boolean
}

export type Ambiente = {
    ambienteInternoLimpo: boolean,
    ambienteExternoLimpo: boolean,
    cozinhaLimpa: boolean
}

export type Equipamentos = {
    fogao: boolean,
    chapa: boolean,
    forno: boolean,
    fritadeira: boolean,
    freezer: {
        possui: boolean,
        qtd: number,
        potencia: number
    },
    geladeira: {
        possui: boolean,
        qtd: number,
        potencia: number
    }
    outrosEquipamentos: [{
        id: string,
        equipamento: string,
        qtd: number
    }]
}

export type Stand = {
    faltouEnergia: boolean,
    faltaRecolhimentoLixo: boolean,
    faltaAgua: boolean
}


