import Cadas from "../models/cadasModel.js"
import { z } from "zod"
import { where } from "sequelize"

const createSchema = z.object({
    sagentCabo: z.string({
        required_error: "O nome do Sargento/Cabo é obrigatório"
    }),
    equipe: z.string({
        required_error: "O nome da equipe é obrigatorio"
    }),
    cocluido: z.string({
        required_error: "A informação de que foi concluido é obridatorio"
    }),
    solucaoAplic: z.string({
        required_error: "A solução aplicada é obrigatoria"
    })
})

export const create = async (req, res) => {
    const createValidation = createSchema.safeParse(req.body)
    
    if(!createValidation.success){
        res.status(400).json(createValidation.error)
        return
    }

    const {sagentCabo} = createValidation.data
    const {equipe} = createValidation.data
    const {cocluido} = createValidation.data
    const {solucaoAplic} = createValidation.data

    const novoCadas = {
        sagentCabo,
        equipe,
        cocluido,
        solucaoAplic
    }

    try {
        const criarCadas = await Cadas.create(novoCadas)
        res.status(201).json(criarCadas)
    } catch (error) {
        console.error(error)
        res.status(500).json({ Err: "Erro ao cadastrar detalhes do atendimento" })
    }
}
