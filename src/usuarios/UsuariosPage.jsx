// Laura posada  - Creado el 1 Oct 2021
import React, { Fragment, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
//import NavbarComponent from '../shared/components/navbar/NavbarComponent';

function UsuariosPage() {

    let users_db = [
        {
            _id: '1',
            name: 'Jarol Andres Castaño',
            email: 'jaancastano@utp.edu.co',
            password: '12345',
            role: 'Vendedor',
            status: 'Autorizado'
        },
        {
            _id: '2',
            name: 'Diana Dorado',
            email: 'dianadorado25081994@gmail.com',
            password: '12345',
            role: 'Vendedor',
            status: 'Pendiente'
        },
        {
            _id: '3',
            name: 'Alejandro Lopez',
            email: 'alopezpe1@gmail.com',
            password: '12345',
            role: 'Vendedor',
            status: 'Autorizado'
        },
        {
            _id: '4',
            name: 'Laura Posada',
            email: 'posadalaura57@gmail.com',
            password: '12345',
            role: 'Administrador',
            status: 'Autorizado'
        },
        {
            _id: '5',
            name: 'Jhonatan Ríos',
            email: 'jhonatanplac98@outlook.com',
            password: '12345',
            role: 'Vendedor',
            status: 'No autorizado'
        }
    ]

    const [users, setUsers] = useState([]);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
    

    const get_users = () => {
        // Se obtiene los datos de la API
        setUsers(users_db)
    }

    useEffect(() => {
        get_users()
    }, [])

    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
        _id: '',
        name: '',
        email: '',
        role: '',
        status: ''
    });

    const seleccionarUsuario = (item, caso) => {
        setUsuarioSeleccionado(item);
        (caso === 'Editar') ? setModalEditar(true) : setModalEliminar(true)
    }

    const handleChange = e => {
        const { name, value } = e.target;
        //console.log(name, value)
        setUsuarioSeleccionado((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const editar = () => {
        let userNueva = users;
        userNueva.map(usuario => {
            if (usuario._id === usuarioSeleccionado._id) {
                usuario.name = usuarioSeleccionado.name;
                usuario.email = usuarioSeleccionado.email;
                usuario.role = usuarioSeleccionado.role;
                usuario.status = usuarioSeleccionado.status;
            }
        });
        setUsers(userNueva);
        setModalEditar(false);
    }

    const eliminar =()=>{
        setUsers(
            users.filter(
                usuario=>usuario._id!==usuarioSeleccionado._id
            )
        );
        setModalEliminar(false);

      }

    return (
        <Fragment>
            {/* <NavbarComponent /> */}
            <h1 className="text-center font-weight-bold" >USUARIOS DEL SISTEMA</h1><br />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Rol</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map(item => (
                                <tr key={item._id}>
                                    <td>{item._id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>{item.status}</td>
                                    <td><button className="btn btn-primary" onClick={() => seleccionarUsuario(item, 'Editar')}>Editar</button> {"   "}
                                        <button className="btn btn-danger" onClick={() => seleccionarUsuario(item, 'Eliminar')}>Eliminar</button></td>
                                </tr>
                        ))
                    }
                </tbody>
            </table>

            <Modal isOpen={modalEditar}>
                <ModalHeader>
                    <div>
                        <h3>Editar Usuario</h3>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label>ID</label>
                        <input
                            className="form-control"
                            readOnly
                            type="text"
                            name="id"
                            value={usuarioSeleccionado && usuarioSeleccionado._id}
                        />
                        <br />

                        <label>Nombre</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            value={usuarioSeleccionado && usuarioSeleccionado.name}
                            onChange={handleChange}
                        />
                        <br />

                        <label>Email</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            value={usuarioSeleccionado && usuarioSeleccionado.email}
                            onChange={handleChange}
                        />
                        <br />

                        <label>Rol</label>
                        <input
                            className="form-control"
                            type="text"
                            name="role"
                            value={usuarioSeleccionado && usuarioSeleccionado.role}
                            onChange={handleChange}
                        />
                        <br />

                        <label>Estado</label>
                        <input
                            className="form-control"
                            type="text"
                            name="status"
                            value={usuarioSeleccionado && usuarioSeleccionado.status}
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
                    Estás seguro que deseas eliminar el usuario {usuarioSeleccionado && usuarioSeleccionado.name}
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





        </Fragment>
    );
}

export default UsuariosPage;