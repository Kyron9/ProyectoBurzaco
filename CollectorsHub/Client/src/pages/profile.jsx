import React, { useState, useEffect } from 'react';
import './profile.css';

export default function Profile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch user profile data
        const fetchProfile = async () => {
            try {
                const response = await fetch('/api/user/profile');
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (!user) return <div>No user data found</div>;

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img src={user.avatar} alt={user.name} className="profile-avatar" />
                <h1>{user.name}</h1>
                <p className="profile-email">{user.email}</p>
            </div>
            <div className="profile-content">
                <section className="profile-section">
                    <h2>About</h2>
                    <p>{user.bio}</p>
                </section>
                <section className="profile-section">
                    <h2>Details</h2>
                    <p><strong>Location:</strong> {user.location}</p>
                    <p><strong>Member Since:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
                </section>
            </div>
        </div>
    );
}