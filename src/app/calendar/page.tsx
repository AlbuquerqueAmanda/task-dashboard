'use client';

import { useTasks } from '@/context/TaskContext';
import CalendarGrid from '@/components/CalendarGrid';

export default function CalendarPage() {
  const { tasks } = useTasks();

  return (
    <main className="p-6 flex-1 overflow-auto">
      <h2 className="text-2xl font-bold mb-4">Calendário de Tarefas</h2>
      <CalendarGrid tasks={tasks} />
    </main>
  );
}
