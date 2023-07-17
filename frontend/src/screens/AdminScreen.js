import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminScreen = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    // Fetch all users from the API
    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch('/api/users');
            const data = await res.json();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    // Delete a user by ID
    const deleteUser = async (id) => {
        const res = await fetch(`/api/users/delete/${id}`, {
            method: 'DELETE',
        });
        if (res.ok) {
            setUsers(users.filter((user) => user._id !== id));
        }
    };

    const handleManageBundleCategoriesClick = () => {
        navigate('/admin/abtc');
    };

    return (
        <div>
            <h1>Admin Screen</h1>
            <div>
                <Button
                    variant="primary"
                    onClick={() => console.log('Manage users clicked')}
                >
                    Manage users
                </Button>{' '}
                <Button
                    variant="primary"
                    onClick={handleManageBundleCategoriesClick}
                >
                    Manage Bundle Categories
                </Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                    users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                {user.isAdmin
                                    ? 'Admin'
                                    : user.isDesigner
                                    ? 'Designer'
                                    : user.isProvider
                                    ? 'Provider'
                                    : 'Customer'}
                            </td>
                            <td>
                                <Button
                                    variant="danger"
                                    onClick={() => deleteUser(user._id)}
                                >
                                    Remove
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default AdminScreen;
