import Card from "../components/Card";

interface Produto {
  id: number;
  titulo: string;
  imagem: string;
  descricao: string;
  preco: string;
}

function Produtos() {

  const produtos: Produto[] = [
    {
      id: 1,
      titulo: "EA Sports FC 26",
      imagem: "https://picsum.photos/400/250?random=1",
      descricao: "Jogo de futebol com partidas emocionantes.",
      preco: "R$ 299,90"
    },
    {
      id: 2,
      titulo: "Grand Theft Auto V",
      imagem: "https://picsum.photos/400/250?random=2",
      descricao: "Jogo de ação em um grande mundo aberto.",
      preco: "R$ 149,90"
    },
    {
      id: 3,
      titulo: "Minecraft",
      imagem: "https://picsum.photos/400/250?random=3",
      descricao: "Construa e explore mundos incríveis.",
      preco: "R$ 99,90"
    },
    {
      id: 4,
      titulo: "Fortnite",
      imagem: "https://picsum.photos/400/250?random=4",
      descricao: "Jogo online de ação e sobrevivência.",
      preco: "R$ 89,90"
    },
    {
      id: 5,
      titulo: "The Last of Us",
      imagem: "https://picsum.photos/400/250?random=5",
      descricao: "Uma emocionante aventura de sobrevivência.",
      preco: "R$ 199,90"
    },
    {
      id: 6,
      titulo: "God of War",
      imagem: "https://picsum.photos/400/250?random=6",
      descricao: "Uma grande aventura inspirada na mitologia.",
      preco: "R$ 249,90"
    }
  ];

  return (
    <section className="produtos">

      <h1>Nossos Jogos</h1>

      <div className="lista-produtos">

        {produtos.map((produto) => (
          <Card
            key={produto.id}
            titulo={produto.titulo}
            imagem={produto.imagem}
            descricao={produto.descricao}
            preco={produto.preco}
          />
        ))}

      </div>

    </section>
  );
}

export default Produtos;