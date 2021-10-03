import React, { Fragment, useState } from "react";
import formularioStyle from "./formularioStyle.css"

const Formulario2= () => {
    const [datos, setDatos] = useState({
        idproducto: '',
        Cantidad: '',
        Idusuario: ''

    })

    const handleInputChange = (event) => {

        setDatos({
            ...datos,
            [event.target.getAttribute("idproducto")]: event.target.value
        })

    }

    const enviarDatos = (event) => {
        event.prevent.Default();
        console.log(datos.idproducto + "" + datos.Cantidad)


    }


    return (
        <Fragment>
            <h1 className="text-center display-1 text-secondary">Registro Producto</h1>
            <div className="container ">
                <form className="row" id="row" onSubmit={enviarDatos} classname="form-floating-mb-3">
                    <div className="col-md-3">
                        <input placeholder="Descripcion" className="form-control" type="text" name="idventa" onChange={handleInputChange}


                        />
                    </div>
                    <div className="col-md-3">
                        <input placeholder="Id Producto" className="form-control" type="text" name="idproducto" onChange={handleInputChange}


                        />
                    </div>
                    <div className="col-md-3">
                        <input placeholder="valor unitario" className="form-control" type="text" name="Idusuario" onChange={handleInputChange}


                        />

                    </div>
                    <div className="col-md-3">
                        <input placeholder="Estado" className="form-control" type="text" name="Cantidad" onChange={handleInputChange}


                        />

                    </div>


                </form>
                <hr/>
               
                <hr/>
                <form className="row" id="row" onSubmit={enviarDatos} className="form-floating-mb-3">
                    
                        
                    

                    <div className="col-md-3">
                        <button className="btn btn-success" type="submit">Agregar</button>
                    </div>
                    


                    


                </form>
                

            </div>
            




        </Fragment>







    );


}

export default Formulario2;