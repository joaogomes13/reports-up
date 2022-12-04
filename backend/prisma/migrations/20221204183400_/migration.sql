-- CreateTable
CREATE TABLE "stands" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ownerName" TEXT NOT NULL,
    "monitorUp" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "representative" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "stands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "equipments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "potency" INTEGER,
    "qtd" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "form_id" TEXT NOT NULL,

    CONSTRAINT "equipments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "forms" (
    "id" TEXT NOT NULL,
    "mesaCadeirasInternas" BOOLEAN NOT NULL DEFAULT false,
    "areaPreparoIsolado" BOOLEAN NOT NULL DEFAULT false,
    "balcaoLimpo" BOOLEAN NOT NULL DEFAULT false,
    "mesaCadeirasLimpas" BOOLEAN NOT NULL DEFAULT false,
    "balcaoForrado" BOOLEAN NOT NULL DEFAULT false,
    "justificativaInfraestrutura" TEXT,
    "armazenamentoAdequado" BOOLEAN NOT NULL DEFAULT false,
    "validade" BOOLEAN NOT NULL DEFAULT false,
    "condicaoPreparo" BOOLEAN NOT NULL DEFAULT false,
    "balcaoAdequado" BOOLEAN NOT NULL DEFAULT false,
    "justificativaAlimento" TEXT,
    "toucas" BOOLEAN NOT NULL DEFAULT false,
    "alcoolGel" BOOLEAN NOT NULL DEFAULT false,
    "mascaras" BOOLEAN NOT NULL DEFAULT false,
    "justificativaPreparo" TEXT,
    "trajeAdequado" BOOLEAN NOT NULL DEFAULT false,
    "duraveis" BOOLEAN NOT NULL DEFAULT false,
    "descartaveis" BOOLEAN NOT NULL DEFAULT false,
    "justificativaAtendimento" TEXT,
    "organicoSecoSeparado" BOOLEAN NOT NULL DEFAULT false,
    "oleoSeparado" BOOLEAN NOT NULL DEFAULT false,
    "lixeirasTampadas" BOOLEAN NOT NULL DEFAULT false,
    "justificativaResiduo" TEXT,
    "ambienteInternoLimpo" BOOLEAN NOT NULL DEFAULT false,
    "ambienteExternoLimpo" BOOLEAN NOT NULL DEFAULT false,
    "cozinhaLimpa" BOOLEAN NOT NULL DEFAULT false,
    "justificativaAmbiente" TEXT,
    "justificativaEquipamento" TEXT,
    "faltouEnergia" BOOLEAN NOT NULL DEFAULT false,
    "faltouRecolhimentoLixo" BOOLEAN NOT NULL DEFAULT false,
    "faltouAgua" BOOLEAN NOT NULL DEFAULT false,
    "justificativaStand" TEXT,
    "justificativaRecomendacao" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "stand_id" TEXT NOT NULL,

    CONSTRAINT "forms_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "equipments" ADD CONSTRAINT "equipments_form_id_fkey" FOREIGN KEY ("form_id") REFERENCES "forms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "forms" ADD CONSTRAINT "forms_stand_id_fkey" FOREIGN KEY ("stand_id") REFERENCES "stands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
