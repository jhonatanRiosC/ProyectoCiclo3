import React, { Fragment, useState, useEffect } from 'react';
import './UsuariosStyles.css';

let users_db =[
    {
        '_id': '1',
        'name': 'John Doe',
        'email': 'john@doe.com',
        'password': '12345',
        'role': 'admin',
        'status': 'active'
    },
    {
        '_id': '2',
        'name': 'Jane Doe',
        'email': 'jane@doe.com',
        'password': '12345',
        'role': 'admin',
        'status': 'active'
    },
    {
        '_id': '3',
        'name': 'Homero Simpson',
        'email': 'elhomo@simpson.com',
        'password': '12345',
        'role': 'vendedor',
        'status': 'active'
    },
    {
        '_id': '4',
        'name': 'Bart Simpson',
        'email': 'elbarto@simpson.com',
        'password': '12345',
        'role': 'vendedor',
        'status': 'inactive'
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
            <h1>USUARIOS DEL SISTEMA</h1><br />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Rol</th>
                        <th scope="col">Estado</th>
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
                            </tr>
                        );
                    })
                }
                    {/* <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr> */}
                </tbody>
            </table>

        </Fragment>
    )
}

export default UsuariosPage;