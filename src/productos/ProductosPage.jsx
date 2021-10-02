// Laura posada  - Creado el 1 Oct 2021
import React, { Fragment, useState, useEffect } from 'react';
import './ProductosStyles.css';
//import NavbarComponent from '../shared/components/navbar/NavbarComponent';

let products_db =[
    {
        'id_product': '108',
        'description': 'Capuchino',
        'unit_price': 1000,
        'status': 'Disponible'
    },
    {
        'id_product': '102',
        'description': 'Espresso',
        'unit_price': 600,
        'status': 'Disponible'
    }
]


function ProductosPage() {

    const [products, setProducts] = useState([]);

    const get_products = () => {
         // Se obtiene los datos de la API
         setProducts(products_db)
    }

    useEffect(() => {
        get_products()
    }, [products])

    
    
    return (
        <Fragment>
            {/* <NavbarComponent /> */}
            <h1>PRODUCTOS REGISTRADOS</h1><br />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id Producto</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Valor Unitario</th>
                        <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>

                {
                    products.map(item => {
                        return (
                            <tr key={item.id_product}>
                            <td>{ item.id_product }</td>
                            <td>{ item.description }</td>
                            <td>{ item.unit_price }</td>
                            <td>{ item.status }</td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>

        </Fragment>
    )
}

export default ProductosPage;