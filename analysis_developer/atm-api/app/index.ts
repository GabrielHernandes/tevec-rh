import express from 'express';


const app = express();
const port: number = 8080;

app.get('/', (req, res) => {
    res.send('Hello word!');
})

app.listen(port, () => {
    console.log(`Server started at http:localhost:${port}`);
})