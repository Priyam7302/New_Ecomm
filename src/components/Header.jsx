// import '../components/Header.css';

const Header = () => {
    return (
        <header>
            <h1><a href="/">Ecommerce</a></h1>
            <nav>
                <ul>
                    <li><a href="/cart">Cart</a></li>
                    <li><a href="/wishlist">Wishlist</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
