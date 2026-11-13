import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">

      <h1>Bem-vindo à Game Store 🎮</h1>

      <p>
        Encontre os melhores jogos para se divertir.
      </p>

      <Link to="/produtos">
        <button>Ver Produtos</button>
      </Link>

    </section>
  );
}

export default Home;