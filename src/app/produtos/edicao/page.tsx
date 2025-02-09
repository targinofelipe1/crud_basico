'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Edicao() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (id) {
      const produtosSalvos = JSON.parse(localStorage.getItem('produtos') || '[]');
      const produto = produtosSalvos.find((p: any) => p.id === Number(id));
      if (produto) {
        setNome(produto.nome);
        setQuantidade(produto.quantidade);
      }
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const produtosSalvos = JSON.parse(localStorage.getItem('produtos') || '[]');
    const produtosAtualizados = produtosSalvos.map((p: any) =>
      p.id === Number(id) ? { ...p, nome, quantidade: quantidade } : p
    );
    localStorage.setItem('produtos', JSON.stringify(produtosAtualizados));
    router.push('/produtos');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Editar Produto</h1>
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
          Editar
        </button>
      </form>
    </div>
  );
}
