import prismaClient from "../../prisma";



interface ListFormRequest{
    stand_id: string;
}

class ListFormServices{
    async execute({stand_id}:ListFormRequest){
        
        const listForm = await prismaClient.form.findMany({
            where:{
                stand_id: stand_id
            }
        })

        return listForm
    }
}

export { ListFormServices }