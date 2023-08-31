import express from 'express'

const server  = express();

server.get('/', (req, res) => {
    res.status(200).send({msg: 'server is active'})
})

const port = 4000;
server.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})