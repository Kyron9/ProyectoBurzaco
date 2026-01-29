import React, { useState, useEffect } from 'react';
import '../styles/dashboard.css';

export default function Dashboard() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            // Replace with your API endpoint
            const response = await fetch('/api/dashboard');
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="dashboard-container">Loading...</div>;
    }

    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <div className="dashboard-grid">
                {data.length > 0 ? (
                    data.map((item) => (
                        <div key={item.id} className="card">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>
        </div>
    );
}