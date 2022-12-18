export type Formulario = {
    id: string,
    created_at: string,
    
    nameStand: string,
    number: number,
    ownerName: string,
    monitorUp: string,
    representative: string,

    mesaCadeirasInternas: boolean,
    areaPreparoIsolado: boolean,
    balcaoLimpo: boolean,
    mesaCadeirasLimpas: boolean,
    balcaoForrado: boolean,
    justificativaInfraestrutura?: string,

    armazenamentoAdequado: boolean,
    validade: boolean,
    condicaoPreparo: boolean,
    balcaoAdequado: boolean,
    justificativaAlimento?: string,

    toucas: boolean,
    alcoolGel: boolean,
    mascaras: boolean,
    justificativaPreparo?: string,

    trajeAdequado: boolean,
    duraveis: boolean,
    descartaveis: boolean,
    justificativaAtendimento?: string,

    organicoSecoSeparado: boolean,
    oleoSeparado: boolean,
    lixeirasTampadas: boolean,
    justificativaResiduo?: string,

    ambienteInternoLimpo: boolean,
    ambienteExternoLimpo: boolean,
    cozinhaLimpa: boolean,
    justificativaAmbiente?: string,

    equipamentos?: [{
        id: string
        name: string,
        qtd: number,
        potency: number
    }],

    faltouEnergia: boolean,
    faltouRecolhimentoLixo: boolean,
    faltouAgua: boolean,
    justificativaStand?: string,
    
    justificativaRecomendacao: string
    
}

export type StandInfo = {
    id?: string,
    name: string,
    number: number,
    ownerName: string,
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
    id: string, 
    nameEquip: string, 
    qtd: number, 
    potency: number 
}

export type Stand = {
    faltouEnergia: boolean,
    faltouRecolhimentoLixo: boolean,
    faltouAgua: boolean,
    justificativaStand?: string
}


