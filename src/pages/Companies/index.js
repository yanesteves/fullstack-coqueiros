import { useParams } from 'react-router-dom';

export default function Companies() {
    const { empresa } = useParams();
    const empresaToShow = ` (${empresa})`

    return (
        <div>
            <h1>
                Rota Empresas 
                {empresa && empresaToShow}
            </h1>            
        </div>
    )
}