import  {Viaje} from "../models/Viaje.js";
import  {Testimonial} from "../models/Testimonial.js";

const paginaInicio =async (req, res)=>{
    //Consultando 3 viajes del modelo viaje

    try {

        const resultado = await Promise.all(
            [ Viaje.findAll({limit: 3}),
             Testimonial.findAll({limit:3})])

        res.render("Inicio",{
            pagina: "Agencia Viajes",
            clase: "home",
            viajes: resultado[0],
            testimoniales:resultado[1]
        });
        
    } catch (error) {
        
    }


   
}
const paginaNosotros = (req,res)=>{
    res.render("nosotros",{
        pagina: "Sobre Nosotros"
    });
}
const paginaViajes = async (req,res)=>{

    const viajes = await Viaje.findAll();

    res.render("viajes",{
        pagina: "Proximos Viajes",
        viajes
    });
}
const paginaTestimoniales = async (req,res)=>{
    try {
        const nombre = "";
        const correo = "";
        const mensaje = "";

        const testimoniales = await Testimonial.findAll();

        res.render("testimoniales",{
            pagina: "Testimoniales",
            nombre, 
            correo, 
            mensaje,
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }
 
}
//Muestra pagina detalle viaje
const paginaDetalleViaje = async (req,res)=>{
    const {slug} = req.params;
    try {
        const viaje = await Viaje.findOne({
            where:{slug:slug}
        });
        res.render("viaje",{
            pagina: "Informacion Viaje",
            viaje
        });
    } catch (error) {
        
    }
}


export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}