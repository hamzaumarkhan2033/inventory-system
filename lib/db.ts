import bcrypt from 'bcryptjs';

// Types (mirroring Prisma structure)
export enum Role {
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    STAFF = 'STAFF',
}

export type User = {
    id: string;
    name: string;
    email: string;
    password: string; // Hashed!
    role: Role;
    departmentId?: string;
};

// Mock Data Store
const mockUsers: User[] = [
    {
        id: 'user-1',
        name: 'Admin User',
        email: 'admin@example.com',
        password: '', // will set below
        role: Role.ADMIN,
    },
    {
        id: 'user-2',
        name: 'Manager User',
        email: 'manager@example.com',
        password: '',
        role: Role.MANAGER,
        departmentId: 'dept-1'
    },
    {
        id: 'user-3',
        name: 'Staff User',
        email: 'staff@example.com',
        password: '',
        role: Role.STAFF,
    }
];

// Initialize hashed passwords (async simulation)
(async () => {
    const hash = await bcrypt.hash('password123', 10);
    mockUsers.forEach(u => u.password = hash);
})();

// Repository Methods
export const db = {
    user: {
        findUnique: async ({ where }: { where: { email?: string; id?: string } }) => {
            if (where.email) {
                return mockUsers.find(u => u.email === where.email) || null;
            }
            if (where.id) {
                return mockUsers.find(u => u.id === where.id) || null;
            }
            return null;
        }
    }
    // Add other buckets (Department, Asset, etc.) as needed
};
