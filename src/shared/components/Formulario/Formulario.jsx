import React, { Fragment, useState } from "react";

const Formulario = () => {
    const [datos,setDatos] = useState({
        idproducto :'',
        Cantidad : '',
        Idusuario : ''

    })

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.idproducto] : (event.target.value)
        })

    }



    return (
        <Fragment >
            <h1 >Registro Ventas</h1>
            <form className="row">
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



        </Fragment>







    );


}

export default Formulario;