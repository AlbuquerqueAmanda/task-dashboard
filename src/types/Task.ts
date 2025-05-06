export type Urgency = 'muito urgente' | 'urgente' | 'pouco urgente';
export type Status = 'pendente' | 'em andamento' | 'expirado' | 'concluído';

export type Task = {
  id: string;
  title: string;
  description: string;
  date: string;
  urgency: Urgency;
  status: Status;
};

