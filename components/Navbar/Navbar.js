import Link from 'next/link';

const Navbar = () => (
    <div>
        <nav className="navbar navbar-expand navbar dark bg-dark mb-4" id="navbar">
            <div className="container">
                <a className="navbar-brand" href="#">Nick Adams</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link href="/"><a className="nav-link">Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about"><a className="nav-link">About</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/portfolio"><a className="nav-link">Portfolio</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <style jsx>{`
        #navbar {
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1;
            
        }
        a {
            color: #006400;
        }
        `}</style>
    </div>
);

export default Navbar;