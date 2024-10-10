import { NavLink } from "react-router-dom"
import Logo from "./logo"
function Header() {
    return (<header className="p-3 text-bg-dark">
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
                </a>

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

                    <li><NavLink to="/" className="nav-link px-2 text-white"><Logo /></NavLink></li>
                    <li><NavLink to="/Workouts" className="nav-link px-2 text-white">Workouts</NavLink></li>
                    <li><NavLink to="/Nutrition" className="nav-link px-2 text-white">Nutrition</NavLink></li>
                    <li><NavLink to="/Shop" className="nav-link px-2 text-white">Shop</NavLink></li>
                    <li><NavLink to="/About" className="nav-link px-2 text-white">About</NavLink></li>
                </ul>

                <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                    <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
                </form>

                <div className="text-end">
                    <NavLink to="/Login">
                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                    </NavLink>
                    <NavLink to="/Sign-up">
                        <button type="button" className="btn btn-warning">Sign-up</button>
                    </NavLink>
                </div>
            </div>
        </div>
    </header>)
}

export default Header