const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const itemService = {
    // Get all items
    getAll: async () => {
        const response = await fetch(`${API_BASE_URL}/items`);
        return response.json();
    },

    // Get item by ID
    getById: async (id) => {
        const response = await fetch(`${API_BASE_URL}/items/${id}`);
        return response.json();
    },

    // Create new item
    create: async (itemData) => {
        const response = await fetch(`${API_BASE_URL}/items`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(itemData),
        });
        return response.json();
    },

    // Update item
    update: async (id, itemData) => {
        const response = await fetch(`${API_BASE_URL}/items/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(itemData),
        });
        return response.json();
    },

    // Delete item
    delete: async (id) => {
        await fetch(`${API_BASE_URL}/items/${id}`, { method: 'DELETE' });
    },
};

export default itemService;