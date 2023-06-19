import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const subtitle = '<Acelere sua entrada na área tech/>'

    const handleClick = () => {
        // Redirecionar para uma nova rota
        navigate('/faq');

        // Navegar para a página anterior
        // navigate(-1)
    }
    return (
        <div>
            <h1>Rota Home</h1>

            <div className="home-card">
                <h2>{subtitle}</h2>
                <span>No DEVinHouse você vira desenvolvedor(a) full stack em 9
                    meses e tem a <b>possibilidade de ser contratado para ocupar
                        uma das vagas de DEVJr</b> disponibilizadas pelas houses parceiras.</span>

                <button onClick={handleClick}>Quero saber mais</button>
            </div>
        </div>
    )
}





