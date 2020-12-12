import { Router } from "express";
import { productController } from "../controllers/products.controller";

class ProductRoutes {
    public router: Router = Router();

    constructor() {

        this.router.get("/", productController.getProducts);
        this.router.post("/", productController.postProducts);
        this.router.delete("/:id", productController.deleteProducts);
        this.router.put("/:id", productController.updateProucts);
    }
}


export const productRoutes = new ProductRoutes();