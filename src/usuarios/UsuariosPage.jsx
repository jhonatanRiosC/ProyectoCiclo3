// Laura posada  - Creado el 1 Oct 2021
import React, { Fragment, useState, useEffect } from 'react';
import './UsuariosStyles.css';
//import NavbarComponent from '../shared/components/navbar/NavbarComponent';

let users_db =[
    {
        '_id': '1',
        'name': 'Jarol Andres Castaño',
        'email': 'jaancastano@utp.edu.co',
        'password': '12345',
        'role': 'Vendedor',
        'status': 'Autorizado'
    },
    {
        '_id': '2',
        'name': 'Diana Dorado',
        'email': 'dianadorado25081994@gmail.com',
        'password': '12345',
        'role': 'Vendedor',
        'status': 'Pendiente'
    },
    {
        '_id': '3',
        'name': 'Alejandro Lopez',
        'email': 'alopezpe1@gmail.com',
        'password': '12345',
        'role': 'Vendedor',
        'status': 'Autorizado'
    },
    {
        '_id': '4',
        'name': 'Laura Posada',
        'email': 'posadalaura57@gmail.com',
        'password': '12345',
        'role': 'Administrador',
        'status': 'Autorizado'
    },
    {
        '_id': '5',
        'name': 'Jhonatan Ríos',
        'email': 'jhonatanplac98@outlook.com',
        'password': '12345',
        'role': 'Vendedor',
        'status': 'No autorizado'
    }
]


function UsuariosPage() {

    const [users, setUsers] = useState([]);

    const get_users = () => {
         // Se obtiene los datos de la API
         setUsers(users_db)
    }

    useEffect(() => {
        get_users()
    }, [users])

    
    
    return (
        <Fragment>
            {/* <NavbarComponent /> */}
            <h1>USUARIOS DEL SISTEMA</h1><br />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Rol</th>
                        <th scope="col">Estado</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>

                {
                    users.map(item => {
                        return (
                            <tr key={item._id}>
                            <td>{ item._id }</td>
                            <td>{ item.name }</td>
                            <td>{ item.email }</td>
                            <td>{ item.role }</td>
                            <td>{ item.status }</td>
                            <td>Editar</td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>

        </Fragment>
    )
}

export default UsuariosPage;