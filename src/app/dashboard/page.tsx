'use client';

import TaskCard from '@/components/TaskCard';
import TaskModal from '@/components/TaskModal';
import { useTasks } from '@/context/TaskContext';
import { Task } from '@/types/Task';
import { useState } from 'react';

export default function DashboardPage() {
  const { tasks, addOrUpdateTask, deleteTask } = useTasks();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  return (
    <main className="p-6 flex-1 overflow-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Tasks da Semana</h2>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={() => {
            setEditingTask(null);
            setModalOpen(true);
          }}
        >
          Nova Task
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          {...task}
          onEdit={(t) => {
            setEditingTask(t);
            setModalOpen(true);
          }}
          onDelete={deleteTask}
        />
      ))}
      </div>

      <TaskModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={addOrUpdateTask}
        task={editingTask}
      />
    </main>
  );
}
