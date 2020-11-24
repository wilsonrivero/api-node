import { GiMedicines } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <header>
            <h1><Link to="/">Medicine <GiMedicines size={50} color="rgb(255,255,255)"/> </Link></h1>
            <nav>
                <Link to="/register">Cadastrar</Link>
            </nav>
        </header>
    )
}

export default Navbar;