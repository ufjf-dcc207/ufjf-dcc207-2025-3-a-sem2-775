
import './App.css'
import { CardProduto } from "./components/CardProduto";

const produtos = [
  {
    icone: "🥐",
    nome: "Aurore Parisienne",
    ingredientes: ["Croissant tradicional ou de amêndoas"],
    preco: "R$ 8,00"
  },
  {
    icone: "🥖",
    nome: "Baguette Rêvée",
    ingredientes: ["Sanduíche de Baguete (por ex., presunto e queijo)"],
    preco: "R$ 12,00"
  },
  {
    icone: "☕️",
    nome: "Souffle du Jour",
    ingredientes: ["Cappuccino ou Latte cremoso, com toque de canela."],
    preco: "R$ 6,50"
    
  },
    {
    icone: "🥤",
    nome: "Jardin secret",
    ingredientes: ["Chá gelado ou Limonada de frutas vermelhas."],
    preco: "R$ 6,50"
    
  }
];

function App() {
  return (
    <div className="app">
      {produtos.map((produto, index) => (
        <CardProduto
          key={index}
          icone={produto.icone}
          nome={produto.nome}
          ingredientes={produto.ingredientes}
          preco={produto.preco}
        />
      ))}
    </div>
  );
}

export default App;
