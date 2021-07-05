import { useState } from 'react';
import { Spinner } from 'react-bootstrap';

import "./PageNotFound.css";

const PageNotFound = () => {
    const [load, setLoad] = useState(true);

    setTimeout(function(){
        setLoad(false);
    }, 1500)

    return (
        <div className="page-not-found">
            {load ? 
            <Spinner animation="border" variant="primary"/>
            :
            <>
            <h1>Ha ocurrido un error</h1>
            <p>Página no encontrada. Mejor regresa al inicio.</p>
            </>
            }
        </div>
    )
}

export default PageNotFound;