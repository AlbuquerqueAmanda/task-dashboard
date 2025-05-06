'use client';

import { useState } from 'react';
import { Task } from '@/types/Task';

type Props = Task & {
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
};

const urgencyColor = {
  'muito urgente': 'border-red-500',
  'urgente': 'border-yellow-400',
  'pouco urgente': 'border-green-500',
};

const statusStyle = {
  'pendente': 'bg-yellow-200 text-yellow-800',
  'em andamento': 'bg-blue-200 text-blue-800',
  'expirado': 'bg-red-200 text-red-800',
  'concluído': 'bg-green-200 text-green-800',
};

export default function TaskCard({ id, title, date, description, urgency, status, onEdit, onDelete }: Props) {
  const [showActions, setShowActions] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <div
      className={`relative border-l-4 p-4 mb-4 ${urgencyColor[urgency]} bg-white rounded shadow w-full max-w-sm`}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => {
        setShowActions(false);
        setConfirmDelete(false);
      }}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{date}</p>
      <p className="mt-2">{description}</p>
      <p className="text-xs mt-2 italic text-gray-500">Urgência: {urgency}</p>
      <span className={`inline-block px-3 py-1 mt-2 text-xs font-semibold rounded-full ${statusStyle[status]}`}>
        {status}
      </span>

      {showActions && (
        <div className="absolute top-2 right-2 flex gap-2">
          <button
            className="text-blue-600 hover:underline text-sm"
            onClick={() => onEdit({ id, title, date, description, urgency, status })}
          >
            Editar
          </button>
          {!confirmDelete ? (
            <button
              className="text-red-600 hover:underline text-sm"
              onClick={() => setConfirmDelete(true)}
            >
              Deletar
            </button>
          ) : (
            <div className="bg-gray-100 p-2 rounded shadow">
              <p className="text-xs">Confirmar deleção?</p>
              <div className="flex gap-2 mt-1">
                <button
                  className="text-red-600 text-xs"
                  onClick={() => onDelete(id)}
                >
                  Deletar
                </button>
                <button
                  className="text-gray-600 text-xs"
                  onClick={() => setConfirmDelete(false)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
