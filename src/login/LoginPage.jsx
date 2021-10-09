import React, { Fragment, useState } from 'react';
import './LoginStyles.css';



function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        console.log('Login')
        console.log(`${email} ${password} `)
        // Verifica sin el correo y la contraseña son correctas

    }

    return (
        <Fragment>
            <div className="container">
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(data)=> setEmail(data.target.value)} />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(data)=> setPassword(data.target.value)}/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button type="button" className="btn btn-primary mt-2" onClick={login}>Iniciar sesión</button>
            </div>
        </Fragment>
    )
}

export default LoginPage;