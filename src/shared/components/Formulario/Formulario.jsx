import React, { Fragment, useState } from "react";
import formularioStyle from "./formularioStyle.css"

const Formulario = () => {
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
            <h1 className="text-center display-1 text-primary">Registro Ventas</h1>
            <div className="container " >
                <form className="row" id="row" onSubmit={enviarDatos} classname="form-floating-mb-3">
                    <div className="col-md-3">
                        <input placeholder="Id Venta" className="form-control" type="text" name="idventa" onChange={handleInputChange}


                        />
                    </div>
                    <div className="col-md-3">
                        <input placeholder="Id Producto" className="form-control" type="text" name="idproducto" onChange={handleInputChange}


                        />
                    </div>
                    <div className="col-md-3">
                        <input placeholder="Id Usuario" className="form-control" type="text" name="Idusuario" onChange={handleInputChange}


                        />

                    </div>
                    <div className="col-md-3">
                        <input placeholder="Cantidad" className="form-control" type="number" name="Cantidad" onChange={handleInputChange}


                        />

                    </div>


                </form>
                <hr/>
                <form className="row" onSubmit={enviarDatos} classname="form-floating-mb-3">
                    <div className="col-md-3">
                        <input placeholder="Valor Unitario" className="form-control" type="number" name="Vunitario" onChange={handleInputChange}


                        />
                    </div>
                    <div className="col-md-3">
                        <input placeholder="Valor total" className="form-control" type="number" name="Vtotal" onChange={handleInputChange}


                        />
                    </div>
                    <div className="col-md-3">
                        <input placeholder="Fecha Venta" className="form-control" type="date" name="Fventa" onChange={handleInputChange}


                        />

                    </div>
                    <div className="col-md-3">
                        <input placeholder="Nombre cliente" className="form-control" type="text" name="Ncliente" onChange={handleInputChange}


                        />

                    </div>
                    


                    


                </form>
                <hr/>
                <form className="row" id="row" onSubmit={enviarDatos} classname="form-floating-mb-3">
                    <div className="col-md-3">
                        <input placeholder="Vendedor" className="form-control" type="text" name="vendedor" onChange={handleInputChange}


                        />
                    

                        

                    </div>
                    <div className="col-md-3">
                        <input placeholder="Correo" className="form-control" type="email" name="Correo" onChange={handleInputChange} 


                        />
   

                    </div>
                    

                    <div className="col-md-3">
                        <button className="btn btn-primary" type="submit">Enviar</button>
                    </div>
                    


                    


                </form>
                

            </div>
            




        </Fragment>







    );


}

export default Formulario;