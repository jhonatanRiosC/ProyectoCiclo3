import React, { Fragment, useState } from "react";

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
        <Fragment >
            <h1 mt-5>Registro Ventas</h1>
            <div className="container">
                <form className="row" id="row" onSubmit={enviarDatos} classname="form-floating-mb-3">
                    <div className="col-md-3">
                        <input placeholder="Id producto" className="form-control" type="text" name="idproducto" onChange={handleInputChange}


                        />
                    </div>
                    <div className="col-md-3">
                        <input placeholder="Cantidad" className="form-control" type="number" name="Cantidad" onChange={handleInputChange}


                        />
                    </div>
                    <div className="col-md-3">
                        <input placeholder="Id Usuario" className="form-control" type="text" name="Idusuario" onChange={handleInputChange}


                        />

                    </div>
                    


                    <div className="col-md-3">
                        <button className="btn btn-primary" type="submit">Enviar</button>
                    </div>


                </form>

            </div>
            <div className="container">
                <div classname="input-group mb-3">
                    <div classname="input-group-prepend">
                        <span classname="input-group-text" id="basic-addon1">Informacion personal</span>
                    </div>
                    <input type="text" classname="form-control" placeholder="Nombre Cliente"  />
                </div>

                <div classname="input-group mb-3">
                    <input type="text" classname="form-control" placeholder="Fecha Venta" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    
                </div>

                
                <div classname="input-group mb-3">
                    <div classname="input-group-prepend">
                        <span classname="input-group-text" id="basic-addon3">Valor Unitario</span>
                    </div>
                    <input type="text" classname="form-control" id="basic-url" aria-describedby="basic-addon3" />
                </div>

                <div classname="input-group mb-3">
                    <div classname="input-group-prepend">
                        <span classname="input-group-text">Total$</span>
                    </div>
                    <input type="text" classname="form-control"  />
                    <div classname="input-group-append">
                        <span classname="input-group-text">Descripcion</span>
                    </div>
                </div>

                <div classname="input-group">
                    <div classname="input-group-prepend">
                        <span classname="input-group-text">("Si hubo problemas con el producto...")</span>
                    </div>
                    <textarea classname="form-control" aria-label="With textarea"></textarea>
                </div>
            </div>




        </Fragment>







    );


}

export default Formulario;