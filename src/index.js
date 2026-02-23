import express from 'express'

const app = express()
const port = 8001;

app.use(express.json());

app.get('/', (req,res) => {
    res.send('Hello from the express server!');
});

app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
});