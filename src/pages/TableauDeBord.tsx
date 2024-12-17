import DashboardCard from '../components/DashboardCard';
import { Building, Users } from 'lucide-react';

export default function TableauDeBord() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <DashboardCard
                title="Chambres Totales"
                value="50"
                icon={<Building className="h-6 w-6" />}
            />
            <DashboardCard
                title="Taux d'Occupation"
                value="85%"
                icon={<Users className="h-6 w-6" />}
                trend={{ value: 5, isPositive: true }}
            />

        </div>
    );
}