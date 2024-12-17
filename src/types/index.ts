export interface Room {
  id: string;
  number: string;
  size: number;
  status: 'available' | 'occupied' | 'maintenance';
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