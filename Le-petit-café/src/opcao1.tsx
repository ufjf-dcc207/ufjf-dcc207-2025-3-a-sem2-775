import "./opcao1.css";

interface opcao1Props {
  icone?: string;
  nome?: string;
  ingredientes?: string[];
  preco?: string;
}

export default function Opcao1({
   icone="🍞",
   nome = "Aurore Parisienne",
   ingredientes = ["Farinha de trigo", "Água", "Fermento", "Sal"],
   preco = "R$ 5,00",
  }: opcao1Props) {
  return (
   <div className="opcao1">
      <div>{icone}</div>
      <div>{nome}</div>
      <div>{ingredientes.join(", ")}</div>
      <div>{preco}</div>
      </div>

  );
}