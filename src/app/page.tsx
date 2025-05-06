import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="p-6 flex-1 overflow-auto">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo ao Task Dashboard</h1>
      <p className="text-gray-700 mb-6">
        Este projeto ajuda você a organizar suas tarefas semanais e visualizar tudo facilmente
        pelo calendário. Veja abaixo como ele funciona:
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">📋 Dashboard</h2>
        <p className="text-gray-600 mb-2">
          O Dashboard mostra cards com suas tarefas da semana. Cada card exibe:
        </p>
        <ul className="list-disc pl-5 text-gray-600 mb-4">
          <li>Título da tarefa</li>
          <li>Data</li>
          <li>Descrição</li>
          <li>Nível de urgência (muito urgente, urgente, pouco urgente)</li>
          <li>Status (pendente, em andamento, expirado, concluído)</li>
        </ul>
        <Link
          href="/dashboard"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Ver Dashboard
        </Link>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">📅 Calendário</h2>
        <p className="text-gray-600 mb-2">
          No calendário, ao clicar em um dia, você pode adicionar, editar ou remover uma tarefa.
          Cada dia com tarefa mostra uma miniatura do card com o nome da tarefa.
        </p>
        <Link
          href="/calendar"
          className="inline-block mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Ver Calendário
        </Link>
      </section>
    </main>
  );
}
