import express from 'express';
import productsRouter from "./routers/products";
import fileDb from "./fileDb";

const app = express();
const port = 8000;

app.use('/products', productsRouter);
app.use(express.json());

const run = async () => {
    await fileDb.init();

    app.listen(port, () => {
        console.log('Server working on port' + port + '!');
    });
};

run().catch(console.error);
