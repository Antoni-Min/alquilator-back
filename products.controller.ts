import {Request,Response} from 'express';
const ProductModel = require("../models/products.model")

class ProductController {
    public async getProducts (req: Request, res: Response){
        try {
            const allProducts = await ProductModel.find();
            res.send(allProducts);

        } catch (error) {
            console.log(error);
            res.sendStatus(404);
        }
    }

    public async postProducts (req: Request, res: Response){

        try {
            const product = {
                name: req.body.name,
                description: req.body.description,
                status: req.body.status,
                price: req.body.price,
                pictures: req.body.pictures,
                bookingLength: req.body.bookingLength
            };

            const newProduct = new ProductModel();

            newProduct.name = product.name;
            newProduct.description = product.description;
            newProduct.status = product.status;
            newProduct.price = product.price;
            newProduct.pictures = product.pictures;
            newProduct.bookingLength = product.bookingLength;
            

            await newProduct.save();

            res.send("Tus datos de usuario se han guardado correctamente.")

        } catch(error){
            console.log(error);
            res.sendStatus(404)
        }
    }

    public async deleteProducts (req: Request, res: Response){

    }

    public async updateProucts(req: Request, res: Response){
        
    }

}

export const productController = new ProductController();

/*mongoose.connect(`mongodb+srv://belenmlt:${process.env.MATLASPASS}@cluster0.xq5kj.mongodb.net/Alquilator?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    // Inicializar server
    app.listen(app.get("port"), () => {
        console.log(`Server working on port ${app.get("port")}`);    
    });
})
.catch(e => console.log('Ha ocurrido un error:', e));
mongoose.connect(`mongodb+srv://belenmlt:${process.env.MATLASPASS}@cluster0.xq5kj.mongodb.net/Alquilator?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    // Inicializar server
    app.listen(app.get("port"), () => {
        console.log(`Server working on port ${app.get("port")}`);    
    });
})
.catch(e => console.log('Ha ocurrido un error:', e));*/
