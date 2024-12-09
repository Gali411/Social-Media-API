import db from '../config/connection.js';
import User from '../models/User.js';
// Example seed data
const userData = [
    { name: 'John Doe', email: 'john@example.com', password: 'password123' },
    { name: 'Jane Smith', email: 'jane@example.com', password: 'securepass456' },
    { name: 'Alice Johnson', email: 'alice@example.com', password: 'alicepass789' },
];
const seedDatabase = async () => {
    try {
        await db; // Wait for the database connection
        console.log('Database connected.');
        // Clear existing data
        await User.deleteMany({});
        console.log('Existing users removed.');
        // Insert seed data
        await User.insertMany(userData);
        console.log('User data seeded successfully.');
        process.exit(0); // Exit the process
    }
    catch (err) {
        console.error('Error seeding data:', err);
        process.exit(1);
    }
};
seedDatabase();
