'use client';

import Link from 'next/link';
import { Home, LayoutDashboard, Calendar } from "lucide-react";
import { usePathname } from 'next/navigation';

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Início', icon: <Home size={20} className="text-gray-700" /> },
    { href: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} className="text-gray-700" /> },
    { href: '/calendar', label: 'Calendário', icon: <Calendar size={20} className="text-gray-700" /> },
  ];

  return (
    <aside
      className={`fixed md:static z-40 top-0 left-0 h-full w-64 bg-zinc-100 shadow-md transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}
    >
      <div className="p-4 hidden md:block">
        <h2 className="text-xl font-bold">Task Dashboard</h2>
      </div>

      <nav className="flex flex-col p-4 gap-2">
        <button className="md:hidden mb-4 text-right text-xl" onClick={onClose}>
          ✕
        </button>

        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className={`flex items-center gap-3 p-2 rounded-md transition ${
              pathname === item.href
                ? 'bg-gray-200 shadow-inner font-semibold'
                : 'hover:bg-gray-100 hover:shadow-sm'
            }`}
          >
            {item.icon}
            <span className="text-gray-800">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
