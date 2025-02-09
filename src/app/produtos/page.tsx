'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

type Produto = {
  id: number;
  nome: string;
  preco: string;
};

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const carregarProdutos = () => {
    const produtosSalvos = JSON.parse(localStorage.getItem('produtos') || '[]');
    setProdutos(produtosSalvos);
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  const removerProduto = (id: number) => {
    const produtosAtualizados = produtos.filter((produto) => produto.id !== id);
    setProdutos(produtosAtualizados);
    localStorage.setItem('produtos', JSON.stringify(produtosAtualizados));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Produtos</h1>
      <Link href="/produtos/cadastro">
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
          Adicionar Produto
        </button>
      </Link>
      <table className="w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Nome</th>
            <th className="border border-gray-300 px-4 py-2">Preço</th>
            <th className="border border-gray-300 px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td className="border border-gray-300 px-4 py-2">{produto.nome}</td>
              <td className="border border-gray-300 px-4 py-2">{produto.preco}</td>
              <td className="border border-gray-300 px-4 py-2">
                <Link href={`/produtos/edicao?id=${produto.id}`}>
                  <button className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-700">
                    Editar
                  </button>
                </Link>
                <button
                  onClick={() => removerProduto(produto.id)}
                  className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700"
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
