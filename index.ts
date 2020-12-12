import dotenv from "dotenv";
dotenv.config();
import { productRoutes } from "./routes/products.routes"
import express from "express";
import multer from 'multer';
import path from 'path';
import mongoose from "mongoose";

// Instanciar express
const app = express();
//configuración de guardado que multer debe aplicar al ponerlo en uso

const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null,'uploads/');
},
filename:(req,file,cb)=>{
   console.log(file);
   cb(null,file.originalname); 
}
})

const upload = multer({ storage: storage }); 



app.post('/upload-file',upload.array('file',5), async (req,res)=>{
    try{
        res.send(req.files);
    }catch (err){
        res.sendStatus(400);
    }
})

/*app.get('/images/:name',async (req,res)=>{
    try {
        res.download(path.join('uploads',req.params.name));
    } catch(err) {
        res.sendStatus(400);
    }
})*/





// Puerto
app.set("port", process.env.PORT);

// Middlewares
app.use(express.json());

// Rutas

app.use("/products", productRoutes.router);


mongoose.connect(`mongodb+srv://belenmlt:${process.env.MATLASPASS}@cluster0.xq5kj.mongodb.net/Alquilator?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    // Inicializar server
    app.listen(app.get("port"), () => {
        console.log(`Server working on port ${app.get("port")}`);    
    });
})
.catch(e => console.log('Ha ocurrido un error:', e));