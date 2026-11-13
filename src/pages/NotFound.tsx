import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="pagina">

      <h1>404 - Página não encontrada</h1>

      <p>
        A página que você está procurando não existe.
      </p>

      <Link to="/">
        <button>Voltar para o início</button>
      </Link>

    </section>
  );
}

export default NotFound;