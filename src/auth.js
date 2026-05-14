const jwt = require('jsonwebtoken');

function validateToken(token) {
    if (!token) return false;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
        return decoded;
    } catch (err) {
        return null;
    }
}

function getUserById(id) {
    // Mock DB
    return { id, username: 'dev_user' };
}

module.exports = { validateToken, getUserById };
