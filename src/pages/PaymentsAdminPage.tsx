import { useState } from 'react';
import { Download } from 'lucide-react';

type Payment = {
  id: string;
  residentId: string;
  amount: number;
  date: string;
  status: 'paid' | 'pending' | 'late';
};

const mockPayments: Payment[] = [
  {
    id: '1',
    residentId: '1',
    amount: 500,
    date: '2024-03-01',
    status: 'paid',
  },
  {
    id: '2',
    residentId: '2',
    amount: 500,
    date: '2024-12-05',
    status: 'pending',
  },
  {
    id: '3',
    residentId: '3',
    amount: 500,
    date: '2024-02-01',
    status: 'late',
  },
  {
    id: '4',
    residentId: '4',
    amount: 800,
    date: '2024-02-15',
    status: 'paid',
  },
];

const PaymentsAdminPage = () => {
  const [filter, setFilter] = useState<string>('');

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const isCurrentMonth = (date: string) => {
    const paymentDate = new Date(date);
    return (
      paymentDate.getMonth() === currentMonth &&
      paymentDate.getFullYear() === currentYear
    );
  };

  const paymentsThisMonth = mockPayments.filter((payment) =>
    isCurrentMonth(payment.date)
  );
  const paymentsPreviousMonths = mockPayments.filter(
    (payment) => !isCurrentMonth(payment.date)
  );

  const statusStyle = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium';
      case 'late':
        return 'bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium';
      default:
        return '';
    }
  };

  type Column<T> = {
    header: string;
    accessor: keyof T;
    render?: (value: T[keyof T]) => string | JSX.Element;
  };

  const columns: Column<Payment>[] = [
    { header: 'Résident ID', accessor: 'residentId' },
    {
      header: 'Montant',
      accessor: 'amount',
      render: (value) => `${value as number} MAD`,
    },
    {
      header: 'Date',
      accessor: 'date',
      render: (value) => new Date(value as string).toLocaleDateString(),
    },
    {
      header: 'Statut',
      accessor: 'status',
      render: (value) => (
        <span className={statusStyle(value as string)}>{value}</span>
      ),
    },
    {
      header: 'Actions',
      accessor: 'id',
      render: () => (
        <button
          className="text-blue-600 hover:text-blue-800 transition-all flex items-center gap-1"
          aria-label="Download payment details"
        >
          <Download size={20} />
          <span className="hidden md:inline">Télécharger</span>
        </button>
      ),
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Liste des Paiements</h1>


      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        <h2 className="text-lg font-semibold text-gray-800 bg-gray-100 px-6 py-3">
          Paiements du mois actuel
        </h2>
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-gray-200 text-gray-700 uppercase text-xs font-semibold">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className="px-6 py-3 border-b">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paymentsThisMonth.map((payment) => (
              <tr
                key={payment.id}
                className="hover:bg-gray-50 transition-colors"
              >
                {columns.map((col, idx) => (
                  <td key={idx} className="px-6 py-4 border-b">
                    {col.render
                      ? col.render(payment[col.accessor])
                      : payment[col.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="text-lg font-semibold text-gray-800 bg-gray-100 px-6 py-3 mt-4">
          Paiements des mois précédents
        </h2>
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-gray-200 text-gray-700 uppercase text-xs font-semibold">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className="px-6 py-3 border-b">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paymentsPreviousMonths.map((payment) => (
              <tr
                key={payment.id}
                className="hover:bg-gray-50 transition-colors"
              >
                {columns.map((col, idx) => (
                  <td key={idx} className="px-6 py-4 border-b">
                    {col.render
                      ? col.render(payment[col.accessor])
                      : payment[col.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentsAdminPage;
