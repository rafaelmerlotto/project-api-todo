import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main() {


    const content1 = await prisma.content.create({
        data: {
            text: 'new content'
        },
    });

    const content2 = await prisma.content.create({
        data: {
            text: 'new content 2'
        },
    });

    const content3 = await prisma.content.create({
        data: {
            text: 'new content 3'
        },
    });
}

main().then(() => {
    console.log('ok');
    process.exit(0)
})
    .catch((err) => {
        console.log(err);
        process.exit(1)
    });