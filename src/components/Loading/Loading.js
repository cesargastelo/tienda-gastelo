import { Spinner } from 'react-bootstrap';

const Loading = () => {

    return (
        <div>
            <Spinner animation="border" variant="primary" />
            <h4>Loading...</h4>
        </div>
    )
}

export default Loading;