import express from 'express'
import { prisma } from './prisma';
import { Service } from './service';
import cors from 'cors'

const server = express();
server.use(express.json());
const service = new Service(prisma)
server.use(cors())

server.get('/', async (req, res) => {
    const contents = await service.getContent()
    if (!contents) {
        res.status(404).send({ msg: 'Cannot find Content' })
    }
    res.status(200).send(contents)
})

server.post('/', async (req, res) => {
    const { text } = req.body;
    const content = await service.createContent(text);
    res.status(200).send(content);
})

server.delete('/:contentId', async (req, res) => {
    const { contentId } = req.params;
    const content = await service.deleteContent(contentId);
    if (!content) {
        return res.status(401).send({ msg: 'Cannot delete Content' });

    }
    const contents = await service.getContent()
    res.status(200).send(contents);
})

const port = 4000;
server.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})