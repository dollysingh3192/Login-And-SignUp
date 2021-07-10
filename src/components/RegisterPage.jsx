import React, { useState } from "react";
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { newRegister } from '../services/user';

function RegisterPage() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    const history = useHistory();
    const dispatch = useDispatch();
    const message = useSelector(state => state.register.message);
    const loader = useSelector(state => state.loader.loader);

    const redirect = () => {
        history.push('/login');
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (user.name && user.email && user.password) {
            dispatch(newRegister(user));
        }
    }

    return (
        <React.Fragment>
            {
                loader &&
                <>
                    <div className="overlay"></div>
                    <div className="spinner"></div>
                </>
            }
            <main class="form-signin">
                <form name="form" onSubmit={onSubmit}>
                    <h1 class="h3 mb-3 fw-normal">Register Here</h1>
                    <div class="form-floating">
                        <input type="text" name="name" value={user.name} class="form-control" id="floatingName" placeholder="Tina" onChange={onChange} required />
                        <label htmlFor="floatingName">Your  Name</label>
                    </div>

                    <div class="form-floating">
                        <input type="email" name="email" value={user.email} class="form-control" id="floatingInput" placeholder="name@example.com" onChange={onChange} required />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div class="form-floating">
                        <input type="password" name="password" value={user.password} class="form-control" id="floatingPassword" placeholder="Password" onChange={onChange} required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <button class="w-40 btn btn-lg btn-primary me-2" type="submit">Register</button>
                    <button class="w-40 btn btn-lg btn-outline-danger" onClick={redirect}>Cancel</button>
                </form>
            </main>
            <p>Already an account? <a onClick={redirect} class="link-primary" style={{ "cursor": "pointer" }}>SignIn</a></p>
            <div className="message">
                {message}
            </div>
        </React.Fragment>
    )
}

export default RegisterPage;
