export default function PaymentsAdminPage() {
  // Mock payments data
  const payments = [
    { id: 1, resident: 'Alice', room: '101', amount: 500, date: '2024-12-01', method: 'Credit Card' },
    { id: 2, resident: 'Bob', room: '102', amount: 300, date: '2024-12-05', method: 'Cash' },
    { id: 3, resident: 'Charlie', room: '103', amount: 450, date: '2024-12-10', method: 'Bank Transfer' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Payments</h1>

      {/* Payment List */}
      <div className="mb-8">
        <table className="min-w-full table-auto border-separate border-spacing-2">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-sm font-medium text-gray-600">ID</th>
              <th className="px-4 py-2 text-sm font-medium text-gray-600">Resident</th>
              <th className="px-4 py-2 text-sm font-medium text-gray-600">Chambre</th>
              <th className="px-4 py-2 text-sm font-medium text-gray-600">Montant</th>
              <th className="px-4 py-2 text-sm font-medium text-gray-600">Date</th>
              <th className="px-4 py-2 text-sm font-medium text-gray-600">Méthode</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="bg-white hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-800">{payment.id}</td>
                <td className="px-4 py-2 text-sm text-gray-800">{payment.resident}</td>
                <td className="px-4 py-2 text-sm text-gray-800">{payment.room}</td>
                <td className="px-4 py-2 text-sm text-gray-800">${payment.amount}</td>
                <td className="px-4 py-2 text-sm text-gray-800">{payment.date}</td>
                <td className="px-4 py-2 text-sm text-gray-800">{payment.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Payment Form (optional) */}
      {/* You can leave this section out if you don't want to add payments manually */}
      {/* Add any logic to handle form submission if needed */}
    </div>
  );
}
