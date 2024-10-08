const db = require('../config/db.config');

// Create a new user
exports.createUser = async (userData) => {
    const query = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *';
    const values = [userData.name, userData.email];
    const result = await db.query(query, values);
    return result.rows[0];
};

// Get all users
exports.getAllUsers = async () => {
    const query = 'SELECT * FROM users';
    const result = await db.query(query);
    return result.rows;
};

// Get user by ID
exports.getUserById = async (id) => {
    const query = 'SELECT * FROM users WHERE id = $1';
    const result = await db.query(query, [id]);
    return result.rows[0];
};

// Update a user
exports.updateUser = async (id, userData) => {
    const query = 'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *';
    const values = [userData.name, userData.email, id];
    const result = await db.query(query, values);
    return result.rows[0];
};

// Delete a user
exports.deleteUser = async (id) => {
    const query = 'DELETE FROM users WHERE id = $1';
    await db.query(query, [id]);
};
