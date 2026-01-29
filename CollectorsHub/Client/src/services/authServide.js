// Authentication Service
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const authService = {
    // Register a new user
    register: async (email, password, name) => {
        try {
            const response = await fetch(`${API_BASE_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, name }),
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.token);
                return data;
            }
            throw new Error(data.message || 'Registration failed');
        } catch (error) {
            console.error('Register error:', error);
            throw error;
        }
    },

    // Login user
    login: async (email, password) => {
        try {
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.token);
                return data;
            }
            throw new Error(data.message || 'Login failed');
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    },

    // Logout user
    logout: () => {
        localStorage.removeItem('token');
    },

    // Get stored token
    getToken: () => localStorage.getItem('token'),

    // Check if user is authenticated
    isAuthenticated: () => !!localStorage.getItem('token'),
};

export default authService;