'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { TaskProvider } from '@/context/TaskContext';
import { usePathname } from 'next/navigation';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <TaskProvider>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Conteúdo */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          <header className="p-4 shadow-md flex justify-between items-center bg-white md:hidden">
            <h1 className="font-bold text-lg">Task Dashboard</h1>
            <button onClick={() => setSidebarOpen(true)} className="p-2">
              ☰
            </button>
          </header>
          <main className="p-4">{children}</main>
        </div>
      </div>
    </TaskProvider>
  );
}
