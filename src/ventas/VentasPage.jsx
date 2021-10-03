// Laura posada  - Creado el 1 Oct 2021
import React, { Fragment, useState, useEffect } from 'react';
import './VentasStyles.css';
//import NavbarComponent from '../shared/components/navbar/NavbarComponent';
import Formulario from '../shared/components/Formulario/Formulario';
import { Link } from "react-router-dom"
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';





function VentasPage() {

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

    const [sales, setSales] = useState([]);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);

    const get_sales = () => {
         // Se obtiene los datos de la API
         setSales(sales_db)
    }

    useEffect(() => {
        get_sales()
    }, []
    
    )

    const [SaleSeleccionado, setSaleSeleccionado] = useState({
        id_sale: '',
        total_value: '',
        id_product: '',
        amount: '',
        unit_price: '',
        date: '',
        id_client: '',
        name_client: '',
        seller: ''


    });

    const seleccionarSale = (item, caso) => {
        setSaleSeleccionado(item);
        (caso === 'Editar') ? setModalEditar(true) : setModalEliminar(true)
    }

    const handleChange = e => {
        const { name, value } = e.target;
        //console.log(name, value)
        setSaleSeleccionado((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const editar = () => {
        let userNueva = sales;
        userNueva.map(sale => {
            if (sale.id_sale=== SaleSeleccionado.id_sale) {
                sale.total_value = SaleSeleccionado.total_value;
                sale.id_product = SaleSeleccionado.id_product;
                sale.amount = SaleSeleccionado.amount;
                sale.unit_price = SaleSeleccionado.unit_price;
                sale.status = SaleSeleccionado.status;
                sale.date = SaleSeleccionado.date;
                sale.id_client = SaleSeleccionado.id_cliente;
                sale.name_cliente = SaleSeleccionado.name_client;
                sale.seller = SaleSeleccionado.seller;
            }
        });
        setSales(userNueva);
        setModalEditar(false); 
    }
    
    const eliminar =()=>{
        setSales(
            sales.filter(
                sale=>sale.id_sale!==SaleSeleccionado.id_sale
            )
        );
        setModalEliminar(false);

      }
          
        
        
    

    
    
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
                        <th scope="col">Acciones</th>
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
                            <td><button className="btn btn-primary" onClick={() => seleccionarSale(item, 'Editar')}>Editar</button> {"   "}
                                        <button className="btn btn-danger" onClick={() => seleccionarSale(item, 'Eliminar')}>Eliminar</button></td>
                            </tr>
                            
                        );
                    })
                }
                </tbody>
            </table>
            <Modal isOpen={modalEditar}>
                <ModalHeader>
                    <div>
                        <h3>Editar Venta</h3>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label>ID Venta</label>
                        <input
                            className="form-control"
                            readOnly
                            type="text"
                            name="id_sale"
                            value={SaleSeleccionado && SaleSeleccionado.id_sale}
                        />
                        <br />

                        <label>total valor</label>
                        <input
                            className="form-control"
                            type="number"
                            name="total_value"
                            value={SaleSeleccionado && SaleSeleccionado.total_value}
                            onChange={handleChange}
                        />
                        <br />

                        <label>Id producto</label>
                        <input
                            className="form-control"
                            type="text"
                            name="id_product"
                            value={SaleSeleccionado && SaleSeleccionado.id_product}
                            onChange={handleChange}
                        />
                        <br />
                        <br />

                        <label>Monto</label>
                        <input
                            className="form-control"
                            type="text"
                            name="amount"
                            value={SaleSeleccionado && SaleSeleccionado.amount}
                            onChange={handleChange}
                        />
                        <br />
                        <br />

                        <label>Precio Unidad</label>
                        <input
                            className="form-control"
                            type="number"
                            name="unit_price"
                            value={SaleSeleccionado && SaleSeleccionado.unit_price}
                            onChange={handleChange}
                        />
                        <br />
                        <br />

                        <label>Fecha</label>
                        <input
                            className="form-control"
                            type="date"
                            name="date"
                            value={SaleSeleccionado && SaleSeleccionado.date}
                            onChange={handleChange}
                        />
                        <br />
                        <br />

                        <label>Id cliente</label>
                        <input
                            className="form-control"
                            type="text"
                            name="id_client"
                            value={SaleSeleccionado && SaleSeleccionado.id_client}
                            onChange={handleChange}
                        />
                        <br />
                        <br />

                        <label>Nombre cliente</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name_client"
                            value={SaleSeleccionado && SaleSeleccionado.name_client}
                            onChange={handleChange}
                        />
                        <br />
                        <br />

                        <label>Vendedor</label>
                        <input
                            className="form-control"
                            type="text"
                            name="seller"
                            value={SaleSeleccionado && SaleSeleccionado.seller}
                            onChange={handleChange}
                        />
                        <br />

                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary" onClick={() => editar()}>
                        Actualizar
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => setModalEditar(false)}
                    >
                        Cancelar
                    </button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalEliminar}>
                <ModalBody>
                    Estás seguro que deseas eliminar la venta {SaleSeleccionado && SaleSeleccionado.name}
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-danger" onClick={() => eliminar()}>
                        Sí
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={() => setModalEliminar(false)}
                    >
                        No
                    </button>
                </ModalFooter>
            </Modal>


            <div>
                <Link to="/formulario">
                <button className="btn btn-warning" type="button">Ingresar</button>
                </Link>
            </div>

        </Fragment>
    )
}


export default VentasPage;