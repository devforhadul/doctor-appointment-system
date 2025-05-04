import React, { useEffect, useState } from 'react';
import { ref, set, push, onValue } from 'firebase/database';
import { database } from '../Auth/firebase.init'; // Import your database config


const DashBoard = () => {
    const [doctorData, setDoctorData] = useState({
        name: '',
        specialty: '',
        email: '',
        phone: ''
    });
    const [doctorsList, setDoctorsList] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDoctorData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const doctorsRef = ref(database, 'doctors'); // database root -> doctors
        const newDoctorRef = push(doctorsRef); // auto generate id

        set(newDoctorRef, doctorData)
            .then(() => {
                alert('Doctor Added Successfully!');
                setDoctorData({ name: '', specialty: '', email: '', phone: '' });
            })
            .catch((error) => {
                alert('Error: ' + error.message);
            });
    };

    useEffect(() => {
        const doctorsRef = ref(database, 'doctors');

        onValue(doctorsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const loadedDoctors = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));
                setDoctorsList(loadedDoctors);
            } else {
                setDoctorsList([]);
            }
        });
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="grid gap-4 mb-8">
                <input
                    type="text"
                    name="name"
                    placeholder="Doctor Name"
                    value={doctorData.name}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                />
                <input
                    type="text"
                    name="specialty"
                    placeholder="Specialty"
                    value={doctorData.specialty}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={doctorData.email}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={doctorData.phone}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                />
                <button type="submit" className="btn btn-primary">Add Doctor</button>
            </form>

            {/* Doctors List */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">Doctors List</h2>
                {doctorsList.length > 0 ? (
                    <div className="grid gap-4">
                        {doctorsList.map((doctor) => (
                            <div key={doctor.id} className="card bg-base-100 shadow-xl p-4">
                                <h3 className="text-xl font-bold">{doctor.name}</h3>
                                <p><strong>Specialty:</strong> {doctor.specialty}</p>
                                <p><strong>Email:</strong> {doctor.email}</p>
                                <p><strong>Phone:</strong> {doctor.phone}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No doctors found.</p>
                )}
            </div>
        </div>
    );
};

export default DashBoard;
