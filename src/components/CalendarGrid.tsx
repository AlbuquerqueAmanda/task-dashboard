'use client';

import { useState } from 'react';
import { Task } from '@/types/Task';
import { useRouter } from 'next/navigation';
import UrgencySummaryCard from './UrgencySummaryCard';

interface CalendarGridProps {
  tasks: Task[];
}

const monthNames = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

export default function CalendarGrid({ tasks }: CalendarGridProps) {
  const router = useRouter();
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const getDaysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();

  const getFirstDayOfMonth = (year: number, month: number) =>
    new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const renderDays = () => {
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} />);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const dateStr = date.toISOString().split('T')[0];
      const dayTasks = tasks.filter((t) => t.date === dateStr);

      days.push(
        <div
          key={i}
          onClick={() => router.push(`/calendar/${dateStr}`)}
          className="border rounded cursor-pointer hover:bg-gray-50 flex flex-col p-1 transition-all w-full h-full bg-white shadow-sm"
        >
          <div className="text-xs font-semibold mb-1">{i}</div>
          {dayTasks.slice(0, 2).map((task) => (
            <div
              key={task.id}
              className="bg-blue-100 text-blue-800 text-xs px-1 py-0.5 rounded mb-1 truncate"
              title={task.title}
            >
              {task.title}
            </div>
          ))}
          {dayTasks.length > 2 && (
            <span className="text-[10px] text-gray-500">+{dayTasks.length - 2} mais</span>
          )}
        </div>
      );
    }

    return days;
  };

  const urgencyCounts = {
    'muito urgente': tasks.filter((t) => t.urgency === 'muito urgente').length,
    'urgente': tasks.filter((t) => t.urgency === 'urgente').length,
    'pouco urgente': tasks.filter((t) => t.urgency === 'pouco urgente').length,
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Cabeçalho com navegação de mês */}
      <h2 className="text-xl font-bold mb-2">
  {monthNames[currentMonth]} {currentYear}
</h2>

{/* Calendário com fundo e borda */}
<div className="bg-orange-100 rounded-lg shadow p-4">
  {/* Dias da semana */}
  <div className="grid grid-cols-7 gap-2 mb-2">
    {weekDays.map((day) => (
      <div
        key={day}
        className="text-center font-semibold text-sm text-gray-700 border-b pb-1"
      >
        {day}
      </div>
    ))}
  </div>

  {/* Dias do mês */}
  <div className="grid grid-cols-5 gap-2 auto-rows-[100px] md:auto-rows-[120px] lg:auto-rows-[140px] mb-4">
    {renderDays()}
  </div>

  {/* Botões de navegação abaixo do calendário, alinhados à direita */}
  <div className="flex justify-end gap-2">
    <button
      onClick={handlePrevMonth}
      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
    >
      ← Anterior
    </button>
    <button
      onClick={handleNextMonth}
      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
    >
      Próximo →
    </button>
  </div>
  </div>

        {/* Cards de urgência */}
        <div className="flex flex-col gap-4">
          <UrgencySummaryCard title="Muito Urgente" count={urgencyCounts['muito urgente']} color="#EF4444" />
          <UrgencySummaryCard title="Urgente" count={urgencyCounts['urgente']} color="#FACC15" />
          <UrgencySummaryCard title="Pouco Urgente" count={urgencyCounts['pouco urgente']} color="#10B981" />
        </div>
      </div>
  );
}
