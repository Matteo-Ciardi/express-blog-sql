const express = require('express');
const app = express();
const port = 3000;

const postsRouter = require('./routers/posts')

const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log('Hai richiesto index')

    res.send('<h1>Home blog</h1>')
})

app.use('/posts', postsRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});