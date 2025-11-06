
import './App.css'
import { CardProduto } from "./components/CardProduto";

// Dados dos produtos (poderia vir de uma API ou banco de dados)
const produtos = [
  {
    icone: "🥐",
    nome: "Aurore Parisienne",
    ingredientes: ["Farinha de trigo", "Água", "Fermento", "Sal"],
    preco: "R$ 8,00"
  },
  {
    icone: "☕",
    nome: "Café Expresso",
    ingredientes: ["Café arábica", "Água filtrada"],
    preco: "R$ 5,00"
  },
  {
    icone: "🥖",
    nome: "Baguette",
    ingredientes: ["Farinha de trigo", "Fermento", "Sal", "Água"],
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
