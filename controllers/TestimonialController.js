import {Testimonial} from "../models/Testimonial.js";
const guardaTestimonial = async (req,res)=>{
 const {nombre, correo, mensaje} = req.body;
 const errores = [];

 if(nombre.trim()===""){ errores.push("nombre");}
 if(correo.trim()===""){errores.push("correo");}
 if(mensaje.trim()===""){errores.push("mensaje");}

 if(errores.length>0){
    //Consulta los testimoniales
    const testimoniales = await Testimonial.findAll();

    res.render("testimoniales",{
        pagina: "Testimoniales",
        errores,
        nombre,
        correo,
        mensaje,
        testimoniales
    })
 }else{
     try {
         await Testimonial.create({
             nombre,
             correo, 
             mensaje
         })
         res.redirect("testimoniales");
     } catch (error) {
         console.log(error);
     }
 }
 
}

export {guardaTestimonial}