import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";
import dontEnv from "dotenv"
dontEnv.config({path: "variables.env"})

const app = express();


//conectar la db

db.authenticate().then(()=>{
    console.log("conectado");
}).catch(error=>console.log("error"))


//Definir puerto
const host = process.env.HOST;
const port = process.env.PORT || 4000;

//Habilitar pug

app.set("view engine","pug")
app.set('view', path.join(__dirname, 'view'))

//Obtener el año actual
app.use((req,res,next)=>{
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    return next();
});

//Agregando bodyParser para leer los datos del formulario
app.use(express.urlencoded({extended:true}));


//Definir la carpeta publica
app.use(express.static("./public"))


//Agregar router
app.use("/",router);


app.listen(port,host, ()=>{
    console.log(`El servidor esta corriendo en el puerto ${port}`);
})