import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-gray-800 shadow-md">
            <nav className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-white font-bold text-xl">
                        <Link to="/">Logo</Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex">
                        <ul className="flex items-center space-x-6">
                            <li>
                                <Link 
                                    to="/" 
                                    className="text-white hover:text-indigo-400 transition-colors duration-200"
                                >
                                    Catálogos
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/create-product" 
                                    className="text-white hover:text-indigo-400 transition-colors duration-200"
                                >
                                    Registrar producto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="outline-none mobile-menu-button"
                            aria-expanded={menuOpen}
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {menuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`${menuOpen ? "block" : "hidden"} md:hidden mt-4`}>
                    <ul className="space-y-4">
                        <li>
                            <Link
                                to="/"
                                className="block text-white hover:text-indigo-400 transition-colors duration-200"
                            >
                                Catálogos
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/create-product"
                                className="block text-white hover:text-indigo-400 transition-colors duration-200"
                            >
                                Registrar producto
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
