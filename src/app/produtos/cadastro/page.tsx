'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    const novoProduto = { id: Date.now(), nome, quantidade };
    const produtosSalvos = JSON.parse(localStorage.getItem('produtos') || '[]');
    produtosSalvos.push(novoProduto);
    localStorage.setItem('produtos', JSON.stringify(produtosSalvos));


    router.push('/produtos');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastrar Produto</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Quantidade</label>
          <input
            type="text"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
