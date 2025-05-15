const URL = 'http://localhost:3030/api/users';

// Register user
export async function registerUser(userData) {
    try {
        const response = await fetch(`${URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to register user');
        }

        return await response.json();
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}

// Login user
export async function loginUser(userData) {
    const response = await fetch(`${URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || 'Failed to login user');
    }

    return data;
}

// Fetch all users (likely admin-only)
export async function fetchAllUsers(token) {
    try {
        const response = await fetch(`${URL}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': `Bearer ${token}` }),
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to fetch users');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

// Delete user (admin only) — pass token for auth
export async function deleteUser(userId, token) {
    try {
        const response = await fetch(`${URL}/${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to delete user');
        }

        return await response.json();
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export async function updateUserInfo(payload, token) {
    try {
        const response = await fetch(`${URL}/profile`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to update user info');
        }

        return data;
    } catch (error) {
        console.error('Error updating user info:', error);
        throw error;
    }
}
