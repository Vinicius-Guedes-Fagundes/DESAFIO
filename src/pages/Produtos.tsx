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
      titulo: "NBA 2K27",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFkaK_jRNmQ_w2EdgqwDx77Rkh6Dj_t9mQrAEJVOUlg&s=10",
      descricao: "Viva a experiência mais autêntica da NBA e da WNBA na nova geração.",
      preco: "R$ 329,90"
    },
    {
      id: 2,
      titulo: "Grand Theft Auto V",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzcN9WBGBjs-lVYkJImnjoFvA5Bs4Om1OyXxZyK9Pj7UI_KMOwTw-VSQsd&s=10",
      descricao: "Jogo de ação em um grande mundo aberto.",
      preco: "R$ 69,90"
    },
    {
      id: 3,
      titulo: "Resident Evil 4 Remake",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7pS7lJ8DqHENcJ3YV4PQa6-_ogl9PtIm0qJ2bJYYtwg&s=10",
      descricao: "Resident Evil 4 Remake reimagina o clássico de terror com gráficos modernos.",
      preco: "R$ 189,90"
    },
    {
      id: 5,
      titulo: "The Last of Us II",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb_LxGNsTRZG6LFMbxRe9j0NVkVzx6XCVtVbTpED_mYw&s=10",
      descricao: "Uma emocionante aventura de sobrevivência.",
      preco: "R$ 199,90"
    },
    {
      id: 6,
      titulo: "God of War Ragnarok",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8v1j5v9_mvzI6BBkHUV7SvpiJd6OyTV8_Fmq3PYwuuQ&s=10",
      descricao: "Uma grande aventura inspirada na mitologia.",
      preco: "R$ 219,90"
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