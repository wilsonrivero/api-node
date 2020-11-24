import { useEffect , useState } from 'react';
import {Link} from  'react-router-dom';

import api from '../services/api';
import Navbar from '../components/Navbar';

import '../styles/pages/ladingPage.css'



function Lading(){

    const [products , setProducts] = useState([])

    useEffect(() => {
        api.get('products').then(req => {
            setProducts(req.data)
        })
        
    }, [])
    return(
        <div className="lading-page">
            <Navbar />

            <main>
                <h2>Produtos</h2>
         
                    {products.map(products => {
                        return(
                            <section>   
                                <h5>{products.name}</h5>
                                <p>R$: {products.price}</p>
                                {products.retail? <p>Varejo</p> : <p>Atacado</p> }
                                <small>{products.create_at}</small>

                                <div className="functions">
                                    <Link to={`/products/${products.id}`} ><button >Editar</button></Link>
                                    <Link to={`/delete/${products.id}`} ><button className="delete">Deletar</button></Link>
                                </div>

                            </section>

                        )
                    })}
                    


            </main>
        </div>
        
        
    )
}

export default Lading;