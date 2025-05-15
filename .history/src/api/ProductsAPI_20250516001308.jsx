const URL = 'http://localhost:3050/api/product';

// Fetch all users (likely admin-only)
export async function fetchAllProducts() {
    try {
        const response = await fetch(`${URL}/list`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to fetch users');
        }
        console.log(response.json());
        return await response.json();
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

// Delete user (admin only) — pass token for auth
// export async function deleteUser(userId) {
//     try {
//         const response = await fetch(`${URL}/${userId}`, {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (!response.ok) {
//             const errorData = await response.json();
//             throw new Error(errorData.message || 'Failed to delete user');
//         }

//         return await response.json();
//     } catch (error) {
//         console.error('Error deleting user:', error);
//         throw error;
//     }
// }

// export async function updateUserInfo(payload, token) {
//     try {
//         const response = await fetch(`${URL}/profile`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`,
//             },
//             body: JSON.stringify(payload),
//         });

//         const data = await response.json();

//         if (!response.ok) {
//             throw new Error(data.message || 'Failed to update user info');
//         }

//         return data;
//     } catch (error) {
//         console.error('Error updating user info:', error);
//         throw error;
//     }
// }
