import "../carrinho.css";

interface ItemCarrinhoProps {
  icone: string;
  nome: string;
  ingredientes: string[];
  preco: string;
  quantidade: number;
}

type CarrinhoProps = {
  itens: ItemCarrinhoProps[];
  onRemove: (nome: string) => void;
  onIncrease: (nome: string) => void;
  onDecrease: (nome: string) => void;
};

function parsePreco(preco: string) {
  // transforma "R$ 8,99" em número 8.99
  const apenasNumero = preco.replace(/[^0-9,\.]/g, "").replace(",", ".");
  const n = parseFloat(apenasNumero);
  return isNaN(n) ? 0 : n;
}

export function Carrinho({ itens, onRemove, onIncrease, onDecrease }: CarrinhoProps) {
  const total = itens.reduce((acc, it) => acc + parsePreco(it.preco) * it.quantidade, 0);

  return (
    <aside className="carrinho">
      <h3>Carrinho</h3>
      {itens.length === 0 ? (
        <div>Está vazio</div>
      ) : (
        <ul>
          {itens.map(item => (
            <li key={item.nome} className="carrinho-item">
              <span className="carrinho-icone">{item.icone}</span>
              <span className="carrinho-nome">{item.nome}</span>
              <span className="carrinho-quantidade">{item.quantidade}</span>
              <div className="carrinho-acoes">
                <button onClick={() => onIncrease(item.nome)}>+</button>
                <button onClick={() => onDecrease(item.nome)}>-</button>
                <button onClick={() => onRemove(item.nome)}>Remover</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="carrinho-total">Total: R$ {total.toFixed(2).replace('.', ',')}</div>
    </aside>
  );
}
