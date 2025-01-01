export interface Room {
  id: string;
  number: string;
  status: 'available' | 'occupied' | 'maintenance';
  size: number;
  equipment: string[];
}

export interface Resident {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  roomId: string;
  paymentStatus: 'paid' | 'pending' | 'late';
}

export interface Incident {
  id: string;
  roomId: string;
  type: 'plumbing' | 'electrical' | 'other';
  description: string;
  status: 'pending' | 'inProgress' | 'resolved';
  createdAt: string;
}

