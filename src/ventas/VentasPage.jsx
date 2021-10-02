// Laura posada  - Creado el 1 Oct 2021
import React, { Fragment, useState, useEffect } from 'react';
import './VentasStyles.css';
//import NavbarComponent from '../shared/components/navbar/NavbarComponent';


let sales_db =[
    {
        'id_sale': '001',
        'total_value': 10000,
        'id_product': '100',
        'amount': 2,
        'unit_price': 5000,
        'date': '01-10-21',
        'id_client': '12345',
        'name_client': 'Sara Giraldo',
        'seller': 'Jhonatan Ríos'
    },
    {
        'id_sale': '002',
        'total_value': 4000,
        'id_product': '111',
        'amount': 5,
        'unit_price': 800,
        'date': '01-10-21',
        'id_client': '12789',
        'name_client': 'Carolina Peña',
        'seller': 'Diana Dorado'
    }
]


function VentasPage() {

    const [sales, setSales] = useState([]);

    const get_sales = () => {
         // Se obtiene los datos de la API
         setSales(sales_db)
    }

    useEffect(() => {
        get_sales()
    }, [sales])

    
    
    return (
        <Fragment>
            {/* <NavbarComponent /> */}
            <h1>GESTIÓN DE VENTAS</h1><br />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id Venta</th>
                        <th scope="col">Valor Total</th>
                        <th scope="col">Id Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Valor Unitario</th>
                        <th scope="col">Fecha Venta</th>
                        <th scope="col">Id Cliente</th>
                        <th scope="col">Nombre Cliente</th>
                        <th scope="col">Vendedor</th>
                    </tr>
                </thead>
                <tbody>

                {
                    sales.map(item => {
                        return (
                            <tr key={item.id_sale}>
                            <td>{ item.id_sale }</td>
                            <td>{ item.total_value }</td>
                            <td>{ item.id_product }</td>
                            <td>{ item.amount }</td>
                            <td>{ item.unit_price }</td>
                            <td>{ item.date }</td>
                            <td>{ item.id_client }</td>
                            <td>{ item.name_client }</td>
                            <td>{ item.seller }</td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>

        </Fragment>
    )
}


export default VentasPage;