import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top"
        >
            <div className="container">

                {/* Left: Logo */}
                <Link className="navbar-brand fw-bold" to="/">
                    MyShop
                </Link>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Center Menu + Right Icon */}
                <div
                    className="collapse navbar-collapse justify-content-between"
                    id="navbarNav"
                >

                    {/* Center Menu */}
                    <ul className="navbar-nav mx-auto text-center gap-3">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <Link className="nav-link" to="/add-product">
                            Add Product
                        </Link>
                    </ul>

                    {/* Right: WhatsApp Icon */}
                    <div className="d-flex align-items-center">
                        <a
                            href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noreferrer"
                            className="text-success fs-4"
                            title="Chat on WhatsApp"
                        >
                            <i className="bi bi-whatsapp"></i>
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;