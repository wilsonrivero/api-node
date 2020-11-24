import {useParams, useHistory} from 'react-router-dom';

import api from "../services/api";


function Delete(){
    const history = useHistory()
    const {id} = useParams()
    api.delete(`products/${id}`).then(() =>{
        alert('Cadastro deletado com sucesso')
        history.push('/')
    })
}

export default Delete;