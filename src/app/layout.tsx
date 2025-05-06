import './globals.css';
import { ReactNode } from 'react';
import ClientLayout from './ClientLayout';

export const metadata = {
  title: 'Task Dashboard',
  description: 'Gerencie suas tarefas com um dashboard e calendário simples.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-800">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
