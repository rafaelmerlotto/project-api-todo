import { Content, PrismaClient } from '@prisma/client';

export class Service {
    constructor(private readonly prisma: PrismaClient) { }


    getContent() {
        return this.prisma.content.findMany()
    }

    async createContent(text: string) {
        return await this.prisma.content.create({
            data: {
                text: text,
                completed: false
            }
        })
    }

    async deleteContent(contentId: string) {
        return await this.prisma.content.delete({
            where: {
                id: contentId
            }
        })
    }

}
