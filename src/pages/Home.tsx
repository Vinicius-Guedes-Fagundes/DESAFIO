import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">

      <h1>Bem-vindo à Lojão dos Games 🎮</h1>

      <p>
        Encontre os melhores jogos pelos melhores preços e divirta-se!
      </p>

      <Link to="/produtos">
        <button>Ver Produtos</button>
      </Link>

    </section>
  );
}

export default Home;