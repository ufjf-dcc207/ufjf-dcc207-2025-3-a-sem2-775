import "../card.css";

interface CardProdutoProps {
  icone?: string;
  nome?: string;
  ingredientes?: string[];
  preco?: string;
}

export function CardProduto({
   icone,
   nome = "Produto",
   ingredientes = [],
   preco = "R$ 0,00",
}: CardProdutoProps) {
  return (
    <div className="card-produto">
      <div>{icone}</div>
      <div>{nome}</div>
      <div>{ingredientes.join(", ")}</div>
      <div>{preco}</div>
    </div>
  );
}