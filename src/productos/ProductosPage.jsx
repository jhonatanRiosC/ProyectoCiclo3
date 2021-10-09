// Laura posada  - Creado el 1 Oct 2021
import React, { Fragment, useState, useEffect } from 'react';
import './ProductosStyles.css';
//import NavbarComponent from '../shared/components/navbar/NavbarComponent';
import { Link } from "react-router-dom"
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';



function ProductosPage() {

    let products_db = [
        {
            id_product: '108',
            description: 'Capuchino',
            unit_price: 1000,
            status: 'Disponible'
        },
        {
            id_product: '102',
            description: 'Espresso',
            unit_price: 600,
            status: 'Disponible'
        }
    ]

    const [products, setProducts] = useState([]);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [busqueda, setBusqueda] = useState("");

    const get_products = () => {
        // Se obtiene los datos de la API
        setProducts(products_db)
    }

    useEffect(() => {
        get_products()
    }, [])

    const handleChange = e => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (terminoBusqueda) => {
        let resultadosBusqueda = products.filter((producto) => {
            if (producto.id_product.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || producto.description.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return producto;
            }
        });
        setProducts(resultadosBusqueda);
    }

    const [ProductoSeleccionado, setProductoSeleccionado] = useState({
        id_product: '',
        description: '',
        unit_price: '',
        status: ''
    });

    const seleccionarProducto = (item, caso) => {
        setProductoSeleccionado(item);
        (caso === 'Editar') ? setModalEditar(true) : setModalEliminar(true)
    }

    const bChange = e => {
        const { name, value } = e.target;
        //console.log(name, value)
        setProductoSeleccionado((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const editar = () => {
        let userNueva = products;
        userNueva.map(producto => {
            if (producto.id_product === ProductoSeleccionado.id_product) {
                producto.description = ProductoSeleccionado.description;
                producto.unit_price = ProductoSeleccionado.unit_price;
                producto.status = ProductoSeleccionado.status;
            }
        });
        setProducts(userNueva);
        setModalEditar(false);
    }

    const eliminar = () => {
        setProducts(
            products.filter(
                producto => producto.id_product !== ProductoSeleccionado.id_product
            )
        );
        setModalEliminar(false);

    }

    return (
        <Fragment>
            {/* <NavbarComponent /> */}
            <h1>PRODUCTOS REGISTRADOS</h1><br />

            <div className="containerInput">
                <input
                    className="form-control inputBuscar"
                    value={busqueda}
                    placeholder="Búsqueda por Identificación o Descripción"
                    onChange={handleChange} />
                <button className="btn btn-success">Buscar
                </button>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id Producto</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Valor Unitario</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        products.map(item => {
                            return (
                                <tr key={item.id_product}>
                                    <td>{item.id_product}</td>
                                    <td>{item.description}</td>
                                    <td>{item.unit_price}</td>
                                    <td>{item.status}</td>
                                    <td><button className="btn btn-primary" onClick={() => seleccionarProducto(item, 'Editar')}>Editar</button> {"   "}
                                        <button className="btn btn-danger" onClick={() => seleccionarProducto(item, 'Eliminar')}>Eliminar</button></td>
                                </tr>
                            );
                        })
                    }
                </tbody>


            </table>
            <Modal isOpen={modalEditar}>
                <ModalHeader>
                    <div>
                        <h3>Editar Producto</h3>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label>ID Producto</label>
                        <input
                            className="form-control"
                            readOnly
                            type="text"
                            name="id_product"
                            value={ProductoSeleccionado && ProductoSeleccionado.id_product}
                        />
                        <br />

                        <label>Descripcion</label>
                        <input
                            className="form-control"
                            type="text"
                            name="description"
                            value={ProductoSeleccionado && ProductoSeleccionado.description}
                            onChange={bChange}
                        />
                        <br />

                        <label>Valor unidad</label>
                        <input
                            className="form-control"
                            type="number"
                            name="unit_price"
                            value={ProductoSeleccionado && ProductoSeleccionado.unit_price}
                            onChange={bChange}
                        />
                        <br />
                        <br />

                        <label>Estado</label>
                        <input
                            className="form-control"
                            type="text"
                            name="status"
                            value={ProductoSeleccionado && ProductoSeleccionado.status}
                            onChange={bChange}
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
                    Estás seguro que deseas eliminar el Producto {ProductoSeleccionado && ProductoSeleccionado.name}
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
                <Link to="/formulario2">
                    <button className="btn btn-warning" type="button">Ingresar</button>
                </Link>
            </div>


        </Fragment>
    )
}

export default ProductosPage;