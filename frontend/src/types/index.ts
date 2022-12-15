export type StandInfo = {
    nomeStand: string,
    number: number,
    proprietario: string,
    monitor: string,
    representante: string
}

export type Infraestrutura = {
    mesasCadeirasInternas: boolean,
    areaPreparoIsolado: boolean,
    balcaoLimpo: boolean,
    mesaCadeirasLimpas: boolean,
    balcaoForrado: boolean,
    justificativaInfraestrutura?: string
}

export type Alimentos = {
    armazenamentoAdequado: boolean,
    validade: boolean,
    condicaoPreparo: boolean,
    balcaoAdequado: boolean,
    justificativaAlimento?: string
}

export type Preparo = {
    toucas: boolean,
    alcoolGel: boolean,
    mascaras: boolean,
    justificativaPreparo?: string
}

export type Atendimento = {
    trajeAdequado: boolean,
    duraveis: boolean,
    descartaveis: boolean,
    justificativaAtendimento?: string
}

export type Residuos = {
    organicoSecoSeparado: boolean,
    oleoSeparado: boolean,
    lixeirasTampadas: boolean,
    justificativaResiduo?: boolean
}

export type Ambiente = {
    ambienteInternoLimpo: boolean,
    ambienteExternoLimpo: boolean,
    cozinhaLimpa: boolean,
    justificativaAmbiente?: string
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
    faltouRecolhimentoLixo: boolean,
    faltouAgua: boolean,
    justificativaStand?: string
}


