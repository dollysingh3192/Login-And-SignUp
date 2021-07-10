import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../services/user';

function LoginPage() {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const history = useHistory();
    const dispatch = useDispatch();
    const loader = useSelector(state => state.loader.loader);
    const message = useSelector(state => state.login.message);

    const redirect = () => {
        history.push('/register');
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (inputs.email && inputs.password) {
            const flag = dispatch(login(inputs.email, inputs.password));
            if (flag) {
                history.push('/dashboard')
            }
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
                    <h1 class="h3 mb-3 fw-normal">Please sign in here!</h1>
                    <div class="form-floating">
                        <input type="email" name="email" value={inputs.email} onChange={onChange} class="form-control" id="floatingInput" placeholder="name@example.com" required />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div class="form-floating">
                        <input type="password" name="password" value={inputs.password} onChange={onChange} class="form-control" id="floatingPassword" placeholder="Password" required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                </form>
            </main>
            <p>New User? <a onClick={redirect} class="link-primary" style={{ "cursor": "pointer" }}>Register</a></p>
            {
                message &&
                <div className="message">
                    {message}
                </div>
            }
        </React.Fragment>
    )
};

export default LoginPage;
