import Button from "./Button";

interface CardProps {
  titulo: string;
  imagem: string;
  descricao: string;
  preco: string;
}

function Card({
  titulo,
  imagem,
  descricao,
  preco
}: CardProps) {
  return (
    <div className="card">

      <img
        src={imagem}
        alt={titulo}
      />

      <h2>{titulo}</h2>

      <p>{descricao}</p>

      <h3>{preco}</h3>

      <Button texto="Comprar" />

    </div>
  );
}

export default Card;