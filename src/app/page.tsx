import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Bem vindos a Minha Lista de Compras</h1>
      <Link href="/produtos">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Ver Produtos
        </button>
      </Link>
    </div>
  );
}
