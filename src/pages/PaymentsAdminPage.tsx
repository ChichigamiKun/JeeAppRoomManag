import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import Navbar from '../components/Navbar';

type Payment = {
  id: string;
  residentId: string;
  amount: number;
  date: string;
  status: 'payé' | 'en attente' | 'en retard';
};

const PaymentsAdminPage = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPayments = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/payments'); // Remplacez par votre URL réelle
        const data = await response.json();

        const validStatuses: Payment['status'][] = ['payé', 'en attente', 'en retard'];

        // Valider et mettre à jour les statuts
        const updatedPayments: Payment[] = data.map((payment: any) => ({
          ...payment,
          status: validStatuses.includes(payment.status)
            ? payment.status
            : 'en attente', // Valeur par défaut
        }));

        // Marquer les paiements des mois précédents comme "en retard"
        const finalPayments = updatedPayments.map((payment) => {
          const paymentDate = new Date(payment.date);
          const currentDate = new Date();
          const isPastMonth =
            paymentDate.getMonth() < currentDate.getMonth() ||
            paymentDate.getFullYear() < currentDate.getFullYear();

          if (isPastMonth && payment.status !== 'payé') {
            return { ...payment, status: 'en retard' };
          }
          return payment;
        });

        // setPayments(finalPayments);
      } catch (error) {
        console.error('Erreur lors du chargement des paiements :', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

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

  const paymentsThisMonth = payments.filter((payment) => isCurrentMonth(payment.date));
  const paymentsPreviousMonths = payments.filter((payment) => !isCurrentMonth(payment.date));

  const statusStyle = (status: Payment['status']) => {
    switch (status) {
      case 'payé':
        return 'bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium';
      case 'en attente':
        return 'bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium';
      case 'en retard':
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
    { header: 'ID Résident', accessor: 'residentId' },
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
        <span className={statusStyle(value as Payment['status'])}>{value}</span>
      ),
    },
    {
      header: 'Actions',
      accessor: 'id',
      render: () => (
        <button
          className="text-blue-600 hover:text-blue-800 transition-all flex items-center gap-1"
          aria-label="Télécharger les détails du paiement"
        >
          <Download size={20} />
          <span className="hidden md:inline">Télécharger</span>
        </button>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 mt-10">
          Gestion des Paiements
        </h1>

        {loading ? (
          <p className="text-gray-600">Chargement des paiements...</p>
        ) : (
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
        )}
      </div>
    </>
  );
};

export default PaymentsAdminPage;
