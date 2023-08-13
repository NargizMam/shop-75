import express from "express";
import fileDb from "../fileDb";
import {ProductWithoutId} from "../types";
const productsRouter = express();

productsRouter.get('/products', async (req, res) => {
    const products = await fileDb.getItems();
    res.send(products);
});
productsRouter.get('/products/:id', async (req, res) => {
    const products = await fileDb.getItems();
    const product =  products.find(product => product.id === req.params.id);
    if(!product){
        return res.sendStatus(404);
    }
    res.send(product);
});
productsRouter.post('/products', async (req, res) => {
    const productData: ProductWithoutId = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    };
    const savedProduct = await fileDb.addItem(productData);
    res.send('Create product will be here!')
});

export default productsRouter;