import { useParams } from 'react-router-dom';

const Cities = props => {
    const { city } = useParams();

    return (
        <div>
            { city }
        </div>
    )
}

export default Cities;