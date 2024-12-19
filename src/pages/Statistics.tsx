import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from 'recharts';

const occupancyData = [
  { month: 'Jan', rate: 85 },
  { month: 'Fév', rate: 88 },
  { month: 'Mar', rate: 90 },
  { month: 'Avr', rate: 87 },
];

const incidentTypeData = [
  { name: 'Plomberie', value: 35 },
  { name: 'Électricité', value: 25 },
  { name: 'Chauffage', value: 20 },
  { name: 'Autres', value: 20 },
];

const paymentStatusData = [
  { month: 'Jan', onTime: 45, late: 5 },
  { month: 'Fév', onTime: 48, late: 2 },
  { month: 'Mar', onTime: 43, late: 7 },
  { month: 'Avr', onTime: 50, late: 0 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Statistics = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Statistiques</h1>

      <div className="block w-full">

        {/* Taux d'occupation */}
        <div className="bg-white p-6 m-6 rounded-lg shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Taux d'occupation</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={occupancyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="rate" stroke="#3B82F6" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Types d'incidents */}
        <div className="bg-white p-6 m-6 rounded-lg shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Types d'incidents</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={incidentTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {incidentTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Statut des paiements */}
        <div className="bg-white p-6 m-6 rounded-lg shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Statut des paiements</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={paymentStatusData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="onTime" name="À temps" fill="#10B981" />
                <Bar dataKey="late" name="En retard" fill="#EF4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;