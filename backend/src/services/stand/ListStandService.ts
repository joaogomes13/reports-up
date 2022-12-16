import prismaClient from "../../prisma";

class ListStandService {
    async execute() {

        const standList = await prismaClient.stand.findMany({
            select: {
                id: true,
                name: true
            }
        })
        return standList
    }
}

export { ListStandService }
