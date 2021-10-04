
import { Link } from 'react-router-dom';
import logo from '../../image/logo.svg';
import './Header.css'


const Header = () => {

    return (
        <div>
            <>


                <div className="header">

                    <nav className='d-flex'>
                        <img className="logo" src={logo} alt="" />
                        <h4 className='nav-logo'> mastery</h4>
                        <Link to="/home" className=' nav'>Home</Link>
                        <Link to="/about" className=' nav'>About</Link>
                        <Link to="/course" className=' nav'>Services</Link>
                        <Link to="/info" className=' nav'>More Info</Link>

                    </nav>
                </div>

            </>
        </div>
    );
};

export default Header;