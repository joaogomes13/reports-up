import prismaClient from "../../prisma"

interface FormDeleteRequest{
    form_id: string
}

class DeleteFormService{
    async execute({form_id}: FormDeleteRequest){

        const formDelete = await prismaClient.form.delete({
            where:{
                id: form_id
            }
        })

        return formDelete
    }
}

export { DeleteFormService }