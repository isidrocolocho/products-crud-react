const Footer = () => {
    return (
        <footer className="bg-gray-800 border-t border-gray-700">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                    {/* Copyright */}
                    <p className="text-sm text-gray-400 text-center md:text-left">
                        © 2019-2021 All Rights Reserved.
                    </p>

                    {/* Links */}
                    <ul className="flex space-x-6 text-sm text-gray-400">
                        <li>
                            <a
                                href="#terms"
                                className="hover:text-white transition-colors duration-200"
                            >
                                Terms of Service
                            </a>
                        </li>
                        <li>
                            <a
                                href="#privacy"
                                className="hover:text-white transition-colors duration-200"
                            >
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
