'use client';

import { useParams } from 'next/navigation';
import { useTasks } from '@/context/TaskContext';
import TaskCard from '@/components/TaskCard';

export default function DayTasksPage() {
  const { date } = useParams();
  const { tasks, deleteTask } = useTasks();
  const dayTasks = tasks.filter((t) => t.date === date);

  return (
    <main className="p-6 flex-1 overflow-auto">
      <h2 className="text-2xl font-bold mb-4">Tarefas do dia {date}</h2>

      {dayTasks.length === 0 ? (
        <p className="text-gray-500">Nenhuma tarefa agendada.</p>
      ) : (
        dayTasks.map((task) => (
          <TaskCard key={task.id} {...task} onEdit={() => {}} onDelete={deleteTask} />
        ))
      )}
    </main>
  );
}
