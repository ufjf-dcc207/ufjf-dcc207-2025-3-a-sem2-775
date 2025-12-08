
import './App.css'
import { useState } from 'react';
import { CardProduto } from "./components/CardProduto";

interface ItemCarrinho {
  icone: string;
  nome: string;
  ingredientes: string[];
  preco: string;
  quantidade: number;
}

const produtos = [
  {
    icone: "🥐",
    nome: "Aurore Parisienne",
    ingredientes: ["Croissant tradicional ou de amêndoas"],
    preco: "R$ 8,99"
  },
  {
    icone: "🥖",
    nome: "Baguette Rêvée",
    ingredientes: ["Sanduíche de Baguete (por ex., presunto e queijo)"],
    preco: "R$ 12,00"
  },
  {
    icone: "☕",
    nome: "Souffle du Jour",
    ingredientes: ["Cappuccino ou Latte cremoso, com toque de canela."],
    preco: "R$ 8,50"
    
  },
    {
    icone: "🥤",
    nome: "Jardin secret",
    ingredientes: ["Chá gelado ou Limonada de frutas vermelhas."],
    preco: "R$ 8,90"
    
  }
];

function App() {
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);

  function adicionarAoCarrinho(produto: typeof produtos[0]) {
    const itemExistente = carrinho.find(item => item.nome === produto.nome);
    
    if (itemExistente) {
      setCarrinho(carrinho.map(item =>
        item.nome === produto.nome
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      ));
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  }

  return (
    <div className="app">
      {produtos.map((produto, index) => (
        <CardProduto
          key={index}
          icone={produto.icone}
          nome={produto.nome}
          ingredientes={produto.ingredientes}
          preco={produto.preco}
          onAdicionar={() => adicionarAoCarrinho(produto)}
        />
      ))}
    </div>
  );
}

export default App;
