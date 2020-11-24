
import { useRef } from 'react';
import { Form } from '@unform/web';
import { useHistory, useParams  } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Input from '../components/forms/input';
import api from '../services/api';


import '../styles/pages/updatePage.css'

function Update(){
    const history = useHistory()
    const formRef = useRef(null)

    const {id} = useParams()

    function handleSubmit(data ){
        console.log(data)
        if(data.name ===  ""){
            formRef.current.setFieldError('name', 'Nome obrigátorio')
        }else if(data.price ===  ""){
            formRef.current.setFieldError('price', 'Preço obrigátorio')
        }else if(data.retail ===  ""){
            formRef.current.setFieldError('retail', 'Varejo obrigátorio')
        }else {
            const name = data.name

            const change = data.price
            const convrtNUmber = change.replace(',', '.')
            const price = Number(convrtNUmber)

            const retail = data.retail === 'sim' ?  data.retail = true :  data.retail = false


            api.put(`products/${id}`, {name, price, retail})

            alert('Edição realizado com sucesso')
            
            history.push('/')

        }
    }


    return (
        <div className="update-page">
            <Navbar/>

            <main>
                <h1>Editar</h1>
                <Form  ref={formRef} onSubmit={handleSubmit}> 
                    <div className="form"> 
                        <label htmlFor="name">Nome:</label>
                        <Input type="text" name="name"/>
                    </div>
                    
                    <div className="form"> 
                        <label htmlFor="price">Preço:</label>
                        <Input type="text" name="price"/>
                    </div>

                    <div className="form"> 
                        <label htmlFor="retail">Varejo:</label>
                        <Input type="text" name="retail"/>
                    </div>
                    
                    <button type="submit">Enviar</button>
                </Form>    
            </main>
        </div>
        
    )
}

export default Update;