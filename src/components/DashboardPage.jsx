import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function DashboardPage() {
    useEffect(() => {
        return () => {
            localStorage.removeItem('user');
        }
    }, []);

    return (
        <div>
            <div className="navigation">
                <nav style={{ "backgroundColor": "#0d8196" }} class="navbar navbar-expand shadow p-3 mb-5 navbar-dark" >
                    <div class="container">
                        <Link class="navbar-brand mb-0 h1" to="/">
                            Dashboard
                        </Link>
                        <div>
                            <ul class="navbar-nav ml-auto">
                                <li
                                    class="nav-item"
                                >
                                    <Link class="nav-link" to="/login">
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="bg-light container-fluid py-5">
                <h1 class="display-5">Welcome</h1>
                <h6 class="p-3 col-md-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..
                </h6>
            </div>
        </div>
    )
}

export default DashboardPage;
