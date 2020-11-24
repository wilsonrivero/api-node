import { Route,  BrowserRouter, Switch  } from 'react-router-dom';

import LadingPage from './pages/ladingPage';
import RegisterPage from './pages/registerPage';
import UpPage from './pages/updatePage';
import DeletePage from './pages/deletePage';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LadingPage}/>
                <Route path="/register" component={RegisterPage}/>
                <Route path="/products/:id" component={UpPage}/>
                <Route path="/delete/:id" component={DeletePage}/>
            </Switch>
        </BrowserRouter>

    )

}


export default Routes;