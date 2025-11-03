// import '../components/Footer.css';


const Footer = () => {
    return (
        <footer>
            <div className='top'>
                <ul>
                    <li><a href=''>About</a></li>
                    <li><a href=''>Shop</a></li>
                    <li><a href=''>Locate Us</a></li>
                </ul>
            </div>
            <div className='bottom'>
                <p>&copy; {new Date().getFullYear()}All Rights Reserved</p>
            </div>
            
        </footer>
    );
}

export default Footer;
