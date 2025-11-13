import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h2>Página não encontrada</h2>
            <Link to={-1}>Voltar</Link>
        </div>
    );
}

export default NotFound;