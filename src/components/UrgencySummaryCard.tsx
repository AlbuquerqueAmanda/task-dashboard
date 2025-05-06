type Props = {
    title: string;
    count: number;
    color: string;
  };
  
  export default function UrgencySummaryCard({ title, count, color }: Props) {
    return (
      <div className="bg-white shadow rounded-lg p-4 border-l-4" style={{ borderColor: color }}>
        <h3 className="text-sm font-semibold text-gray-700 mb-1">{title}</h3>
        <p className="text-2xl font-bold" style={{ color }}>{count}</p>
        <p className="text-xs text-gray-500">tasks</p>
      </div>
    );
  }
  