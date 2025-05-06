'use client';

import { useState, useEffect } from 'react';
import { Task } from '@/types/Task';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: Task) => void;
  task?: Task | null;
};

export default function TaskModal({ isOpen, onClose, onSave, task }: Props) {
  const [formData, setFormData] = useState<Task>({
    id: '',
    title: '',
    description: '',
    date: '',
    urgency: 'pouco urgente',
    status: 'pendente',
  });

  useEffect(() => {
    if (task) setFormData(task);
    else
      setFormData({
        id: crypto.randomUUID(),
        title: '',
        description: '',
        date: '',
        urgency: 'pouco urgente',
        status: 'pendente',
      });
  }, [task, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">{task ? 'Editar Task' : 'Nova Task'}</h2>

        <input
          type="text"
          placeholder="Título"
          className="w-full border p-2 mb-2 rounded"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />

        <input
          type="date"
          className="w-full border p-2 mb-2 rounded"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />

        <textarea
          placeholder="Descrição"
          className="w-full border p-2 mb-2 rounded"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        <select
          className="w-full border p-2 mb-2 rounded"
          value={formData.urgency}
          onChange={(e) =>
          setFormData({ ...formData, urgency: e.target.value as Task['urgency'] })
        }
        >
        <option value="muito urgente">Muito Urgente</option>
        <option value="urgente">Urgente</option>
        <option value="pouco urgente">Pouco Urgente</option>
        </select>

        <select
          className="w-full border p-2 mb-4 rounded"
          value={formData.status}
          onChange={(e) =>
          setFormData({ ...formData, status: e.target.value as Task['status'] })
        }
       >
       <option value="pendente">Pendente</option>
       <option value="em andamento">Em Andamento</option>
       <option value="expirado">Expirado</option>
       <option value="concluído">Concluído</option>
       </select>

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="text-gray-600 hover:underline">
            Cancelar
          </button>
          <button
            onClick={() => {
              onSave(formData);
              onClose();
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
